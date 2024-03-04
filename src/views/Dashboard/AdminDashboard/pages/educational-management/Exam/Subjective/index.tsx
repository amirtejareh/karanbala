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
  const imageRef = useRef<any>();
  const [quillEditorValue, setQuillEditorValue] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [limit, _] = useState<number>(5);

  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(10);
  const [value, setValue] = useState({ doUpdate: false, data: "", id: null });
  const [number, setNumber] = React.useState<any>();
  const [correctAnswer, setCorrectAnswer] = React.useState<any>();
  const [bookIds, setBookIds] = useState<any>(gradeLevelIds);
  const [chapterIds, setChapterIds] = React.useState<any>(bookIds);
  const [termIds, setTermIds] = React.useState<any>(bookIds);

  const getCreateExam = useGetCreateExamBasedOnSubjectiveExam(page === 0 ? 1 : page, limit);

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
    setLoading(true);

    createSubjectiveExam.mutate(data, {
      onSuccess: async (result: { message: string; statusCode: number }) => {
        if (result.statusCode == 200) {
          setLoading(false);
          setGradeLevelIds(null);
          setBookIds(null);
          setChapterIds(null);
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

  const updateSubjectiveExam = useUpdateSubjectiveExam();

  const handleUpdateSubjectiveExam = async (data: any) => {
    setLoading(true);

    updateSubjectiveExam.mutate(
      { id: value.id, chapter: chapterIds, term: termIds, ...data },
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
            value.doUpdate
              ? handleSubmit(handleUpdateSubjectiveExam)
              : handleSubmit(handleCreateSubjectiveExam)
          }
        >
          <FormControl className={classes.formField} fullWidth>
            <InputLabel id="demo-simple-select-label">انتخاب آزمون</InputLabel>
            <Select {...register("createExam")}>
              {!getCreateExam?.isLoading &&
                getCreateExam?.data?.createExams?.map((element: any) => {
                  return (
                    <MenuItem key={element._id} value={element._id}>
                      {element.number} - {element.type === "subjective" ? "موضوعی" : "استاندارد"}
                    </MenuItem>
                  );
                })}
            </Select>
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
              label="گزینه صحیح"
              inputRef={inputNumberRef}
            />
          </FormControl>

          <FormControl className={classes.formField}>
            <TextField
              value={number}
              type="text"
              {...register("number")}
              onChange={(e) => {
                setNumber(e.target.value);
                register("number").onChange(e);
              }}
              label="شماره سوال"
              inputRef={inputNumberRef}
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
      </Box>
    </Box>
  );
};

export default SubjectiveExam;
