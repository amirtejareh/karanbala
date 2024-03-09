import React, { useEffect, useRef, useState } from "react";
import {
  Theme,
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Button,
  MenuItem,
  SelectChangeEvent,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import { CalendarDarkSvg, DeleteLightSvg, EditLightSvg } from "../../../../../../assets";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { parseISO } from "date-fns";
import useGetMainObjectiveTests from "../../../../../../hooks/objective-test/useGetMainObjectiveTests";
import useCreateObjectiveTestManagement from "../../../../../../hooks/objective-test-management/useCreateObjectiveTestManagement";
import useGetBookReferencesBasedOnObjectiveTestId from "../../../../../../hooks/question/useGetBookReferencesBasedOnObjectiveTestId";
import useUpdateObjectiveTest from "../../../../../../hooks/objective-test/useUpdateObjectiveTest";
import { TableKit } from "../../../../../../components/kit/Table";
import { PrompModalKit } from "../../../../../../components/kit/Modal";
import useDeleteObjectiveTestManagement from "../../../../../../hooks/objective-test-management/useDeleteObjectiveTest";
import useGetObjectiveTestManagements from "../../../../../../hooks/objective-test-management/useGetObjectiveTestManagements";
import useUpdateObjectiveTestManagement from "../../../../../../hooks/objective-test-management/useUpdateObjectiveTestManagement";
import { bytesToKilobytes } from "../../../../../../utils/helper";
import useCreateAnswersheetManagement from "../../../../../../hooks/answersheet-management/useCreateAnswersheetManagement";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    maxWidth: "600px",
  },
  ObjectiveTestManagement: {
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
  durationField: {
    margin: "1rem",
    width: "100%",
    display: "none",
  },
  editorField: {
    margin: "2rem 0",
  },
  specialField: {
    margin: "1rem",
  },
}));
const AnswersheetManagement = (props: any) => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();

  const [objectiveTestId, setObjectiveTestId] = React.useState<any>();
  const selectObjectiveTestRef = useRef<any>();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState<number>(0);
  const [id, setId] = useState<number>(0);
  const [limit, _] = useState<number>(5);
  const [pageSize, setPageSize] = useState<number>(0);
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [bookId, setBookId] = React.useState<any>();
  const selectBookRef = useRef<any>();
  const pdfRef = useRef<any>();

  const [, setIsObjectiveTestUpdated] = useState(false);

  const [gradeLevelIdsEdit, setGradeLevelIdsEdit] = useState<any>([]);
  const [, setObjectiveTestdsEdit] = useState<any>([]);
  const getObjectiveTestBasedOnGradeLevels = useGetObjectiveTestManagements(
    page === 0 ? 1 : page,
    limit,
  );

  useEffect(() => {
    if (gradeLevelIdsEdit.length > 0) {
      getObjectiveTestBasedOnGradeLevels.refetch();
    }
  }, [gradeLevelIdsEdit]);

  useEffect(() => {
    if (page > 0) {
      getObjectiveTestBasedOnGradeLevels.refetch();
    }
  }, [page]);

  useEffect(() => {
    if (
      !getObjectiveTestBasedOnGradeLevels.isLoading &&
      getObjectiveTestBasedOnGradeLevels?.data?.objectiveTests
    ) {
      setPage(parseInt(getObjectiveTestBasedOnGradeLevels?.data?.currentPage ?? 1));
      setPageSize(getObjectiveTestBasedOnGradeLevels?.data?.totalPages ?? 1);
    }
  }, [getObjectiveTestBasedOnGradeLevels?.data]);

  const handleObjectiveTestChangeEdit = (event: SelectChangeEvent) => {
    setObjectiveTestdsEdit(event.target.value as any);
  };

  const handleObjectiveTestChange = (event: SelectChangeEvent) => {
    setObjectiveTestId(event.target.value as any);
  };

  const handleBookChange = (event: SelectChangeEvent) => {
    setBookId(event.target.value as any);
  };

  const getMainObjectiveTests = useGetMainObjectiveTests();

  const getBookReferencesBasedOnObjectiveTestId =
    useGetBookReferencesBasedOnObjectiveTestId(objectiveTestId);

  const createAnswersheetManagement = useCreateAnswersheetManagement();
  const updateObjectiveTestManagement = useUpdateObjectiveTestManagement();
  useEffect(() => {
    getBookReferencesBasedOnObjectiveTestId.refetch();
  }, [objectiveTestId]);

  const updateObjectiveTest = useUpdateObjectiveTest();

  const deleteObjectiveTestManagement = useDeleteObjectiveTestManagement();
  const handleDeleteObjectiveTestManagement = (id: string) => {
    deleteObjectiveTestManagement.mutate(id, {
      onSuccess: async (result: { message: string; statusCode: number }) => {
        if (result.statusCode === 200) {
          setLoading(false);
          toast(result.message);
          getObjectiveTestBasedOnGradeLevels.refetch();
        } else {
          setLoading(false);
          toast(result.message);
        }
      },
    });
  };

  const handleRemoveFile = (fileToRemove) => {
    const updatedFiles = selectedFile.filter((file) => file !== fileToRemove);
    setSelectedFile(updatedFiles);
  };

  const handleCreateObjectiveTestManagement = async (data: any) => {
    setLoading(true);

    createAnswersheetManagement.mutate(
      { ...data, AnswerSheetSourcePdfFile: selectedFile },
      {
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
      },
    );
  };

  const handleUpdateObjectiveTestManagement = async (data: any) => {
    setLoading(true);
    data.id = id;
    updateObjectiveTestManagement.mutate(data, {
      onSuccess: async (result: { message: string; statusCode: number }) => {
        if (result.statusCode == 200) {
          setLoading(false);
          toast.success(result.message);
          getObjectiveTestBasedOnGradeLevels.refetch();
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

  const [selectedFile, setSelectedFile] = useState<any[]>([]);

  const onSelectFile = (e: any) => {
    const newFiles = Array.from(e.target.files);
    if (selectedFile.length < 2) {
      setSelectedFile([...selectedFile, ...newFiles]);
    }
    if (selectedFile.length === 2) {
      toast.error(
        "شما تنها ۲ فایل می توانید آپلود کنید اولین فایل برای پاسخنامه و دومی برای بودجه بندی آزمون",
      );
    }
  };
  return (
    <Box display={"flex"}>
      <Box className={classes.container}>
        <form
          onSubmit={
            id
              ? handleSubmit(handleUpdateObjectiveTestManagement)
              : handleSubmit(handleCreateObjectiveTestManagement)
          }
        >
          <FormControl className={classes.formField} fullWidth>
            <InputLabel id="demo-simple-select-label">انتخاب آزمون</InputLabel>
            <Select
              value={objectiveTestId ?? ""}
              {...register("objectiveTest", {
                required: "انتخاب آزمون اجباری است",
              })}
              inputRef={selectObjectiveTestRef}
              onChange={handleObjectiveTestChange}
            >
              {!getMainObjectiveTests?.isLoading &&
                getMainObjectiveTests?.data?.map((element: any) => {
                  return (
                    <MenuItem key={element?._id} value={element?._id}>
                      {`${element?.gradeLevel[0]?.title} - ${element?.number} - ${
                        element?.type == "main" ? "اصلی" : "رفع اشکال"
                      }`}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>

          <FormControl className={classes.formField} fullWidth>
            <InputLabel id="demo-simple-select-label">انتخاب کتاب</InputLabel>
            <Select
              value={bookId ?? ""}
              {...register("bookReferences", {
                required: "انتخاب کتاب اجباری است",
              })}
              inputRef={selectBookRef}
              onChange={handleBookChange}
            >
              {!getBookReferencesBasedOnObjectiveTestId?.isLoading &&
                getBookReferencesBasedOnObjectiveTestId?.data?.map((bookReference: any) => {
                  return (
                    <MenuItem key={bookReference?._id} value={bookReference?._id}>
                      {bookReference?.title}
                    </MenuItem>
                  );
                })}
            </Select>{" "}
          </FormControl>

          {/* select pdf files */}
          {bookId && bookId?.length > 0 && (
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
            className={classes.specialField}
            type="submit"
            disabled={selectedFile.length < 2 ? true : false}
          >
            {loading ? <CircularProgress size={24} /> : id ? "ویرایش" : "ذخیره"}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AnswersheetManagement;
