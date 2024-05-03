import React, { useEffect, useRef, useState } from "react";
import {
  Theme,
  Box,
  TextField,
  Button,
  CircularProgress,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  IconButton,
  Switch,
  Autocomplete,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import RichTextEditor from "../../../../../../../utils/ReactQuill";
import useGetBooksBasedOnGradeLevels from "../../../../../../../hooks/book/useGetBooksBasedOnGradeLevels";
import useGetChaptersBasedOnBooks from "../../../../../../../hooks/chapter/useGetChaptersBasedOnBooks";
import useGetTermOfStudies from "../../../../../../../hooks/term-of-study/useGetTermOfStudies";
import useUpdateSubjectiveExam from "../../../../../../../hooks/subjective-exam/useUpdateSubjectiveExam";
import useCreateSubjectiveExam from "../../../../../../../hooks/subjective-exam/useCreateSubjectiveExam";
import useGetCreateExamBasedOnSubjectiveExam from "../../../../../../../hooks/create-standard-or-subjective-exam/useGetCreateExamBasedOnSubjectiveExam";
import { DeleteLightSvg, EditLightSvg } from "../../../../../../../assets";
import { PrompModalKit } from "../../../../../../../components/kit/Modal";
import { TableKit } from "../../../../../../../components/kit/Table";
import useGetSubjectiveExams from "../../../../../../../hooks/subjective-exam/useGetSubjectiveExams";
import useDeleteSubjectiveExam from "../../../../../../../hooks/subjective-exam/useDeleteSubjectiveExam";
import CreateExam from "../Create";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    gap: "10px",
    justifyContent: "space-around",
  },
  fieldOfStudy: {
    margin: "0 50px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    margin: "1rem",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "5px",
    boxShadow: `0px 1px 2px ${theme.palette.primary.main}`,
  },
  formTitle: {
    marginBottom: "2rem",
    fontSize: "2rem",
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  formField: {
    margin: "1rem",
    width: "100%",
  },
  formButton: {
    margin: "1rem",
    width: "100%",
  },
}));

