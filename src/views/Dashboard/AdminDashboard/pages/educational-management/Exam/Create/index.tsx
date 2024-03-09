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
import { Switch } from "@mui/base/Switch";
import useGetGradeLevels from "../../../../../../../hooks/grade-level/useGetGradeLevels";
import useGetBooksBasedOnGradeLevels from "../../../../../../../hooks/book/useGetBooksBasedOnGradeLevels";
import useGetChaptersBasedOnBooks from "../../../../../../../hooks/chapter/useGetChaptersBasedOnBooks";
import useUpdateCreateExam from "../../../../../../../hooks/create-standard-or-subjective-exam/useUpdateCreateExam";
import useGetTermOfStudies from "../../../../../../../hooks/term-of-study/useGetTermOfStudies";
import useCreateCreateExam from "../../../../../../../hooks/create-standard-or-subjective-exam/useCreateCreateExam";
import { bytesToKilobytes } from "../../../../../../../utils/helper";
import IconButton from "../../../../../../../components/kit/IconButton/IconButton";
import { PrompModalKit } from "../../../../../../../components/kit/Modal";
import { TableKit } from "../../../../../../../components/kit/Table";
import { DeleteLightSvg } from "../../../../../../../assets";

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

const CreateExam = () => {
  const classes = useStyles();
  const pdfRef = useRef<any>();

  const selectGradeLevelRef = useRef<any>();
  const selectBookRef = useRef<any>();
  const selectChaptertRef = useRef<any>();
  const selectTypeRef = useRef<any>();
  const selectTermRef = useRef<any>();
  const [gradeLevelIds, setGradeLevelIds] = useState<any>([]);
  const inputNumberRef = useRef<any>();
  const timeRef = useRef<any>();
  const imageRef = useRef<any>();
  const [quillEditorValue, setQuillEditorValue] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(10);
  const [value, setValue] = useState({ doUpdate: false, data: "", id: null });
  const [number, setNumber] = React.useState<any>();
  const [time, setTime] = React.useState<any>();
  const [bookIds, setBookIds] = useState<any>(gradeLevelIds);
  const [chapterIds, setChapterIds] = React.useState<any>(bookIds);
  const [termIds, setTermIds] = React.useState<any>(bookIds);
  const [typeIds, setTypeIds] = React.useState<any>("");

  const getGradeLevels = useGetGradeLevels();
  const getBooksBasedOnGradeLevels = useGetBooksBasedOnGradeLevels(
    gradeLevelIds?.length == 0 ? null : gradeLevelIds,
  );

  useEffect(() => {
    if (bookIds && bookIds.length > 0) getTermOfStudies.refetch();
  }, [bookIds]);

  useEffect(() => {
    if (gradeLevelIds) {
      getBooksBasedOnGradeLevels.refetch();
    }
  }, [gradeLevelIds]);

  const handleGradeLevelChange = (event: SelectChangeEvent) => {
    setGradeLevelIds(event.target.value as any);
    setBookIds(null);
    setChapterIds([]);
  };

  const getChaptersBasedOnBooks = useGetChaptersBasedOnBooks(bookIds?.length == 0 ? null : bookIds);

  useEffect(() => {
    if (bookIds) getChaptersBasedOnBooks.refetch();
  }, [bookIds]);

  const handleBookChange = (event: SelectChangeEvent) => {
    setBookIds(event.target.value as any);
    setChapterIds([]);
  };

  const handleChapterChange = (event: SelectChangeEvent) => {
    setChapterIds(event.target.value as any);
    setTermIds([]);
  };

  const handleTermChange = (event: SelectChangeEvent) => {
    setTermIds(event.target.value as any);
    setChapterIds([]);
  };

  const handleTypeChange = (event: SelectChangeEvent) => {
    setTypeIds(event.target.value as any);
  };

  const getTermOfStudies = useGetTermOfStudies();

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

  const createCreateExam = useCreateCreateExam();

  const handleCreateCreateExam = async (data: any) => {
    console.log(selectedFile);

    createCreateExam.mutate(
      {
        ...data,
        AnswerSheetSourcePdfFile: selectedFile,
        chapter: chapterIds,
        term: termIds,
      },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          setGradeLevelIds(null);
          setBookIds(null);
          setChapterIds([]);
          setTermIds([]);
          toast.success(result.message);
        },
        onError: async (e: any) => {
          toast.error(e.message);
        },
      },
    );
  };

  const updateCreateExam = useUpdateCreateExam();

  const handleUpdateCreateExam = async (data: any) => {
    setLoading(true);

    updateCreateExam.mutate(
      {
        id: value.id,
        AnswerSheetSourcePdfFile: selectedFile,
        chapter: chapterIds,
        term: termIds,
        ...data,
      },
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

  const [selectedFile, setSelectedFile] = useState<any[]>([]);

  const onSelectFile = (e: any) => {
    const newFiles = Array.from(e.target.files);
    if (selectedFile.length < 1) {
      setSelectedFile([...selectedFile, ...newFiles]);
    }
    if (selectedFile.length === 1) {
      toast.error("شما تنها می‌توانید یک فایل پاسخنامه آپلود نمایید");
    }
  };

  const handleRemoveFile = (fileToRemove) => {
    const updatedFiles = selectedFile.filter((file) => file !== fileToRemove);
    setSelectedFile(updatedFiles);
  };

  const label = { slotProps: { input: { "aria-label": "Demo switch" } } };

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
              ? handleSubmit(handleUpdateCreateExam)
              : handleSubmit(handleCreateCreateExam)
          }
        >
          <FormControl className={classes.formField} fullWidth>
            <InputLabel id="demo-simple-select-label">انتخاب (استاندارد، موضوعی)</InputLabel>
            <Select
              value={typeIds}
              {...register("type")}
              onChange={handleTypeChange}
              inputRef={selectTypeRef}
            >
              <MenuItem value={"standard"}>استاندارد</MenuItem>
              <MenuItem value={"subjective"}>موضوعی</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formField} fullWidth>
            <InputLabel id="demo-simple-select-label">انتخاب پایه</InputLabel>
            <Select
              value={gradeLevelIds ?? []}
              {...register("gradeLevel")}
              inputRef={selectGradeLevelRef}
              onChange={handleGradeLevelChange}
            >
              {!getGradeLevels?.isLoading &&
                getGradeLevels?.data?.map((element: any) => {
                  return (
                    <MenuItem key={element._id} value={element._id}>
                      {element.title}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>

          <FormControl className={classes.formField} fullWidth>
            <InputLabel id="demo-simple-select-label">انتخاب کتاب</InputLabel>
            <Select
              value={bookIds ?? []}
              {...register("books")}
              inputRef={selectBookRef}
              onChange={handleBookChange}
            >
              {!getBooksBasedOnGradeLevels?.isLoading &&
                getBooksBasedOnGradeLevels?.data != undefined &&
                getBooksBasedOnGradeLevels?.data?.map((element) => {
                  return (
                    <MenuItem key={element._id} value={element._id}>
                      {element.title}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
          <FormControl className={classes.formField} fullWidth>
            <InputLabel id="demo-simple-select-label">انتخاب فصل</InputLabel>
            <Select
              onChange={handleChapterChange}
              value={chapterIds ?? []}
              inputRef={selectChaptertRef}
            >
              {!getChaptersBasedOnBooks?.isLoading &&
                getChaptersBasedOnBooks?.data != undefined &&
                getChaptersBasedOnBooks?.data?.map((element) => {
                  return (
                    <MenuItem key={element._id} value={element._id}>
                      {element.title}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>

          <FormControl className={classes.formField} fullWidth>
            <InputLabel id="demo-simple-select-label">انتخاب (ترم یک، ترم دو، کل کتاب)</InputLabel>
            <Select value={termIds ?? []} inputRef={selectTermRef} onChange={handleTermChange}>
              {!getTermOfStudies?.isLoading &&
                getTermOfStudies?.data != undefined &&
                getTermOfStudies?.data?.map((element) => {
                  return (
                    <MenuItem key={element._id} value={element._id}>
                      {element.title}
                    </MenuItem>
                  );
                })}
            </Select>
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
              label="شماره آزمون"
              inputRef={inputNumberRef}
            />
          </FormControl>

          <FormControl className={classes.formField}>
            <TextField
              value={time}
              type="text"
              {...register("time")}
              onChange={(e) => {
                setTime(e.target.value);
                register("time").onChange(e);
              }}
              label="مدت زمان آزمون ( به دقیقه )"
              inputRef={timeRef}
            />
          </FormControl>

          {/* select pdf files */}
          {bookIds && bookIds?.length > 0 && (
            <Box
              sx={{
                width: "510px",
                backgroundColor: "#ededed",
                padding: "10px",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: "12px",
                marginTop: "10px",
              }}
            >
              <input
                type="file"
                accept=".pdf"
                multiple
                ref={(e) => {
                  pdfRef.current = e;
                }}
                hidden
                onChange={(e) => {
                  onSelectFile(e);
                }}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.formButton}
                disabled={loading}
                onClick={() => pdfRef.current.click()}
              >
                {"انتخاب فایل PDF"}
              </Button>

              {/* pdf list */}
              <Box
                sx={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography textAlign={"center"}>لیست فایل pdf</Typography>

                <TableKit
                  secondary
                  headers={[
                    { children: `نوع فایل` },
                    { children: `عنوان` },
                    { children: `حجم KB` },
                    { children: `عملیات` },
                  ]}
                  rows={selectedFile?.map((item: any, index: any) => {
                    return {
                      id: index,
                      data: {
                        type: index == 0 ? "پاسخنامه" : "بودجه بندی",
                        title: item.name ?? "-",
                        link: bytesToKilobytes(item.size) ?? "-",
                        action: (
                          <>
                            <IconButton>
                              <PrompModalKit
                                description={"آیا از حذف فایل پی دی اف مورد نظر مطمئن  هستید؟"}
                                onConfirm={() => {
                                  handleRemoveFile(item);
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
                />
              </Box>
            </Box>
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
        <Typography>لیست آزمون‌های استاندارد و موضوعی </Typography>
      </Box>
    </Box>
  );
};

export default CreateExam;
