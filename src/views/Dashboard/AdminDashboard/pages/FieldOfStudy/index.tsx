import React, { useEffect, useState } from "react";
import { Theme, Box, TextField, Button, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import useCreateFieldOfStudy from "../../../../../hooks/useCreateFieldOfStudy";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        margin: "32px 52px",
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
const FieldOfStudy = () => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const [loading, setLoading] = useState(false);

    const createFieldOfStudy = useCreateFieldOfStudy();

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

                    toast.success(result.message);
                } else {
                    setLoading(false);
                    toast.error(result.message);
                }
            },
        });
    };
    return (
        <Box className={classes.container}>
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
    );
};

export default FieldOfStudy;