const SubjectiveExam = () => {
  const classes = useStyles();

  const [gradeLevelIds, setGradeLevelIds] = useState<any>([]);
  const inputNumberRef = useRef<any>();
  const inputQuestionRef = useRef<any>();
  const imageRef = useRef<any>();
  const [quillEditorValue, setQuillEditorValue] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(0);
  const [limit, _] = useState<number>(5);
  const [value, setValue] = useState({ doUpdate: false, data: "", id: null });
  const [number, setNumber] = React.useState<any>();
  const [correctAnswer, setCorrectAnswer] = React.useState<any>();
  const [bookIds, setBookIds] = useState<any>(gradeLevelIds);
  const [chapterIds, setChapterIds] = React.useState<any>(bookIds);
  const [termIds, setTermIds] = React.useState<any>(bookIds);
  const [createExamIds, setCreateExamIds] = useState<any>([]);
  const [isMultipleChoiceTest, setMultipleChoiceTest] = React.useState<any>(false);

  const getCreateExam = useGetCreateExamBasedOnSubjectiveExam();

  useEffect(() => {
    getCreateExam.refetch();
  }, []);

  const getBooksBasedOnGradeLevels = useGetBooksBasedOnGradeLevels(
    gradeLevelIds?.length == 0 ? null : gradeLevelIds,
  );

  useEffect(() => {
    if (gradeLevelIds) {
      getBooksBasedOnGradeLevels.refetch();
    }
  }, [gradeLevelIds]);

  const getSubjectiveExams = useGetSubjectiveExams(page === 0 ? 1 : page, limit);

  const deleteSubjectiveExam = useDeleteSubjectiveExam();

  const handleDeleteQuestions = (id: string) => {
    deleteSubjectiveExam.mutate(id, {
      onSuccess: async (result: { message: string; statusCode: number }) => {
        if (result.statusCode === 200) {
          setLoading(false);
          toast(result.message);
          getSubjectiveExams.refetch();
        } else {
          setLoading(false);
          toast(result.message);
        }
      },
    });
  };

  useEffect(() => {
    if (!getSubjectiveExams.isLoading && getSubjectiveExams?.data) {
      setPage(parseInt(getSubjectiveExams?.data?.currentPage ?? 1));
      setPageSize(getSubjectiveExams?.data?.totalPages ?? 1);
    }
  }, [getSubjectiveExams?.data]);
  useEffect(() => {
    getSubjectiveExams.refetch();
  }, [getSubjectiveExams.data]);

  const getTermOfStudies = useGetTermOfStudies();

  useEffect(() => {
    if (bookIds && bookIds.length > 0) getTermOfStudies.refetch();
  }, [bookIds]);

  const getChaptersBasedOnBooks = useGetChaptersBasedOnBooks(bookIds?.length == 0 ? null : bookIds);

  useEffect(() => {
    if (bookIds) getChaptersBasedOnBooks.refetch();
  }, [bookIds]);

  const {
    handleSubmit,
    register,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    toast.error(errors["books"]?.message?.toString());
    toast.error(errors["title"]?.message?.toString());
    toast.error(errors["gradeLevels"]?.message?.toString());
    clearErrors();
  }, [errors["books"]?.message, errors["title"]?.message, errors["gradeLevels"]?.message]);

  const [options, setOptions] = useState({
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });

  const handleEditorChange = (newValue, editorName) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [editorName]: newValue,
    }));
  };

  const createSubjectiveExam = useCreateSubjectiveExam();

  const handleCreateSubjectiveExam = async (data: any) => {
    if (
      (options.option1 == "" ||
        options.option2 == "" ||
        options.option3 == "" ||
        options.option4 == "") &&
      isMultipleChoiceTest
    ) {
      return toast.error("هر ۴ گزینه باید مقدار داشته باشند");
    }

    if (quillEditorValue == "") {
      return toast.error("حداقل یک سوال باید ایجاد شود");
    }

    if (isMultipleChoiceTest) {
      data.options = options;
    } else {
      data.options = [];
    }
    data.question = quillEditorValue;
    data.isMultipleChoiceTest = isMultipleChoiceTest;
    setLoading(true);

    createSubjectiveExam.mutate(
      { ...data, createExam: createExamIds },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          if (result.statusCode == 200) {
            setLoading(false);
            setGradeLevelIds(null);
            setBookIds(null);
            setChapterIds(null);
            toast.success(result.message);
            getSubjectiveExams.refetch();
          } else {
            setLoading(false);
            if (Array.isArray(result.message)) {
              toast.error(
                <ul>
                  {result.message.map((msg: string) => (
                    <li key={msg}>{msg}</li>
                  ))}
                </ul>,
              );
            } else {
              toast.error(
                <ul>
                  <li key={result.message}>{result.message}</li>
                </ul>,
              );
            }
          }
        },
        onError: async (e: any) => {
          toast.error(e.message);
        },
      },
    );
  };

  const handleCreateExamChange = (event, value) => {
    const selectedValue = value;

    if (selectedValue == null || selectedValue.value === "") {
      setCreateExamIds(null);
      return;
    }

    const selectSpecificExam = getCreateExam?.data?.find(
      (element) => element._id === selectedValue.value,
    );

    if (selectSpecificExam.examType === "multipleChoiceTest") {
      setMultipleChoiceTest(true);
    } else {
      setMultipleChoiceTest(false);
    }
    setCreateExamIds(selectedValue.value);
  };

  const updateSubjectiveExam = useUpdateSubjectiveExam();

  const handleUpdateSubjectiveExam = async (data: any) => {
    if (
      (options.option1 == "" ||
        options.option2 == "" ||
        options.option3 == "" ||
        options.option4 == "") &&
      isMultipleChoiceTest
    ) {
      return toast.error("هر ۴ گزینه باید مقدار داشته باشند");
    }

    if (quillEditorValue == "") {
      return toast.error("حداقل یک سوال باید ایجاد شود");
    }

    if (isMultipleChoiceTest) {
      data.options = options;
    } else {
      data.options = [];
    }

    setLoading(true);
    data.question = quillEditorValue;
    data.isMultipleChoiceTest = isMultipleChoiceTest;

    updateSubjectiveExam.mutate(
      { id: value.id, ...data },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          if (result.statusCode == 200) {
            setLoading(false);
            toast.success(result.message);
            setValue({ doUpdate: false, data: "", id: null });
            setGradeLevelIds(null);
            setBookIds(null);
            setChapterIds([]);
            setTermIds([]);
            getSubjectiveExams.refetch();
          } else {
            setLoading(false);
            if (Array.isArray(result.message)) {
              toast.error(
                <ul>
                  {result.message.map((msg: string) => (
                    <li key={msg}>{msg}</li>
                  ))}
                </ul>,
              );
            } else {
              toast.error(
                <ul>
                  <li key={result.message}>{result.message}</li>
                </ul>,
              );
            }
          }
        },
        onError: async (e: any) => {
          toast.error(e.message);
        },
      },
    );
  };
  const [selectOptions, setSelectOptions] = useState([]);
  useEffect(() => {
    if (getCreateExam?.data && getCreateExam?.data.length > 0) {
      setSelectOptions((prev: any) => [
        ...getCreateExam?.data?.map((element) => ({
          value: element._id,

          label: `${element.gradeLevel[0].title} - ${element.books[0].title} - ${element?.chapter[0]
            ?.title} - ${element?.subject[0]?.title} - ${
            element.examLevel === "easy"
              ? "آسان"
              : element.examLevel === "hard"
                ? "سخت"
                : element.examLevel === "average"
                  ? "متوسط"
                  : element.examLevel === "challenging"
                    ? "چالشی"
                    : ""
          } - ${element.examType === "multipleChoiceTest" ? "تستی" : "تشریحی"} `,
        })),
      ]);
    }
  }, [getCreateExam?.data]);

  return (
    <Box className={classes.container}>
      <Box
        sx={{
          width: 500,
        }}
      >
        <form
          onSubmit={
            value.doUpdate
              ? handleSubmit(handleUpdateSubjectiveExam)
              : handleSubmit(handleCreateSubjectiveExam)
          }
        >
          <FormControl className={classes.formField} fullWidth>
            <Autocomplete
              options={selectOptions}
              onChange={handleCreateExamChange}
              renderInput={(params) => (
                <TextField {...params} label="یک آزمون انتخاب کنید" variant="outlined" />
              )}
            />
          </FormControl>

          <FormControl className={classes.formField}>
            <TextField
              value={correctAnswer}
              type="number"
              {...register("correctAnswer")}
              onChange={(e) => {
                setCorrectAnswer(e.target.value);
                register("correctAnswer").onChange(e);
              }}
              label="گزینه صحیح"
              inputRef={inputNumberRef}
            />
          </FormControl>

          <FormControl className={classes.formField}>
            <TextField
              value={number}
              type="number"
              {...register("number")}
              onChange={(e) => {
                setNumber(e.target.value);
                register("number").onChange(e);
              }}
              label="شماره سوال"
              inputRef={inputQuestionRef}
            />
          </FormControl>
          <FormControl className={classes.formField}>
            <Typography>سوال</Typography>

            <RichTextEditor
              value={quillEditorValue}
              setValue={(newValue) => setQuillEditorValue(newValue)}
            />
          </FormControl>

          <Box sx={{ margin: "0 1rem 0 1rem" }} component={"label"} htmlFor="my-switch">
            نوع آزمون (تستی / تشریحی)
          </Box>
          <Switch
            checked={isMultipleChoiceTest}
            onClick={() => setMultipleChoiceTest(!isMultipleChoiceTest)}
            id="my-switch"
          />

          {isMultipleChoiceTest && (
            <>
              <FormControl className={classes.formField}>
                <Typography>گزینه اول</Typography>
                <RichTextEditor
                  value={options.option1}
                  setValue={(value) => handleEditorChange(value, "option1")}
                />
              </FormControl>
              <FormControl className={classes.formField}>
                <Typography>گزینه دوم</Typography>

                <RichTextEditor
                  value={options.option2}
                  setValue={(value) => handleEditorChange(value, "option2")}
                />
              </FormControl>
              <FormControl className={classes.formField}>
                <Typography>گزینه سوم</Typography>

                <RichTextEditor
                  value={options.option3}
                  setValue={(value) => handleEditorChange(value, "option3")}
                />
              </FormControl>

              <FormControl className={classes.formField}>
                <Typography>گزینه چهارم</Typography>

                <RichTextEditor
                  value={options.option4}
                  setValue={(value) => handleEditorChange(value, "option4")}
                />
              </FormControl>
            </>
          )}

          <Button
            variant="contained"
            color="primary"
            className={classes.formButton}
            disabled={loading}
            type="submit"
          >
            {loading ? <CircularProgress size={24} /> : value.doUpdate ? "ویرایش" : "ذخیره"}
          </Button>
        </form>
      </Box>
      <Box className={classes.fieldOfStudy}>
        <Typography>لیست آزمون‌های موضوعی </Typography>
        {!getSubjectiveExams.isLoading && getSubjectiveExams?.data ? (
          <TableKit
            secondary
            headers={[{ children: `عنوان` }, { children: `عملیات` }]}
            rows={getSubjectiveExams?.data?.subjectives?.map((item: any, index: any) => {
              return {
                id: item._id,
                data: {
                  title: ` ${item?.createExam[0]?.gradeLevel[0]?.title} - 
                  ${item?.createExam[0]?.books[0]?.title} 
                  ${item?.createExam[0]?.chapter[0]?.title} -
                  ${item?.createExam[0]?.subject[0]?.title}`,

                  action: (
                    <>
                      <IconButton
                        onClick={() => {
                          setValue({
                            doUpdate: true,
                            data: item?.title,
                            id: item._id,
                          });

                          setNumber(item.number);
                          setCorrectAnswer(item.correctAnswer);

                          setCreateExamIds(item?.createExam[0]?._id);
                          if (item.options.length > 0) {
                            Object.entries(item.options[0]).map(([key, value]) => {
                              setOptions((prevOptions) => ({
                                ...prevOptions,
                                [key]: value,
                              }));
                            });
                          }
                          setQuillEditorValue(item.question);
                          setMultipleChoiceTest(item.isMultipleChoiceTest);

                          setTimeout(() => {
                            inputNumberRef.current.focus();
                          }, 320);
                          setTimeout(() => {
                            inputQuestionRef.current.focus();
                          }, 330);
                        }}
                      >
                        <EditLightSvg width={12} height={12} />
                      </IconButton>
                      <IconButton>
                        <PrompModalKit
                          description={`آیا از حذف آزمون  مطمئن  هستید؟`}
                          onConfirm={() => {
                            handleDeleteQuestions(item._id);
                          }}
                          approved={"بله"}
                          denied={"خیر"}
                        >
                          <DeleteLightSvg width={16} height={16} />
                        </PrompModalKit>
                      </IconButton>
                    </>
                  ),
                },
              };
            })}
            pagination={{
              page: page,
              count: pageSize,
              rowsPerPage: limit,
              onChange: (_, e) => {
                setPage(e);
              },
              onRowsPerPageChange: () => {},
            }}
          />
        ) : (
          <>در حال بارگزاری...</>
        )}
      </Box>
    </Box>
  );
};

export default SubjectiveExam;
