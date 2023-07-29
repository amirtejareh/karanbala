import React, { useEffect, useState } from "react";
import {
    Theme,
    Box,
    TextField,
    Button,
    CircularProgress,
    Typography,
    IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { PrompModalKit } from "../../../../../components/kit/Modal";
import { DeleteLightSvg, EditLightSvg } from "../../../../../assets";
import useUpdateGradeLevel from "../../../../../hooks/grade-level/useUpdateGradeLevel";
import useGetGradeLevel from "../../../../../hooks/grade-level/useGetGradeLevel";
import useDeleteGradeLevel from "../../../../../hooks/grade-level/useDeleteGradeLevel";
import useCreateGradeLevel from "../../../../../hooks/grade-level/useCreateGradeLevel";
import { TableKit } from "../../../../../components/kit/Table";

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
const GradeLevel = (props: any) => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const [loading, setLoading] = useState(false);

    const createGradeLevel = useCreateGradeLevel();
    const updateGradeLevel = useUpdateGradeLevel();

    const gradeLevels = useGetGradeLevel();

    const deleteGradeLevel = useDeleteGradeLevel();

    const handleDeleteGradeLevel = (id: string) => {
        deleteGradeLevel.mutate(id, {
            onSuccess: async (result: {
                message: string;
                statusCode: number;
                access_token: string;
            }) => {
                if (result.statusCode == 200) {
                    setLoading(false);
                    gradeLevels.refetch();
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

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const handleCreateGradeLevel = async (data: any) => {
        setLoading(true);

        createGradeLevel.mutate(data, {
            onSuccess: async (result: { message: string; statusCode: number }) => {
                if (result.statusCode == 200) {
                    setLoading(false);
                    gradeLevels.refetch();
                    toast.success(result.message);
                } else {
                    setLoading(false);
                    if (Array.isArray(result.message)) {
                        toast.error(
                            <ul>
                                {result.message.map((msg: string) => (
                                    <li key={msg}>{msg}</li>
                                ))}
                            </ul>
                        );
                    } else {
                        toast.error(
                            <ul>
                                <li key={result.message}>{result.message}</li>
                            </ul>
                        );
                    }
                }
            },
            onError: async (e: any) => {
                toast.error(e.message);
            },
        });
    };

    const handleUpdateGradeLevel = async (data: any) => {
        setLoading(true);

        updateGradeLevel.mutate(
            { id: value.id, title: value.data },
            {
                onSuccess: async (result: { message: string; statusCode: number }) => {
                    if (result.statusCode == 200) {
                        setLoading(false);
                        gradeLevels.refetch();
                        toast.success(result.message);
                        setValue({ doUpdate: false, data: "", id: null });
                    } else {
                        setLoading(false);
                        if (Array.isArray(result.message)) {
                            toast.error(
                                <ul>
                                    {result.message.map((msg: string) => (
                                        <li key={msg}>{msg}</li>
                                    ))}
                                </ul>
                            );
                        } else {
                            toast.error(
                                <ul>
                                    <li key={result.message}>{result.message}</li>
                                </ul>
                            );
                        }
                    }
                },
                onError: async (e: any) => {
                    toast.error(e.message);
                },
            }
        );
    };
    return (
        <Box className={classes.container}>
            <Box>
                <form
                    onSubmit={
                        value.doUpdate
                            ? handleSubmit(handleUpdateGradeLevel)
                            : handleSubmit(handleCreateGradeLevel)
                    }
                >
                    <TextField
                        label="عنوان پایه تحصیلی"
                        variant="outlined"
                        className={classes.formField}
                        value={value.data}
                        {...register("title", {
                            required: "لطفا نام پایه تحصیلی را وارد کنید",
                        })}
                        onChange={(e) => {
                            if (value.doUpdate) {
                                setValue({ doUpdate: true, data: e.target.value, id: value.id });
                            } else {
                                setValue({ doUpdate: false, data: e.target.value, id: null });
                            }
                        }}
                    />

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
                <Typography>لیست پایه های تحصیلی</Typography>
                {!gradeLevels.isLoading ? (
                    <TableKit
                        secondary
                        headers={[{ children: `عنوان` }, { children: `عملیات` }]}
                        rows={gradeLevels?.data.map((item: any, index: any) => {
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
                                                }}
                                            >
                                                <EditLightSvg width={12} height={12} />
                                            </IconButton>
                                            <IconButton>
                                                <PrompModalKit
                                                    description={
                                                        "آیا از حذف پایه تحصیلی مطمئن  هستید؟"
                                                    }
                                                    onConfirm={() =>
                                                        handleDeleteGradeLevel(item._id)
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

export default GradeLevel;
