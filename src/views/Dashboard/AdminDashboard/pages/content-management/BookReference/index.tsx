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
import { TableKit } from "../../../../../../components/kit/Table";
import { PrompModalKit } from "../../../../../../components/kit/Modal";
import { DeleteLightSvg, EditDarkSvg, EditLightSvg } from "../../../../../../assets";

import useGetGradeLevels from "../../../../../../hooks/grade-level/useGetGradeLevels";
import BookReferenceImage from "../../../../../../assets/images/user.jpg";
import { OpenAPI } from "../../../../../../services/core/OpenAPI";
import useCreateBookReference from "../../../../../../hooks/book-reference/useCreateBookReference";
import useGetBookReferences from "../../../../../../hooks/book-reference/useGetBooksReference";
import useUpdateBookReference from "../../../../../../hooks/book-reference/useUpdateBookReference";
import useDeleteBookReference from "../../../../../../hooks/book-reference/useDeleteBookReference";

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
const BookReference = (props: any) => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [loading, setLoading] = useState(false);

  const createBookReference = useCreateBookReference();
  const updateBookReference = useUpdateBookReference();
  const selectGradeLevelRef = useRef<any>();
  const inputBookReferenceRef = useRef<any>();

  const BookReferences = useGetBookReferences();

  const deleteBookReference = useDeleteBookReference();

  const handleDeleteBookReference = (id: string) => {
    deleteBookReference.mutate(id, {
      onSuccess: async (result: { message: string; statusCode: number; access_token: string }) => {
        if (result.statusCode == 200) {
          setLoading(false);
          BookReferences.refetch();
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
  const [preview, setPreview] = useState<any>();
  const [selectedFile, setSelectedFile] = useState<any>();
  const [gradeLevelIds, setGradeLevelIds] = React.useState<any>([]);
  const getGradeLevels = useGetGradeLevels();
  const imageRef = useRef<any>();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl: any = URL.createObjectURL(selectedFile);

    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const handleGradeLevelChange = (event: SelectChangeEvent) => {
    setGradeLevelIds(event.target.value as any);
  };
  const descriptionInputRef = useRef<any>(null);

  const [descriptionValue, setDescriptionValue] = useState({
    doUpdate: false,
    data: "",
    id: null,
  });

  const onSelectFile = (e: any) => {
    if (!imageRef.current.files || imageRef.current.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(imageRef.current.files[0]);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { ref, onChange, ...rest } = register("image");

  const handleCreateBookReference = async (data: any) => {
    setLoading(true);

    createBookReference.mutate(
      { ...data, image: data.image[0] },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          if (result.statusCode == 200) {
            setLoading(false);
            BookReferences.refetch();
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

  const handleUpdateBookReference = async (data: any) => {
    setLoading(true);

    updateBookReference.mutate(
      { id: value?.id, ...data },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          if (result.statusCode == 200) {
            setLoading(false);
            BookReferences.refetch();
            toast.success(result.message);
            setValue({ doUpdate: false, data: "", id: null });
            setDescriptionValue({ doUpdate: false, data: "", id: null });
            setGradeLevelIds(null);
            setPreview(OpenAPI.BASE + "/" + undefined);
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
            value?.doUpdate
              ? handleSubmit(handleUpdateBookReference)
              : handleSubmit(handleCreateBookReference)
          }
        >
          <TextField
            label="عنوان کتاب "
            variant="outlined"
            className={classes.formField}
            inputRef={inputBookReferenceRef}
            value={value?.data}
            {...register("title", {
              required: "لطفا نام کتاب را وارد کنید",
            })}
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
                getGradeLevels?.data.map((element: any) => {
                  return (
                    <MenuItem key={element._id} value={element._id}>
                      {element.title}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>

          <Box display={"flex"} position={"relative"} borderRadius={"100%"} mb={3}>
            {selectedFile || preview ? (
              <>
                <Box
                  component={"img"}
                  src={String(preview).split("/")[3] === "undefined" ? BookReferenceImage : preview}
                  alt={"test flag"}
                  width={100}
                  height={100}
                />
              </>
            ) : (
              <Box
                component={"img"}
                src={BookReferenceImage}
                alt={"User flag"}
                width={100}
                height={100}
              />
            )}
            <IconButton
              sx={{
                backgroundColor: "#FCF0FF",
                width: 28,
                height: 28,
                borderRadius: "8px",
                p: 0.5,
                position: "absolute",
                bottom: -10,
              }}
              onClick={() => imageRef.current.click()}
            >
              <EditDarkSvg />
              <input
                {...rest}
                type="file"
                ref={(e) => {
                  ref(e);
                  imageRef.current = e;
                }}
                hidden
                onChange={(e) => {
                  onSelectFile(e);
                  onChange(e);
                }}
              />
            </IconButton>
          </Box>

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
        <Typography>لیست کتاب‌های مرجع</Typography>
        {!BookReferences.isLoading ? (
          <TableKit
            secondary
            headers={[{ children: `عنوان` }, { children: `عملیات` }]}
            rows={BookReferences?.data.map((item: any, index: any) => {
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
                          setDescriptionValue({
                            doUpdate: true,
                            data: item.description,
                            id: item._id,
                          });

                          setGradeLevelIds(item.gradeLevels);

                          setTimeout(() => {
                            inputBookReferenceRef.current.focus();
                          }, 100);

                          setTimeout(() => {
                            selectGradeLevelRef.current.focus();
                          }, 300);

                          setPreview(OpenAPI.BASE + "/" + item.image);
                        }}
                      >
                        <EditLightSvg width={12} height={12} />
                      </IconButton>
                      <IconButton>
                        <PrompModalKit
                          description={"آیا از حذف کتاب مطمئن  هستید؟"}
                          onConfirm={() => handleDeleteBookReference(item._id)}
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

export default BookReference;
