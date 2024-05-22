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
  Switch,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useGetBooksBasedOnGradeLevels from "../../../../../../../hooks/book/useGetBooksBasedOnGradeLevels";
import { DeleteLightSvg, EditLightSvg } from "../../../../../../../assets";
import { PrompModalKit } from "../../../../../../../components/kit/Modal";
import useGetGradeLevels from "../../../../../../../hooks/grade-level/useGetGradeLevels";
import useCreateComprehensiveTest from "../../../../../../../hooks/comprehensive-test/useCreateComprehensiveTest";
import useDeleteComprehensiveTest from "../../../../../../../hooks/comprehensive-test/useDeleteComprehensiveTest";
import useUpdateComprehensiveTest from "../../../../../../../hooks/comprehensive-test/useUpdateComprehensiveTest";
import useGetChaptersBasedOnBooks from "../../../../../../../hooks/chapter/useGetChaptersBasedOnBooks";
import useGetComprehensiveTestBasedOnChapters from "../../../../../../../hooks/comprehensive-test/useGetComprehensiveTestBasedOnChapters";
import { TableKit } from "../../../../../../../components/kit/Table";

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
const CreateComprehensiveTest = (props: any) => {
  const classes = useStyles();

  const selectGradeLevelRef = useRef<any>();
  const selectBookRef = useRef<any>();
  const selectChaptertRef = useRef<any>();
  const imageRef = useRef<any>();

  const {
    handleSubmit,
    register,
    clearErrors,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(10);
  const [value, setValue] = useState({ doUpdate: false, data: "", id: null });

  const [gradeLevelIds, setGradeLevelIds] = useState<any>([]);
  const [bookIds, setBookIds] = useState<any>(gradeLevelIds);
  const [chapterIds, setChapterIds] = React.useState<any>(bookIds);

  const getGradeLevels = useGetGradeLevels();
  const createComprehensiveTest = useCreateComprehensiveTest();
  const deleteComprehensiveTest = useDeleteComprehensiveTest();
  const updateComprehensiveTest = useUpdateComprehensiveTest();
  const [isPublished, setIsPublished] = useState<boolean>(false);

  const handleDeleteComprehensiveTest = (id: string) => {
    deleteComprehensiveTest.mutate(id, {
      onSuccess: async (result: { message: string; statusCode: number; access_token: string }) => {
        if (result.statusCode == 200) {
          setLoading(false);
          comprehensiveTestBasedOnChapters.refetch();
          toast.success(result.message);
        } else {
          setLoading(false);
          toast.error(result.message);
        }
      },
    });
  };

  const getBooksBasedOnGradeLevels = useGetBooksBasedOnGradeLevels(
    gradeLevelIds?.length == 0 ? null : gradeLevelIds,
  );

  const getChaptersBasedOnBooks = useGetChaptersBasedOnBooks(bookIds?.length == 0 ? null : bookIds);

  const comprehensiveTestBasedOnChapters = useGetComprehensiveTestBasedOnChapters(
    chapterIds?.length == 0 ? [null] : [chapterIds],
  );

  useEffect(() => {
    if (gradeLevelIds) {
      getBooksBasedOnGradeLevels.refetch();
    }
  }, [gradeLevelIds]);

  useEffect(() => {
    if (bookIds) getChaptersBasedOnBooks.refetch();
  }, [bookIds]);

  useEffect(() => {
    if (!comprehensiveTestBasedOnChapters.isLoading) {
      comprehensiveTestBasedOnChapters.refetch();
    }
  }, [comprehensiveTestBasedOnChapters.data]);

  useEffect(() => {
    if (chapterIds) comprehensiveTestBasedOnChapters.refetch();
  }, [chapterIds]);

  useEffect(() => {
    toast.error(errors["books"]?.message?.toString());
    toast.error(errors["title"]?.message?.toString());
    toast.error(errors["gradeLevels"]?.message?.toString());
    clearErrors();
  }, [errors["books"]?.message, errors["title"]?.message, errors["gradeLevels"]?.message]);

  const handleGradeLevelChange = (event: SelectChangeEvent) => {
    setGradeLevelIds(event.target.value as any);
    setBookIds(null);
    setChapterIds(null);
  };

  const handleBookChange = (event: SelectChangeEvent) => {
    setBookIds(event.target.value as any);
    setChapterIds(null);
  };

  const handleChapterChange = (event: SelectChangeEvent) => {
    setChapterIds(event.target.value as any);
  };

  const handleCreateComprehensiveTest = async (data: any) => {
    createComprehensiveTest.mutate(
      { ...data },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          comprehensiveTestBasedOnChapters.refetch();
          setGradeLevelIds(null);
          setBookIds(null);
          setChapterIds(null);
          toast.success(result.message);
        },
        onError: async (e: any) => {
          toast.error(e.message);
        },
      },
    );
  };

  const handleUpdateComprehensiveTest = async (data: any) => {
    setLoading(true);
    updateComprehensiveTest.mutate(
      { id: value.id, ...data },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          if (result.statusCode == 200) {
            setLoading(false);
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
    <Box className={classes.container}>
      <Box
        sx={{
          width: 500,
        }}
      >
        <form
          onSubmit={
            value.doUpdate
              ? handleSubmit(handleUpdateComprehensiveTest)
              : handleSubmit(handleCreateComprehensiveTest)
          }
        >
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
              {...register("book")}
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
              value={chapterIds ?? []}
              {...register("chapter")}
              inputRef={selectChaptertRef}
              onChange={handleChapterChange}
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

          <Box sx={{ margin: "0 1rem 0 1rem" }} component={"label"} htmlFor="my-switch">
            انتشار
          </Box>
          <Switch
            {...register("isPublished")}
            checked={isPublished}
            onClick={() => setIsPublished(!isPublished)}
            id="my-switch"
          />

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
        <Typography>لیست تست‌های جامع </Typography>
        {!comprehensiveTestBasedOnChapters.isLoading ? (
          <TableKit
            secondary
            headers={[{ children: `عنوان` }, { children: `عملیات` }]}
            rows={comprehensiveTestBasedOnChapters?.data?.map((item: any, index: any) => {
              return {
                id: item._id,
                data: {
                  title: `${item.gradeLevel[0].title} - ${item.book[0].title} - ${
                    item.chapter[0].title
                  } - ${item.isPublished ? "منتشر شده" : "منتشر نشده"}  `,
                  action: (
                    <>
                      <IconButton
                        onClick={() => {
                          setValue({
                            doUpdate: true,
                            data: "",
                            id: item._id,
                          });
                        }}
                      >
                        <EditLightSvg width={12} height={12} />
                      </IconButton>
                      <IconButton>
                        <PrompModalKit
                          description={"آیا از حذف موضوع مورد نظر مطمئن  هستید؟"}
                          onConfirm={() => handleDeleteComprehensiveTest(item._id)}
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

export default CreateComprehensiveTest;
