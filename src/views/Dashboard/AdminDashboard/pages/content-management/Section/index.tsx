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
import useCreateSection from "../../../../../../hooks/section/useCreateSection";
import useUpdateSection from "../../../../../../hooks/section/useUpdateSection";
import useGetSections from "../../../../../../hooks/section/useGetSections";
import useDeleteSection from "../../../../../../hooks/section/useDeleteSection";
import useGetChaptersBasedOnBooks from "../../../../../../hooks/chapter/useGetChaptersBasedOnBooks";
import useGetBooksBasedOnGradeLevels from "../../../../../../hooks/book/useGetBooksBasedOnGradeLevels";
import useGetGradeLevels from "../../../../../../hooks/grade-level/useGetGradeLevels";
import { PrompModalKit } from "../../../../../../components/kit/Modal";
import { DeleteLightSvg, EditLightSvg } from "../../../../../../assets";
import { TableKit } from "../../../../../../components/kit/Table";

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
const Section = (props: any) => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [loading, setLoading] = useState(false);

  const createSection = useCreateSection();
  const updateSection = useUpdateSection();

  const sections = useGetSections();

  const deleteSection = useDeleteSection();

  const handleDeleteSection = (id: string) => {
    deleteSection.mutate(id, {
      onSuccess: async (result: { message: string; statusCode: number; access_token: string }) => {
        if (result.statusCode == 200) {
          setLoading(false);
          sections.refetch();
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

  const getBooksBasedOnGradeLevels = useGetBooksBasedOnGradeLevels(
    gradeLevelIds?.length == 0 ? null : gradeLevelIds,
  );

  const getChaptersBasedOnBooks = useGetChaptersBasedOnBooks(bookIds?.length == 0 ? null : bookIds);

  useEffect(() => {
    if (gradeLevelIds) {
      getBooksBasedOnGradeLevels.refetch();
    }
  }, [gradeLevelIds]);

  useEffect(() => {
    getChaptersBasedOnBooks.refetch();
  }, [bookIds]);

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
  const selectGradeLevelRef = useRef<any>();
  const inputSectionRef = useRef<any>();

  const selectBookRef = useRef<any>();
  const selectSectionRef = useRef<any>();
  const handleGradeLevelChange = (event: SelectChangeEvent) => {
    setGradeLevelIds(event.target.value as any);
    setBookIds(null);
  };
  const handleBookChange = (event: SelectChangeEvent) => {
    setBookIds(event.target.value as any);
  };

  const handleSectionChange = (event: SelectChangeEvent) => {
    setChapterIds(event.target.value as any);
  };

  const handleCreateSection = async (data: any) => {
    setLoading(true);

    createSection.mutate(data, {
      onSuccess: async (result: { message: string; statusCode: number }) => {
        if (result.statusCode == 200) {
          setLoading(false);
          setGradeLevelIds(null);
          setValue({ doUpdate: false, data: "", id: null });
          setBookIds(null);
          setChapterIds(null);
          sections.refetch();
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

  const handleUpdateSection = async (data: any) => {
    setLoading(true);

    updateSection.mutate(
      { id: value?.id, ...data },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          if (result.statusCode == 200) {
            setLoading(false);
            sections.refetch();
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
            value?.doUpdate ? handleSubmit(handleUpdateSection) : handleSubmit(handleCreateSection)
          }
        >
          <TextField
            label="عنوان بخش "
            variant="outlined"
            className={classes.formField}
            value={value?.data}
            {...register("title", {
              required: "لطفا نام بخش را وارد کنید",
            })}
            inputRef={inputSectionRef}
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
              inputRef={selectSectionRef}
              onChange={handleSectionChange}
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
        <Typography>لیست بخش‌ها</Typography>
        {!sections.isLoading ? (
          <TableKit
            secondary
            headers={[{ children: `عنوان` }, { children: `عملیات` }]}
            rows={sections?.data.map((item: any, index: any) => {
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

                          setTimeout(() => {
                            inputSectionRef.current.focus();
                          }, 100);
                          setTimeout(() => {
                            selectGradeLevelRef.current.focus();
                          }, 200);
                          setTimeout(() => {
                            selectBookRef.current.focus();
                          }, 300);
                          setTimeout(() => {
                            selectSectionRef.current.focus();
                          }, 400);
                        }}
                      >
                        <EditLightSvg width={12} height={12} />
                      </IconButton>
                      <IconButton>
                        <PrompModalKit
                          description={"آیا از حذف بخش مورد نظر مطمئن  هستید؟"}
                          onConfirm={() => handleDeleteSection(item._id)}
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

export default Section;
