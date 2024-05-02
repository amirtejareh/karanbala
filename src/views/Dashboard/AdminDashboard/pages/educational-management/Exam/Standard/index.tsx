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
import useUpdateStandardExam from "../../../../../../../hooks/standard-exam/useUpdateStandardExam";
import useCreateStandardExam from "../../../../../../../hooks/standard-exam/useCreateStandardExam";
import useGetCreateExamBasedOnStandardExam from "../../../../../../../hooks/create-standard-or-subjective-exam/useGetCreateExamBasedOnStandardExam";
import { DeleteLightSvg, EditLightSvg } from "../../../../../../../assets";
import { TableKit } from "../../../../../../../components/kit/Table";
import useGetStandardExams from "../../../../../../../hooks/standard-exam/useGetStandardExams";
import { PrompModalKit } from "../../../../../../../components/kit/Modal";
import useDeleteStandardExam from "../../../../../../../hooks/standard-exam/useDeleteStandardExam";

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

const StandardExam = () => {
  const classes = useStyles();

  const [, setCreateExamIds] = useState<any>([]);
  const inputNumberRef = useRef<any>();
  const inputQuestionRef = useRef<any>();
  const [quillEditorValue, setQuillEditorValue] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(0);
  const [limit, _] = useState<number>(5);
  const [value, setValue] = useState({ doUpdate: false, data: "", id: null });
  const [number, setNumber] = React.useState<any>();
  const [correctAnswer, setCorrectAnswer] = React.useState<any>();

  const [isMultipleChoiceTest, setMultipleChoiceTest] = React.useState<any>(false);
  const selectCreateExamRef = useRef<any>();

  const getCreateExam = useGetCreateExamBasedOnStandardExam();

  useEffect(() => {
    getCreateExam.refetch();
  }, []);

  const getStandardExams = useGetStandardExams(page === 0 ? 1 : page, limit);

  useEffect(() => {
    getStandardExams.refetch();
  }, [getStandardExams.data]);

  const handleCreateExamChange = (event, value) => {
    const selectedValue = value;

    if (selectedValue == null || selectedValue.value === "") {
      setCreateExamIds(null);
      return;
    }

    const selectSpecificExam = getCreateExam?.data?.createExams?.find(
      (element) => element._id === selectedValue.value,
    );

    if (selectSpecificExam.examType === "multipleChoiceTest") {
      setMultipleChoiceTest(true);
    } else {
      setMultipleChoiceTest(false);
    }
    setCreateExamIds(selectedValue);
  };

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

  const createStandardExam = useCreateStandardExam();

  const handleCreateStandardExam = async (data: any) => {
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

    createStandardExam.mutate(data, {
      onSuccess: async (result: { message: string; statusCode: number }) => {
        if (result.statusCode == 200) {
          setLoading(false);

          toast.success(result.message);
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
    });
  };

  useEffect(() => {
    if (!getStandardExams.isLoading && getStandardExams?.data?.createExams) {
      setPage(parseInt(getStandardExams?.data?.currentPage ?? 1));
      setPageSize(getStandardExams?.data?.totalPages ?? 1);
    }
  }, [getStandardExams?.data]);

  const deleteStandardExam = useDeleteStandardExam();

  const handleDeleteQuestions = (id: string) => {
    deleteStandardExam.mutate(id, {
      onSuccess: async (result: { message: string; statusCode: number }) => {
        if (result.statusCode === 200) {
          setLoading(false);
          toast(result.message);
          getStandardExams.refetch();
        } else {
          setLoading(false);
          toast(result.message);
        }
      },
    });
  };

  const updateStandardExam = useUpdateStandardExam();

  const handleUpdateStandardExam = async (data: any) => {
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
    updateStandardExam.mutate(
      { id: value.id, ...data },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          if (result.statusCode == 200) {
            setLoading(false);
            toast.success(result.message);
            setValue({ doUpdate: false, data: "", id: null });
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
    if (getCreateExam?.data) {
      setSelectOptions((prev: any) => [
        ...prev,
        ...getCreateExam?.data?.createExams?.map((element) => ({
          value: element._id,
          label: `${element.gradeLevel[0].title} - ${element.books[0].title} - ${
            element?.chapter.length > 0
              ? element.chapter[0]?.title
              : element?.term.length > 0
                ? element?.term[0]?.title
                : element?.term[0]?.title
          } - ${element.examType === "essayTest" ? " تشریحی " : " تستی"} - آزمون ${element.number}`,
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
              ? handleSubmit(handleUpdateStandardExam)
              : handleSubmit(handleCreateStandardExam)
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
              type="text"
              {...register("correctAnswer")}
              onChange={(e) => {
                setCorrectAnswer(e.target.value);
                register("correctAnswer").onChange(e);
              }}
              InputLabelProps={{ shrink: true }}
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
              InputLabelProps={{ shrink: true }}
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
        <Typography>لیست آزمون‌های استاندارد </Typography>
        {!getStandardExams.isLoading && getStandardExams?.data ? (
          <TableKit
            secondary
            headers={[{ children: `عنوان` }, { children: `عملیات` }]}
            rows={getStandardExams?.data?.standards?.map((item: any, index: any) => {
              return {
                id: item._id,
                data: {
                  title: `آزمون شماره ${item.number} `,
                  action: (
                    <>
                      <IconButton
                        onClick={() => {
                          setValue({
                            doUpdate: true,
                            data: item.title,
                            id: item._id,
                          });

                          setNumber(item.number);
                          setCorrectAnswer(item.correctAnswer);
                          setCreateExamIds(item.createExam[0]);
                          setQuillEditorValue(item.question);

                          if (item.options.length > 0) {
                            Object.entries(item.options[0]).map(([key, value]) => {
                              setOptions((prevOptions) => ({
                                ...prevOptions,
                                [key]: value,
                              }));
                            });
                          }

                          setMultipleChoiceTest(item.isMultipleChoiceTest);
                          setTimeout(() => {
                            selectCreateExamRef.current.focus();
                          }, 300);
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

export default StandardExam;
