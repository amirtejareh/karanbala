import React, { useEffect, useRef, useState } from "react";
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
import useCreateFieldOfStudy from "../../../../../../hooks/field-of-study/useCreateFieldOfStudy";
import useUpdateFieldOfStudy from "../../../../../../hooks/field-of-study/useUpdateFieldOfStudy";
import useGetFieldOfStudies from "../../../../../../hooks/field-of-study/useGetFieldOfStudies";
import useDeleteFieldOfStudy from "../../../../../../hooks/field-of-study/useDeleteFieldOfStudy";
import { DeleteLightSvg, EditLightSvg } from "../../../../../../assets";
import { PrompModalKit } from "../../../../../../components/kit/Modal";
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

    const createFieldOfStudy = useCreateFieldOfStudy();
    const updateFieldOfStudy = useUpdateFieldOfStudy();

    const fieldOfStudies = useGetFieldOfStudies();

    const deleteFieldOfStudy = useDeleteFieldOfStudy();

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

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        toast.error(errors["title"]?.message?.toString());
        clearErrors();
    }, [errors["title"]?.message]);

    return (
        <Box display={"flex"}>
            <Box className={classes.container}>
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
                                                    inputRef.current.focus();
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
