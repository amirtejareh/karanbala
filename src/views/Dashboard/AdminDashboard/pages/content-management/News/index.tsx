import React, { useEffect, useRef, useState } from "react";
import {
  Theme,
  Box,
  TextField,
  Button,
  CircularProgress,
  Typography,
  IconButton,
  Switch,
  FormControl,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { TableKit } from "../../../../../../components/kit/Table";
import { PrompModalKit } from "../../../../../../components/kit/Modal";
import { DeleteLightSvg, EditDarkSvg, EditLightSvg } from "../../../../../../assets";
import useCreateNews from "../../../../../../hooks/news/useCreateNews";
import useUpdateNews from "../../../../../../hooks/news/useUpdateNews";
import useGetNews from "../../../../../../hooks/news/useGetNews";
import useDeleteNews from "../../../../../../hooks/news/useDeleteNews";
import NewsImage from "../../../../../../assets/images/user.jpg";
import { OpenAPI } from "../../../../../../services/core/OpenAPI";
import RichTextEditor from "../../../../../../utils/ReactQuill";

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
const News = (props: any) => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [loading, setLoading] = useState(false);
  const [isPublished, setIsPublished] = useState<boolean>(false);
  const createNews = useCreateNews();
  const updateNews = useUpdateNews();
  const inputNewsRef = useRef<any>();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(1);
  const [limit, _] = useState<number>(1);
  const [value, setValue] = useState({ doUpdate: false, data: "", id: null });
  const [preview, setPreview] = useState<any>();
  const [selectedFile, setSelectedFile] = useState<any>();
  const [quillEditorValue, setQuillEditorValue] = useState<any>();

  const imageRef = useRef<any>();
  const News = useGetNews(page, limit);
  useEffect(() => {
    if (News?.data) {
      setPageSize(News?.data?.totalPages);
    }
  }, [News?.data]);

  useEffect(() => {
    News.refetch();
  }, [page]);

  const deleteNews = useDeleteNews();

  const handleDeleteNews = (id: string) => {
    deleteNews.mutate(id, {
      onSuccess: async (result: { message: string; statusCode: number; access_token: string }) => {
        if (result.statusCode == 200) {
          setLoading(false);
          News.refetch();
          toast.success(result.message);
        } else {
          setLoading(false);
          toast.error(result.message);
        }
      },
    });
  };

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

  const handleCreateNews = async (data: any) => {
    setLoading(true);

    data.description = quillEditorValue;

    createNews.mutate(
      { ...data, image: data.image[0] },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          if (result.statusCode == 200) {
            setLoading(false);
            News.refetch();
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

  const handleUpdateNews = async (data: any) => {
    setLoading(true);
    data.description = quillEditorValue;

    updateNews.mutate(
      { id: value.id, ...data },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          if (result.statusCode == 200) {
            setLoading(false);
            News.refetch();
            toast.success(result.message);
            setValue({ doUpdate: false, data: "", id: null });
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
            value.doUpdate ? handleSubmit(handleUpdateNews) : handleSubmit(handleCreateNews)
          }
        >
          <TextField
            label="عنوان خبر "
            variant="outlined"
            className={classes.formField}
            inputRef={inputNewsRef}
            value={value.data}
            {...register("title", {
              required: "لطفا عنوان خبر را وارد کنید",
            })}
            onChange={(e) => {
              if (value.doUpdate) {
                setValue({ doUpdate: true, data: e.target.value, id: value.id });
              } else {
                setValue({ doUpdate: false, data: e.target.value, id: null });
              }
            }}
          />
          <FormControl className={classes.formField}>
            <Typography>متن خبر</Typography>
            <RichTextEditor
              value={quillEditorValue}
              setValue={(newValue) => setQuillEditorValue(newValue)}
            />
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
          <Box
            onClick={() => imageRef.current.click()}
            display={"flex"}
            position={"relative"}
            borderRadius={"100%"}
            sx={{ cursor: "pointer" }}
            mb={3}
          >
            {selectedFile || preview ? (
              <>
                <Box
                  component={"img"}
                  src={String(preview).split("/")[3] === "undefined" ? NewsImage : preview}
                  alt={"test flag"}
                  width={100}
                  height={100}
                />
              </>
            ) : (
              <Box component={"img"} src={NewsImage} alt={"User flag"} width={100} height={100} />
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
            {loading ? <CircularProgress size={24} /> : value.doUpdate ? "ویرایش" : "ذخیره"}
          </Button>
        </form>
      </Box>
      <Box className={classes.fieldOfStudy}>
        <Typography>لیست خبرها</Typography>
        {!News.isLoading ? (
          <TableKit
            secondary
            headers={[{ children: `عنوان` }, { children: `عملیات` }]}
            rows={News?.data?.allNews?.map((item: any, index: any) => {
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

                          setQuillEditorValue(item.description);

                          setTimeout(() => {
                            inputNewsRef.current.focus();
                          }, 100);

                          setPreview(OpenAPI.BASE + "/" + item.image);
                        }}
                      >
                        <EditLightSvg width={12} height={12} />
                      </IconButton>
                      <IconButton>
                        <PrompModalKit
                          description={"آیا از حذف خبر مطمئن  هستید؟"}
                          onConfirm={() => handleDeleteNews(item._id)}
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
          <div>در حال بارگیری...</div>
        )}
      </Box>
    </Box>
  );
};

export default News;
