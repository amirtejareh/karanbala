import React, { useEffect, useState } from "react";
import {
    Theme,
    Box,
    TextField,
    Button,
    CircularProgress,
    Typography,
    Table,
    IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import useCreateFieldOfStudy from "../../../../../hooks/field-of-study/useCreateFieldOfStudy";
import { toast } from "react-toastify";
import useGetFieldOfStudies from "../../../../../hooks/field-of-study/useGetFieldOfStudies";
import { TableKit } from "../../../../../components/kit/Table";
import { PrompModalKit } from "../../../../../components/kit/Modal";
import { DeleteLightSvg, DeleteSvg } from "../../../../../assets";
import useDeleteFieldOfStudy from "../../../../../hooks/field-of-study/useDeleteFieldOfStudy";

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
const FieldOfStudy = (props: any) => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const [loading, setLoading] = useState(false);

    const createFieldOfStudy = useCreateFieldOfStudy();

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

    const [page, setPage] = useState<number>(1);
    const [pageSize] = useState<number>(10);

    const {
        handleSubmit,
        register,
        formState: { errors: loginErrors },
    } = useForm();

    const handleOnSubmit = async (data: any) => {
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
    return (
        <Box className={classes.container}>
            <Box>
                <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <TextField
                        label="عنوان رشته تحصیلی"
                        variant="outlined"
                        className={classes.formField}
                        InputProps={{
                            ...register("title", {
                                required: "لطفا نام رشته تحصیلی را وارد کنید",
                            }),
                        }}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.formButton}
                        disabled={loading}
                        type="submit"
                    >
                        {loading ? <CircularProgress size={24} /> : "ذخیره"}
                    </Button>
                </form>
            </Box>
            <Box className={classes.fieldOfStudy}>
                <Typography>لیست رشته های تحصیلی</Typography>
                {!fieldOfStudies.isLoading ? (
                    <TableKit
                        secondary
                        headers={[{ children: `عنوان` }, { children: `عملیات` }]}
                        rows={fieldOfStudies?.data.map((item: any, index: any) => {
                            return {
                                id: item._id,
                                data: {
                                    title: item?.title,
                                    action: (
                                        <IconButton>
                                            <PrompModalKit
                                                description={"آیا از حذف رشته تحصیلی مطمئن  هستید؟"}
                                                onConfirm={() => handleDeleteFieldOfstudy(item._id)}
                                                approved={"بله"}
                                                denied={"خیر"}
                                            >
                                                <DeleteLightSvg width={16} height={16} />
                                            </PrompModalKit>
                                        </IconButton>
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
