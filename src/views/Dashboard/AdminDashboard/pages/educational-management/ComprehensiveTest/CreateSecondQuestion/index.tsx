import React, { useEffect, useRef, useState } from "react";
import {
  Theme,
  Box,
  TextField,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Autocomplete,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import RichTextEditor from "../../../../../../../utils/ReactQuill";
import useGetComprehensiveTests from "../../../../../../../hooks/comprehensive-test/useGetComprehensiveTests";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { TableKit } from "../../../../../../../components/kit/Table";
import { DeleteLightSvg, EditLightSvg } from "../../../../../../../assets";
import { PrompModalKit } from "../../../../../../../components/kit/Modal";
import useGetPrimaryQuestionBasedOnComprehensiveTest from "../../../../../../../hooks/comprehensive-test/primary-question/useGetPrimaryQuestionBasedOnComprehensiveTest";
import useDeleteSecondQuestion from "../../../../../../../hooks/comprehensive-test/second-question/useDeleteSecondQuestion";
import useCreateSecondQuestion from "../../../../../../../hooks/comprehensive-test/second-question/useCreateSecondQuestion";
import useUpdateSecondQuestion from "../../../../../../../hooks/comprehensive-test/second-question/useUpdateSecondQuestion";
import useGetSecondQuestionBasedOnComprehensiveTestIdAndPrimaryQuestionId from "../../../../../../../hooks/comprehensive-test/second-question/useGetSecondQuestionBasedOnComprehensiveTestIdAndPrimaryQuestionId";

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

const CreateSecondQuestion = () => {
  const classes = useStyles();
  const {
    handleSubmit,
    register,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [quillEditorValue, setQuillEditorValue] = useState<any>();
  const [answersheetEditorValue, setAnswersheetEditorValue] = useState<any>();
  const [value, setValue] = useState({ doUpdate: false, data: "", id: null });
  const [questionNumber, setQuestionNumber] = useState<number>();
  const [loading, setLoading] = useState(false);
  const getComprehensiveTests = useGetComprehensiveTests();
  const [comprehensiveTestOptions, setComprehensiveTestOptions] = useState();
  const [primaryQuestionOptions, setPrimaryQuestionOptions] = useState();
  const [comprehensiveTestId, setComprehensiveTestId] = useState<any>([]);
  const [primaryQuestionId, setPrimaryQuestionId] = useState<any>([]);
  const getSecondQuestionBasedOnComprehensiveTest = useGetPrimaryQuestionBasedOnComprehensiveTest(
    1,
    5000,
    comprehensiveTestId,
  );
  const getSecondQuestionBasedOnComprehensiveTestIdAndPrimaryQuestionId =
    useGetSecondQuestionBasedOnComprehensiveTestIdAndPrimaryQuestionId(
      primaryQuestionId,
      comprehensiveTestId,
    );
  const deleteSecondQuestion = useDeleteSecondQuestion();

  const handleDeleteQuestions = (id: string) => {
    deleteSecondQuestion.mutate(id, {
      onSuccess: async (result: { message: string; statusCode: number }) => {
        getSecondQuestionBasedOnComprehensiveTest.refetch();
        if (result.statusCode === 200) {
          setLoading(false);
          toast(result.message);
        } else {
          setLoading(false);
          toast(result.message);
        }
      },
    });
  };

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

  useEffect(() => {
    getComprehensiveTests.refetch();
  }, []);

  useEffect(() => {
    if (comprehensiveTestId && comprehensiveTestId.length > 0) {
      getSecondQuestionBasedOnComprehensiveTest.refetch();
    }
  }, [comprehensiveTestId]);

  useEffect(() => {
    if (
      comprehensiveTestId &&
      comprehensiveTestId.length > 0 &&
      primaryQuestionId &&
      primaryQuestionId.length > 0
    ) {
      getSecondQuestionBasedOnComprehensiveTestIdAndPrimaryQuestionId.refetch();
    }
  }, [comprehensiveTestId, primaryQuestionId]);

  useEffect(() => {
    if (comprehensiveTestId && comprehensiveTestId.length > 0) {
    }
  }, [comprehensiveTestId]);

  useEffect(() => {
    if (getSecondQuestionBasedOnComprehensiveTest.data) {
      setPrimaryQuestionOptions(
        getSecondQuestionBasedOnComprehensiveTest.data.map((primaryQuestion) => {
          return {
            label: ` ${primaryQuestion.questionNumber} `,
            value: primaryQuestion._id,
          };
        }),
      );
    }
  }, [getSecondQuestionBasedOnComprehensiveTest.data]);

  useEffect(() => {
    if (getComprehensiveTests.data) {
      setComprehensiveTestOptions(
        getComprehensiveTests.data.map((comprehensiveTest) => {
          return {
            label: `تست جامع:‌ ${comprehensiveTest.gradeLevel[0].title} - ${comprehensiveTest.chapter[0].title} - ${comprehensiveTest.book[0].title} `,
            value: comprehensiveTest._id,
          };
        }),
      );
    }
  }, [getComprehensiveTests.data]);

  const handleCreateComprehensiveTestChange = (event, value) => {
    const selectedValue = value;
    setComprehensiveTestId(selectedValue?.value);
  };

  const handleCreatePrimaryQuestionChange = (event, value) => {
    const selectedValue = value;
    setPrimaryQuestionId(selectedValue?.value);
  };

  const createSecondQuestion = useCreateSecondQuestion();
  const updateSecondQuestion = useUpdateSecondQuestion();

  const handleCreateSecondQuestion = async (data: any) => {
    if (
      options.option1 == "" ||
      options.option2 == "" ||
      options.option3 == "" ||
      options.option4 == ""
    ) {
      return toast.error("هر ۴ گزینه باید مقدار داشته باشند");
    }

    if (quillEditorValue == "") {
      return toast.error("حداقل یک سوال باید ایجاد شود");
    }

    data.options = options;
    data.question = quillEditorValue;
    data.answersheet = answersheetEditorValue;
    data.questionNumber = questionNumber;
    setLoading(true);
    createSecondQuestion.mutate(
      { ...data, comprehensiveTestId, primaryQuestionId },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          if (result.statusCode == 200) {
            setLoading(false);
            getSecondQuestionBasedOnComprehensiveTestIdAndPrimaryQuestionId.refetch();

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
      },
    );
  };

  const handleUpdateSecondQuestion = async (data: any) => {
    if (
      options.option1 == "" ||
      options.option2 == "" ||
      options.option3 == "" ||
      options.option4 == ""
    ) {
      return toast.error("هر ۴ گزینه باید مقدار داشته باشند");
    }

    if (quillEditorValue == "") {
      return toast.error("حداقل یک سوال باید ایجاد شود");
    }
    data.options = options;

    setLoading(true);
    data.question = quillEditorValue;
    data.answersheet = answersheetEditorValue;
    data.questionNumber = questionNumber;
    updateSecondQuestion.mutate(
      { id: value?.id, ...data },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          if (result.statusCode == 200) {
            getSecondQuestionBasedOnComprehensiveTestIdAndPrimaryQuestionId.refetch();
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
  return (
    <Box className={classes.container}>
      <Box
        sx={{
          width: 500,
        }}
      >
        <form
          onSubmit={
            value?.doUpdate
              ? handleSubmit(handleUpdateSecondQuestion)
              : handleSubmit(handleCreateSecondQuestion)
          }
        >
          <FormControl className={classes.formField} fullWidth>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={comprehensiveTestOptions}
              onChange={handleCreateComprehensiveTestChange}
              renderInput={(params) => (
                <TextField {...params} label="آزمون مورد نظر را انتخاب کنید" />
              )}
            />
          </FormControl>

          <FormControl className={classes.formField} fullWidth>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={primaryQuestionOptions}
              onChange={handleCreatePrimaryQuestionChange}
              renderInput={(params) => (
                <TextField {...params} label="سوال اصلی مورد نظر را انتخاب کنید" />
              )}
            />
          </FormControl>

          <FormControl className={classes.formField}>
            <Typography>سوال</Typography>
            <RichTextEditor
              value={quillEditorValue}
              setValue={(newValue) => setQuillEditorValue(newValue)}
            />
          </FormControl>

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
          <FormControl className={classes.formField}>
            <Typography>پاسخنامه</Typography>

            <RichTextEditor
              value={answersheetEditorValue}
              setValue={(newValue) => setAnswersheetEditorValue(newValue)}
            />
          </FormControl>

          <Button variant="contained" color="primary" className={classes.formButton} type="submit">
            {loading ? <CircularProgress size={24} /> : value?.doUpdate ? "ویرایش" : "ذخیره"}
          </Button>
        </form>
      </Box>
      <Box className={classes.fieldOfStudy}>
        <Typography>لیست سوالات مشابه دوم </Typography>
        {!getSecondQuestionBasedOnComprehensiveTestIdAndPrimaryQuestionId.isLoading &&
        getSecondQuestionBasedOnComprehensiveTestIdAndPrimaryQuestionId?.data ? (
          <TableKit
            secondary
            headers={[{ children: `عنوان` }, { children: `عملیات` }]}
            rows={getSecondQuestionBasedOnComprehensiveTestIdAndPrimaryQuestionId?.data?.map(
              (item: any, index: any) => {
                return {
                  id: item._id,
                  data: {
                    title: `سوال مشابه  1`,
                    action: (
                      <>
                        <IconButton
                          onClick={() => {
                            setValue({
                              doUpdate: true,
                              data: item.title,
                              id: item._id,
                            });

                            setQuestionNumber(item.questionNumber);
                            setComprehensiveTestId(item.comprehensiveTestId[0]);
                            setQuillEditorValue(item.question);
                            setAnswersheetEditorValue(item.answersheet);

                            if (item.options.length > 0) {
                              Object.entries(item.options[0]).map(([key, value]) => {
                                setOptions((prevOptions) => ({
                                  ...prevOptions,
                                  [key]: value,
                                }));
                              });
                            }
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
              },
            )}
            // pagination={{
            //   page: page,
            //   count: pageSize,
            //   rowsPerPage: limit,
            //   onChange: (_, e) => {
            //     setPage(e);
            //   },
            //   onRowsPerPageChange: () => {},
            // }}
          />
        ) : (
          <>در حال بارگزاری...</>
        )}
      </Box>
    </Box>
  );
};

export default CreateSecondQuestion;
