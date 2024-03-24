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
import { PrompModalKit } from "../../../../../../../components/kit/Modal";
import { TableKit } from "../../../../../../../components/kit/Table";
import { DeleteLightSvg, EditLightSvg } from "../../../../../../../assets";
import useGetSubjectsBasedOnSections from "../../../../../../../hooks/subject/useGetSubjectsBasedOnSections";
import useGetSectionsBasedOnChapters from "../../../../../../../hooks/section/useGetSectionsBasedOnChapters";
import useGetCreateExamBasedOnStandardExamAndChapters from "../../../../../../../hooks/create-standard-or-subjective-exam/useGetCreateExamBasedOnStandardExamAndChapters";
import useDeleteCreateExam from "../../../../../../../hooks/create-standard-or-subjective-exam/useDeleteCreateExam";
import useGetCreateExamBasedOnStandardExamAndTerms from "../../../../../../../hooks/create-standard-or-subjective-exam/useGetCreateExamBasedOnStandardExamAndTerms";

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
  const selectExamTypeRef = useRef<any>();
  const selectExamLevelRef = useRef<any>();
  const selectTermRef = useRef<any>();
  const [gradeLevelIds, setGradeLevelIds] = useState<any>([]);
  const timeRef = useRef<any>();
  const selectSubjectRef = useRef<any>();
  const [quillEditorValue, setQuillEditorValue] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(0);
  const [value, setValue] = useState({ doUpdate: false, data: "", id: null });
  const [limit, _] = useState<number>(5);
  const [number, setNumber] = React.useState<any>();
  const [time, setTime] = React.useState<any>();
  const [bookIds, setBookIds] = useState<any>(gradeLevelIds);
  const [chapterIds, setChapterIds] = React.useState<any>(bookIds);
  const [sectionIds, setSectionIds] = useState<any>(chapterIds);
  const [termIds, setTermIds] = React.useState<any>(bookIds);
  const [typeIds, setTypeIds] = React.useState<any>("standard");
  const [examTypeIds, setExamTypeIds] = React.useState<any>("");
  const [examLevelIds, setExamLevelIds] = React.useState<any>("");
  const [isPublished, setIsPublished] = useState<boolean>(false);
  const [subjectIds, setSubjectIds] = useState<any>();
  const getGradeLevels = useGetGradeLevels();
  const selectSectionRef = useRef<any>();
  const numberRef = useRef<any>(null);

  const getBooksBasedOnGradeLevels = useGetBooksBasedOnGradeLevels(
    gradeLevelIds?.length == 0 ? null : gradeLevelIds,
  );

  const getCreateExamBasedOnStandardExamAndChapters =
    useGetCreateExamBasedOnStandardExamAndChapters(
      page === 0 ? 1 : page,
      limit,
      chapterIds?.length == 0 ? null : chapterIds,
    );

  const getCreateExamBasedOnStandardExamAndTerms = useGetCreateExamBasedOnStandardExamAndTerms(
    page === 0 ? 1 : page,
    limit,
    termIds?.length == 0 ? null : termIds,
  );

  const handleSubjectChange = (event: SelectChangeEvent) => {
    setSubjectIds(event.target.value as any);
  };

  useEffect(() => {
    if (bookIds && bookIds?.length > 0) getTermOfStudies.refetch();
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

  const handleExamTypeChange = (event: SelectChangeEvent) => {
    setExamTypeIds(event.target.value as any);
  };

  const handleExamLevelChange = (event: SelectChangeEvent) => {
    setExamLevelIds(event.target.value as any);
  };

  const subjectsBasedOnSections = useGetSubjectsBasedOnSections(
    sectionIds?.length == 0 ? null : sectionIds,
  );

  const getTermOfStudies = useGetTermOfStudies();

  const {
    handleSubmit,
    register,
    clearErrors,
    unregister,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (typeIds === "standard") {
      unregister(["examLevel", "subject", "section"]);
    }
    if (typeIds === "subjective") {
      unregister(["number", "time"]);
    }
  }, [typeIds]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    toast.error(errors["books"]?.message?.toString());
    toast.error(errors["title"]?.message?.toString());
    toast.error(errors["gradeLevels"]?.message?.toString());
    clearErrors();
  }, [errors["books"]?.message, errors["title"]?.message, errors["gradeLevels"]?.message]);

  const createCreateExam = useCreateCreateExam();
  const deleteCreateExam = useDeleteCreateExam();

  const handleDeleteQuestions = (id: string) => {
    deleteCreateExam.mutate(id, {
      onSuccess: async (result: { message: string; statusCode: number }) => {
        if (result.statusCode === 200) {
          setLoading(false);
          toast(result.message);
          getCreateExamBasedOnStandardExamAndChapters.refetch();
        } else {
          setLoading(false);
          toast(result.message);
        }
      },
    });
  };

  const handleSectionChange = (event: SelectChangeEvent) => {
    setSectionIds(event.target.value as any);
    setSubjectIds([]);
  };

  const getSectionsBasedOnChapters = useGetSectionsBasedOnChapters(
    chapterIds?.length == 0 ? null : chapterIds,
  );

  const handleCreateCreateExam = async (data: any) => {
    data.isPublished = isPublished;
    createCreateExam.mutate(
      {
        ...data,
        AnswerSheetSourcePdfFile: selectedFile,
        chapter: chapterIds,
        term: termIds,
      },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          toast.success(result.message);
          setGradeLevelIds(null);
          setBookIds(null);
          setChapterIds(null);
          setTermIds([]);
          setGradeLevelIds(null);
          setBookIds(null);
          setTermIds([]);
          setExamTypeIds("");
          setNumber("");
          setTime("");
          setIsPublished(false);
          getCreateExamBasedOnStandardExamAndChapters.refetch();
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
    data.isPublished = isPublished;

    updateCreateExam.mutate(
      {
        ...data,
        id: value.id,
        AnswerSheetSourcePdfFile: selectedFile,
        chapter: chapterIds,
        term: termIds,
      },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          if (result.statusCode == 200) {
            setLoading(false);
            toast.success(result.message);
            setValue({ doUpdate: false, data: "", id: null });
            setGradeLevelIds(null);
            setBookIds(null);
            setChapterIds(null);
            setTermIds([]);
            setExamTypeIds("");
            setNumber("");
            setTime("");
            setSelectedFile([]);
            setIsPublished(false);
            getCreateExamBasedOnStandardExamAndChapters.refetch();
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
    if (selectedFile?.length < 1) {
      setSelectedFile([...selectedFile, ...newFiles]);
    }
    if (selectedFile?.length === 1) {
      toast.error("شما تنها می‌توانید یک فایل پاسخنامه آپلود نمایید");
    }
  };

  useEffect(() => {
    if (chapterIds && chapterIds?.length > 0) {
      getSectionsBasedOnChapters.refetch();
      getCreateExamBasedOnStandardExamAndChapters.refetch();
    }
  }, [chapterIds]);

  useEffect(() => {
    if (termIds && termIds?.length > 0) {
      getCreateExamBasedOnStandardExamAndTerms.refetch();
    }
  }, [termIds]);

  useEffect(() => {
    if (
      !getCreateExamBasedOnStandardExamAndChapters.isLoading &&
      getCreateExamBasedOnStandardExamAndChapters?.data?.createExams
    ) {
      setPage(parseInt(getCreateExamBasedOnStandardExamAndChapters?.data?.currentPage ?? 1));
      setPageSize(getCreateExamBasedOnStandardExamAndChapters?.data?.totalPages ?? 1);
    }
  }, [getCreateExamBasedOnStandardExamAndChapters?.data]);

  useEffect(() => {
    if (
      !getCreateExamBasedOnStandardExamAndTerms.isLoading &&
      getCreateExamBasedOnStandardExamAndTerms?.data?.createExams
    ) {
      setPage(parseInt(getCreateExamBasedOnStandardExamAndTerms?.data?.currentPage ?? 1));
      setPageSize(getCreateExamBasedOnStandardExamAndTerms?.data?.totalPages ?? 1);
    }
  }, [getCreateExamBasedOnStandardExamAndTerms?.data]);

  useEffect(() => {
    if (sectionIds) subjectsBasedOnSections.refetch();
  }, [sectionIds]);

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
              required
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
              required
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
              required
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

          {typeIds === "subjective" && (
            <>
              <FormControl className={classes.formField} fullWidth>
                <InputLabel id="demo-simple-select-label">انتخاب بخش</InputLabel>
                <Select
                  required
                  value={sectionIds ?? []}
                  {...register("section")}
                  inputRef={selectSectionRef}
                  onChange={handleSectionChange}
                >
                  {!getSectionsBasedOnChapters?.isLoading &&
                    getSectionsBasedOnChapters?.data != undefined &&
                    getSectionsBasedOnChapters?.data?.map((element) => {
                      return (
                        <MenuItem key={element._id} value={element._id}>
                          {element.title}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>

              <FormControl className={classes.formField} fullWidth>
                <InputLabel id="demo-simple-select-label">انتخاب موضوع</InputLabel>
                <Select
                  required
                  value={subjectIds ?? []}
                  {...register("subject")}
                  inputRef={selectSubjectRef}
                  onChange={handleSubjectChange}
                >
                  {!subjectsBasedOnSections?.isLoading &&
                    subjectsBasedOnSections?.data != undefined &&
                    subjectsBasedOnSections?.data?.map((element) => {
                      return (
                        <MenuItem key={element._id} value={element._id}>
                          {element.title}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>

              <FormControl className={classes.formField} fullWidth>
                <InputLabel id="demo-simple-select-label">
                  انتخاب سطح آزمون (ساده / متوسط / سخت / چالشی)
                </InputLabel>
                <Select
                  required
                  value={examLevelIds}
                  {...register("examLevel")}
                  onChange={handleExamLevelChange}
                  inputRef={selectExamLevelRef}
                >
                  <MenuItem value={"easy"}>ساده</MenuItem>
                  <MenuItem value={"average"}>متوسط</MenuItem>
                  <MenuItem value={"hard"}>سخت</MenuItem>
                  <MenuItem value={"challenging"}>چالشی</MenuItem>
                </Select>
              </FormControl>
            </>
          )}

          {typeIds === "standard" && (
            <>
              <FormControl className={classes.formField} fullWidth>
                <InputLabel id="demo-simple-select-label">
                  انتخاب (ترم یک، ترم دو، کل کتاب)
                </InputLabel>
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
                  required
                  value={number}
                  {...register("number")}
                  onChange={(e) => {
                    setNumber(e.target.value);
                    register("number").onChange(e);
                  }}
                  label="شماره آزمون"
                  type="text"
                  inputRef={numberRef}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>

              <FormControl className={classes.formField}>
                <TextField
                  value={time}
                  required
                  {...register("time")}
                  onChange={(e) => {
                    setTime(e.target.value);
                    register("time").onChange(e);
                  }}
                  label="مدت زمان آزمون ( به دقیقه )"
                  type="text"
                  inputRef={timeRef}
                  InputLabelProps={{ shrink: true }}
                />
              </FormControl>
            </>
          )}

          <FormControl className={classes.formField} fullWidth>
            <InputLabel id="demo-simple-select-label">انتخاب نوع آزمون (تستی، تشریحی)</InputLabel>
            <Select
              required
              value={examTypeIds}
              {...register("examType")}
              onChange={handleExamTypeChange}
              inputRef={selectExamTypeRef}
            >
              <MenuItem value={"multipleChoiceTest"}>تستی</MenuItem>
              <MenuItem value={"essayTest"}>تشریحی</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ margin: "0 1rem 0 1rem" }} component={"label"} htmlFor="my-switch">
            انتشار
          </Box>
          <Switch
            checked={isPublished}
            onClick={() => setIsPublished(!isPublished)}
            id="my-switch"
          />

          {/* select pdf files */}
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

        {!getCreateExamBasedOnStandardExamAndChapters.isLoading &&
        getCreateExamBasedOnStandardExamAndChapters?.data &&
        chapterIds?.length > 0 ? (
          <TableKit
            secondary
            headers={[{ children: `عنوان` }, { children: `عملیات` }]}
            rows={getCreateExamBasedOnStandardExamAndChapters?.data?.createExams?.map(
              (item: any, index: any) => {
                return {
                  id: item._id,
                  data: {
                    title: `آزمون شماره ${item.number} - ${
                      item.type === "standard" ? "استاندارد" : "موضوعی"
                    }`,
                    action: (
                      <>
                        <IconButton
                          onClick={() => {
                            setValue({
                              doUpdate: true,
                              data: item.title,
                              id: item._id,
                            });
                            setGradeLevelIds(item.gradeLevel[0]._id);
                            setNumber(item.number);
                            setChapterIds(item.chapter[0]._id);
                            setBookIds(item.books[0]._id);
                            setTime(item.time);
                            setExamTypeIds(item.examType);
                            setIsPublished(item.isPublished);
                            setTimeout(() => {
                              numberRef.current.focus();
                            }, 300);
                            setTimeout(() => {
                              timeRef.current.focus();
                            }, 330);

                            setTimeout(() => {
                              selectExamTypeRef.current.focus();
                            }, 350);

                            if (
                              item.AnswerSheetSourcePdfFile &&
                              item.AnswerSheetSourcePdfFile?.length > 0 &&
                              item.AnswerSheetSourcePdfFile[0] != ""
                            ) {
                              const fileName = item.AnswerSheetSourcePdfFile[0].split("/").pop();
                              const updatedSelectedFile = [{ name: fileName, size: null }];
                              setSelectedFile(updatedSelectedFile);
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
          <></>
        )}

        {!getCreateExamBasedOnStandardExamAndTerms.isLoading &&
        getCreateExamBasedOnStandardExamAndTerms?.data &&
        termIds?.length > 0 ? (
          <TableKit
            secondary
            headers={[{ children: `عنوان` }, { children: `عملیات` }]}
            rows={getCreateExamBasedOnStandardExamAndTerms?.data?.createExams?.map(
              (item: any, index: any) => {
                return {
                  id: item._id,
                  data: {
                    title: `آزمون شماره ${item.number} - ${
                      item.type === "standard" ? "استاندارد" : "موضوعی"
                    }`,
                    action: (
                      <>
                        <IconButton
                          onClick={() => {
                            console.log(item, "item");

                            setValue({
                              doUpdate: true,
                              data: item.title,
                              id: item._id,
                            });
                            setNumber(item.number);
                            setTime(item.time);
                            setExamTypeIds(item.examType);
                            setIsPublished(item.isPublished);
                            setTimeout(() => {
                              numberRef.current.focus();
                            }, 300);
                            setTimeout(() => {
                              timeRef.current.focus();
                            }, 330);

                            setTimeout(() => {
                              selectExamTypeRef.current.focus();
                            }, 350);

                            if (
                              item.AnswerSheetSourcePdfFile &&
                              item.AnswerSheetSourcePdfFile?.length > 0 &&
                              item.AnswerSheetSourcePdfFile[0] != ""
                            ) {
                              const fileName = item.AnswerSheetSourcePdfFile[0].split("/").pop();
                              const updatedSelectedFile = [{ name: fileName, size: null }];
                              setSelectedFile(updatedSelectedFile);
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
          <Box></Box>
        )}
      </Box>
    </Box>
  );
};

export default CreateExam;
