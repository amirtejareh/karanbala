import React, { useEffect, useRef, useState } from "react";
import {
  Theme,
  Box,
  TextField,
  Button,
  CircularProgress,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useCreateSubject from "../../../../../../hooks/subject/useCreateSubject";
import useUpdateSubject from "../../../../../../hooks/subject/useUpdateSubject";
import useGetSubjects from "../../../../../../hooks/subject/useGetSubjects";
import useDeleteSubject from "../../../../../../hooks/subject/useDeleteSubject";
import useGetBooksBasedOnGradeLevels from "../../../../../../hooks/book/useGetBooksBasedOnGradeLevels";
import useGetTermOfStudies from "../../../../../../hooks/term-of-study/useGetTermOfStudies";
import useGetChaptersBasedOnBooks from "../../../../../../hooks/chapter/useGetChaptersBasedOnBooks";
import useGetGradeLevels from "../../../../../../hooks/grade-level/useGetGradeLevels";
import { TableKit } from "../../../../../../components/kit/Table";
import { DeleteLightSvg, EditLightSvg } from "../../../../../../assets";
import { PrompModalKit } from "../../../../../../components/kit/Modal";
import useGetSectionsBasedOnChapters from "../../../../../../hooks/section/useGetSectionsBasedOnChapters";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    maxWidth: "600px",
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
const Subject = (props: any) => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [loading, setLoading] = useState(false);

  const createSubject = useCreateSubject();
  const updateSubject = useUpdateSubject();

  const subjects = useGetSubjects();

  const deleteSubject = useDeleteSubject();

  const handleDeleteSubject = (id: string) => {
    deleteSubject.mutate(id, {
      onSuccess: async (result: { message: string; statusCode: number; access_token: string }) => {
        if (result.statusCode == 200) {
          setLoading(false);
          subjects.refetch();
          toast.success(result.message);
        } else {
          setLoading(false);
          toast.error(result.message);
        }
      },
    });
  };

  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(10);
  const [value, setValue] = useState({ doUpdate: false, data: "", id: null });
  const [gradeLevelIds, setGradeLevelIds] = useState<any>([]);
  const [bookIds, setBookIds] = React.useState<any>(gradeLevelIds);
  const [chapterIds, setChapterIds] = React.useState<any>(bookIds);
  const [sectionIds, setSectionIds] = React.useState<any>(chapterIds);
  const [termOfStudyIds, setTermOfStudyIds] = React.useState<any>();
  const getTermOfStudies = useGetTermOfStudies();

  const selectGradeLevelRef = useRef<any>();
  const inputSubjectRef = useRef<any>();

  const selectBookRef = useRef<any>();
  const selectChaptertRef = useRef<any>();
  const selectSectionRef = useRef<any>();
  const selectTermOfStudyRef = useRef<any>();

  useEffect(() => {
    getTermOfStudies.refetch();
  }, []);

  const getBooksBasedOnGradeLevels = useGetBooksBasedOnGradeLevels(
    gradeLevelIds?.length == 0 ? null : gradeLevelIds,
  );

  const getChaptersBasedOnBooks = useGetChaptersBasedOnBooks(bookIds?.length == 0 ? null : bookIds);

  const getSectionsBasedOnChapters = useGetSectionsBasedOnChapters(
    chapterIds?.length == 0 ? null : chapterIds,
  );

  useEffect(() => {
    if (gradeLevelIds) {
      getBooksBasedOnGradeLevels.refetch();
    }
  }, [gradeLevelIds]);

  useEffect(() => {
    getChaptersBasedOnBooks.refetch();
  }, [bookIds]);

  useEffect(() => {
    getSectionsBasedOnChapters.refetch();
  }, [chapterIds]);

  const getGradeLevels = useGetGradeLevels();

  const {
    handleSubmit,
    register,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    toast.error(errors["books"]?.message?.toString());
    toast.error(errors["title"]?.message?.toString());
    toast.error(errors["gradeLevels"]?.message?.toString());
    clearErrors();
  }, [errors["books"]?.message, errors["title"]?.message, errors["gradeLevels"]?.message]);

  const handleGradeLevelChange = (event: SelectChangeEvent) => {
    setGradeLevelIds(event.target.value as any);
    setChapterIds(null);
    setBookIds(null);
    setSectionIds(null);
  };
  const handleBookChange = (event: SelectChangeEvent) => {
    setBookIds(event.target.value as any);
  };

  const handleChapterChange = (event: SelectChangeEvent) => {
    setChapterIds(event.target.value as any);
  };

  const handleSectionChange = (event: SelectChangeEvent) => {
    setSectionIds(event.target.value as any);
  };

  const handleTermOfStudyChange = (event: SelectChangeEvent) => {
    setTermOfStudyIds(event.target.value as any);
  };

  const handleCreateSubject = async (data: any) => {
    setLoading(true);

    createSubject.mutate(data, {
      onSuccess: async (result: { message: string; statusCode: number }) => {
        if (result.statusCode == 200) {
          setLoading(false);
          setGradeLevelIds(null);
          setValue({ doUpdate: false, data: "", id: null });
          setBookIds(null);
          setChapterIds(null);
          setSectionIds(null);
          subjects.refetch();
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

  const handleUpdateSubject = async (data: any) => {
    setLoading(true);

    updateSubject.mutate(
      { id: value?.id, ...data },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          if (result.statusCode == 200) {
            setLoading(false);
            subjects.refetch();
            toast.success(result.message);
            setValue({ doUpdate: false, data: "", id: null });
            setGradeLevelIds(null);
            setBookIds(null);
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
    <Box display={"flex"}>
      <Box className={classes.container}>
        <form
          onSubmit={
            value?.doUpdate ? handleSubmit(handleUpdateSubject) : handleSubmit(handleCreateSubject)
          }
        >
          <TextField
            label="عنوان موضوع "
            variant="outlined"
            className={classes.formField}
            value={value?.data}
            {...register("title", {
              required: "لطفا نام موضوع را وارد کنید",
            })}
            inputRef={inputSubjectRef}
            onChange={(e) => {
              if (value?.doUpdate) {
                setValue({ doUpdate: true, data: e.target.value, id: value?.id });
              } else {
                setValue({ doUpdate: false, data: e.target.value, id: null });
              }
            }}
          />

          <FormControl className={classes.formField} fullWidth>
            <InputLabel id="demo-simple-select-label">انتخاب پایه</InputLabel>
            <Select
              value={gradeLevelIds ?? []}
              {...register("gradeLevels")}
              inputRef={selectGradeLevelRef}
              onChange={handleGradeLevelChange}
              multiple
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
              multiple
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
              value={chapterIds ?? []}
              {...register("chapters")}
              inputRef={selectChaptertRef}
              onChange={handleChapterChange}
              multiple
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
            <InputLabel id="demo-simple-select-label">انتخاب بخش</InputLabel>
            <Select
              value={sectionIds ?? []}
              {...register("sections")}
              inputRef={selectSectionRef}
              onChange={handleSectionChange}
              multiple
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
            <InputLabel id="demo-simple-select-label">انتخاب ترم</InputLabel>
            <Select
              value={termOfStudyIds ?? []}
              {...register("terms")}
              inputRef={selectTermOfStudyRef}
              onChange={handleTermOfStudyChange}
              multiple
            >
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

          <Button
            variant="contained"
            color="primary"
            className={classes.formButton}
            disabled={loading}
            type="submit"
          >
            {loading ? <CircularProgress size={24} /> : value?.doUpdate ? "ویرایش" : "ذخیره"}
          </Button>
        </form>
      </Box>
      <Box className={classes.fieldOfStudy}>
        <Typography>لیست موضوع‌ها</Typography>
        {!subjects.isLoading ? (
          <TableKit
            secondary
            headers={[{ children: `عنوان` }, { children: `عملیات` }]}
            rows={subjects?.data.map((item: any, index: any) => {
              return {
                id: item._id,
                data: {
                  title: item?.title,
                  action: (
                    <>
                      <IconButton
                        onClick={() => {
                          setValue({
                            doUpdate: true,
                            data: item.title,
                            id: item._id,
                          });
                          setGradeLevelIds(item.gradeLevels);
                          setBookIds(item.books.map((id) => id));
                          setChapterIds(item.chapters.map((id) => id));
                          setSectionIds(item.sections.map((id) => id));

                          setTimeout(() => {
                            inputSubjectRef.current.focus();
                          }, 100);
                          setTimeout(() => {
                            selectGradeLevelRef.current.focus();
                          }, 200);
                          setTimeout(() => {
                            selectBookRef.current.focus();
                          }, 300);
                          setTimeout(() => {
                            selectChaptertRef.current.focus();
                          }, 350);
                          setTimeout(() => {
                            selectTermOfStudyRef.current.focus();
                          }, 400);

                          setTimeout(() => {
                            selectSectionRef.current.focus();
                          }, 450);
                        }}
                      >
                        <EditLightSvg width={12} height={12} />
                      </IconButton>
                      <IconButton>
                        <PrompModalKit
                          description={"آیا از حذف موضوع مورد نظر مطمئن  هستید؟"}
                          onConfirm={() => handleDeleteSubject(item._id)}
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
              count: 1,
              rowsPerPage: pageSize,
              onChange: (_, e) => {
                setPage(e);
              },
              onRowsPerPageChange: () => {},
            }}
          />
        ) : (
          <div>در حال بارگیری...</div>
        )}
      </Box>
    </Box>
  );
};

export default Subject;
