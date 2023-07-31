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
import useCreateFieldOfStudy from "../../../../../hooks/field-of-study/useCreateFieldOfStudy";
import { toast } from "react-toastify";
import useGetFieldOfStudies from "../../../../../hooks/field-of-study/useGetFieldOfStudies";
import { TableKit } from "../../../../../components/kit/Table";
import { PrompModalKit } from "../../../../../components/kit/Modal";
import { DeleteLightSvg, EditLightSvg } from "../../../../../assets";
import useDeleteFieldOfStudy from "../../../../../hooks/field-of-study/useDeleteFieldOfStudy";
import useUpdateFieldOfStudy from "../../../../../hooks/field-of-study/useUpdateFieldOfStudy";
import useGetGradeLevels from "../../../../../hooks/grade-level/useGetGradeLevels";
import useFindOneFieldOfStudy from "../../../../../hooks/field-of-study/useFindOneFieldOfStudy";

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
        margin: "2rem 0",
        width: "100%",
    },
    formButton: {
        margin: "1rem",
        width: "100%",
    },
}));
const FieldOfStudy = (props: any) => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);

    const [page, setPage] = useState<number>(1);
    const [pageSize] = useState<number>(10);
    const [value, setValue] = useState({ doUpdate: false, data: "", id: null });

    const inputRef = useRef<any>(null);
    const selectRef = useRef<any>(null);

    const createFieldOfStudy = useCreateFieldOfStudy();
    const updateFieldOfStudy = useUpdateFieldOfStudy();

    const findOneFieldOfStudy: any = useFindOneFieldOfStudy(value.id ?? "0");

    const fieldOfStudies = useGetFieldOfStudies();

    const deleteFieldOfStudy = useDeleteFieldOfStudy();

    const getGradeLevels = useGetGradeLevels();

    const handleDeleteFieldOfstudy = (id: string) => {
        deleteFieldOfStudy.mutate(id, {
            onSuccess: async (result: {
                message: string;
                statusCode: number;
                access_token: string;
            }) => {
                if (result.statusCode == 200) {
                    setLoading(false);
                    fieldOfStudies.refetch();
                    toast.success(result.message);
                } else {
                    setLoading(false);
                    toast.error(result.message);
                }
            },
        });
    };
    useEffect(() => {
        getGradeLevels.refetch();
    }, []);

    const {
        handleSubmit,
        register,
        clearErrors,
        formState: { errors },
    } = useForm();

    const handleCreateFieldOfStudy = async (data: any) => {
        setLoading(true);

        createFieldOfStudy.mutate(data, {
            onSuccess: async (result: { message: string; statusCode: number }) => {
                if (result.statusCode == 200) {
                    setLoading(false);
                    fieldOfStudies.refetch();
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

    const handleUpdateFieldOfStudy = async (data: any) => {
        setLoading(true);

        updateFieldOfStudy.mutate(
            { id: value.id, ...data },
            {
                onSuccess: async (result: { message: string; statusCode: number }) => {
                    if (result.statusCode == 200) {
                        setLoading(false);
                        fieldOfStudies.refetch();
                        toast.success(result.message);
                        setValue({ doUpdate: false, data: "", id: null });
                        setGradeLevelIds(null);
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
    const [gradeLevelIds, setGradeLevelIds] = React.useState<any>([]);

    const handleChange = (event: SelectChangeEvent) => {
        setGradeLevelIds(event.target.value as any);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        if (value.doUpdate) {
            findOneFieldOfStudy.refetch();
        }
    }, [value.doUpdate]);

    useEffect(() => {
        if (!findOneFieldOfStudy.isLoading && findOneFieldOfStudy.data) {
            setGradeLevelIds(findOneFieldOfStudy.data.gradeLevels);
        }
    }, [findOneFieldOfStudy.isLoading]);

    useEffect(() => {
        toast.error(errors["gradeLevels"]?.message?.toString());
        toast.error(errors["title"]?.message?.toString());
        clearErrors();
    }, [errors["gradeLevels"]?.message, errors["title"]?.message]);

    return (
        <Box className={classes.container}>
            <Box>
                <form
                    onSubmit={
                        value.doUpdate
                            ? handleSubmit(handleUpdateFieldOfStudy)
                            : handleSubmit(handleCreateFieldOfStudy)
                    }
                >
                    <TextField
                        label="عنوان رشته تحصیلی"
                        variant="outlined"
                        className={classes.formField}
                        value={value.data}
                        {...register("title", {
                            required: "لطفا نام رشته تحصیلی را وارد کنید",
                        })}
                        inputRef={inputRef}
                        onChange={(e) => {
                            if (value.doUpdate) {
                                setValue({ doUpdate: true, data: e.target.value, id: value.id });
                            } else {
                                setValue({ doUpdate: false, data: e.target.value, id: null });
                            }
                        }}
                    />

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">انتخاب پایه</InputLabel>
                        <Select
                            value={gradeLevelIds ?? []}
                            {...register("gradeLevels", {
                                required: "انتخاب پایه های تحصیلی اجباری است",
                            })}
                            inputRef={selectRef}
                            onChange={handleChange}
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

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.formButton}
                        disabled={loading}
                        type="submit"
                    >
                        {loading ? (
                            <CircularProgress size={24} />
                        ) : value.doUpdate ? (
                            "ویرایش"
                        ) : (
                            "ذخیره"
                        )}
                    </Button>
                </form>
            </Box>
            <Box className={classes.fieldOfStudy}>
                <Typography>لیست رشته های تحصیلی</Typography>
                {!fieldOfStudies.isLoading && fieldOfStudies?.data.length > 0 ? (
                    <TableKit
                        secondary
                        headers={[{ children: `عنوان` }, { children: `عملیات` }]}
                        rows={fieldOfStudies?.data.map((item: any, index: any) => {
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
                                                    inputRef.current.focus();
                                                    setTimeout(() => {
                                                        selectRef.current.focus();
                                                    }, 1000);
                                                }}
                                            >
                                                <EditLightSvg width={12} height={12} />
                                            </IconButton>
                                            <IconButton>
                                                <PrompModalKit
                                                    description={
                                                        "آیا از حذف رشته تحصیلی مطمئن  هستید؟"
                                                    }
                                                    onConfirm={() =>
                                                        handleDeleteFieldOfstudy(item._id)
                                                    }
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

export default FieldOfStudy;
