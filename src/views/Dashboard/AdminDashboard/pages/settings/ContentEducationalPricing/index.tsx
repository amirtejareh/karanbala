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
import useGetBooksBasedOnGradeLevels from "../../../../../../hooks/book/useGetBooksBasedOnGradeLevels";
import useGetGradeLevels from "../../../../../../hooks/grade-level/useGetGradeLevels";
import { TableKit } from "../../../../../../components/kit/Table";
import { DeleteLightSvg, EditLightSvg } from "../../../../../../assets";
import { PrompModalKit } from "../../../../../../components/kit/Modal";
import useCreateContentEducationalPricing from "../../../../../../hooks/settings/content-educational-pricing/useCreateContentEducationalPricing";
import useDeleteContentEducationalPricing from "../../../../../../hooks/settings/content-educational-pricing/useDeleteContentEducationalPricing";
import useUpdateContentEducationalPricing from "../../../../../../hooks/settings/content-educational-pricing/useUpdateContentEducationalPricing";
import useGetContentEducationalPricing from "../../../../../../hooks/settings/content-educational-pricing/useGetContentEducationalPricing";

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

const ContentEducationalPricing = () => {
  const classes = useStyles();

  const selectGradeLevelRef = useRef<any>();
  const selectBookRef = useRef<any>();
  const inputPriceRef = useRef<any>();
  const selectTypeRef = useRef<any>();

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
  const [typeIds, setTypeIds] = React.useState<any>("");

  const getGradeLevels = useGetGradeLevels();
  const createContentEducationalPricing = useCreateContentEducationalPricing();
  const deleteContentEducationalPricing = useDeleteContentEducationalPricing();
  const updateContentEducationalPricing = useUpdateContentEducationalPricing();

  const handleDeleteContentEducationalPricing = (id: string) => {
    deleteContentEducationalPricing.mutate(id, {
      onSuccess: async (result: { message: string; statusCode: number; access_token: string }) => {
        if (result.statusCode == 200) {
          getContentEducationalPricings.refetch();
          setLoading(false);
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

  const getContentEducationalPricings = useGetContentEducationalPricing();

  const handleTypeChange = (event: SelectChangeEvent) => {
    setTypeIds(event.target.value as any);
  };

  useEffect(() => {
    if (getContentEducationalPricings.data && !getContentEducationalPricings.isLoading) {
      getContentEducationalPricings.refetch();
    }
  }, [bookIds]);

  useEffect(() => {
    if (gradeLevelIds) {
      getBooksBasedOnGradeLevels.refetch();
    }
  }, [gradeLevelIds]);

  useEffect(() => {
    toast.error(errors["book"]?.message?.toString());
    toast.error(errors["price"]?.message?.toString());
    toast.error(errors["gradeLevel"]?.message?.toString());
    toast.error(errors["type"]?.message?.toString());
    clearErrors();
  }, [
    errors["book"]?.message,
    errors["price"]?.message,
    errors["gradeLevel"]?.message,
    errors["type"]?.message,
  ]);

  const handleGradeLevelChange = (event: SelectChangeEvent) => {
    setGradeLevelIds(event.target.value as any);
    setBookIds(null);
  };

  const handleBookChange = (event: SelectChangeEvent) => {
    setBookIds(event.target.value as any);
  };

  const handleCreateSubject = async (data: any) => {
    createContentEducationalPricing.mutate(
      { ...data },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          setGradeLevelIds(null);
          setBookIds(null);

          getContentEducationalPricings.refetch();
          toast.success(result.message);
        },
        onError: async (e: any) => {
          toast.error(e.message);
        },
      },
    );
  };

  const handleUpdateSubject = async (data: any) => {
    setLoading(true);

    updateContentEducationalPricing.mutate(
      { id: value?.id, ...data },
      {
        onSuccess: async (result: { message: string; statusCode: number }) => {
          if (result.statusCode == 200) {
            setLoading(false);
            toast.success(result.message);
            setValue({ doUpdate: false, data: "", id: null });
            setGradeLevelIds(null);
            setBookIds(null);
            getContentEducationalPricings.refetch();
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
            value?.doUpdate ? handleSubmit(handleUpdateSubject) : handleSubmit(handleCreateSubject)
          }
        >
          <FormControl className={classes.formField} fullWidth>
            <InputLabel id="demo-simple-select-label">انتخاب پایه</InputLabel>
            <Select
              value={gradeLevelIds ?? []}
              {...register("gradeLevel", {
                required: "لطفا پایه را مشخص کنید",
              })}
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
              {...register("book", {
                required: "لطفا کتاب را مشخص کنید",
              })}
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
            <InputLabel id="demo-simple-select-label"> انتخاب نوع مورد اشتراکی</InputLabel>
            <Select
              value={typeIds}
              {...register("type", {
                required: "لطفا مورد اشتراکی را مشخص کنید",
              })}
              onChange={handleTypeChange}
              inputRef={selectTypeRef}
            >
              <MenuItem value={"comprehensive_test"}>تست جامع</MenuItem>
              <MenuItem value={"quiz"}>آزمون انتخابی</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formField} fullWidth>
            <TextField
              label="قیمت"
              variant="outlined"
              inputRef={inputPriceRef}
              value={value.data}
              {...register("price", {
                required: "لطفا قیمت را وارد کنید",
              })}
              onChange={(e) => {
                if (value.doUpdate) {
                  setValue({ doUpdate: true, data: e.target.value, id: value.id });
                } else {
                  setValue({ doUpdate: false, data: e.target.value, id: null });
                }
              }}
            />
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
        <Typography>لیست قیمت گذاری </Typography>
        {!getContentEducationalPricings.isLoading ? (
          <TableKit
            secondary
            headers={[{ children: `عنوان` }, { children: `عملیات` }]}
            rows={getContentEducationalPricings?.data?.map((item: any, index: any) => {
              return {
                id: item._id,
                data: {
                  title: `${item.gradeLevel[0]?.title} - ${item.book[0]?.title} - ${item.price}  تومان`,
                  action: (
                    <>
                      <IconButton
                        onClick={() => {
                          setValue({
                            doUpdate: true,
                            data: item.price,
                            id: item._id,
                          });

                          setGradeLevelIds(item.gradeLevel[0]?._id);
                          setBookIds(item.book[0]?._id);

                          setTypeIds(item.type);

                          setTimeout(() => {
                            selectGradeLevelRef.current.focus();
                          }, 200);

                          setTimeout(() => {
                            selectBookRef.current.focus();
                          }, 400);

                          setTimeout(() => {
                            inputPriceRef.current.focus();
                          }, 600);

                          setTimeout(() => {
                            selectTypeRef.current.focus();
                          }, 800);
                        }}
                      >
                        <EditLightSvg width={12} height={12} />
                      </IconButton>
                      <IconButton>
                        <PrompModalKit
                          description={"آیا از حذف قیمت گذاری مورد نظر مطمئن  هستید؟"}
                          onConfirm={() => handleDeleteContentEducationalPricing(item._id)}
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

export default ContentEducationalPricing;
