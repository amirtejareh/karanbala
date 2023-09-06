import React, { useState, useEffect } from "react";
import { Theme, Box, Typography, TextField, CircularProgress } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { ButtonKit } from "../../../components/kit/Button";
import { KaranbalaLogoSvg, KaranbalaLogoTextSvg } from "../../../assets";
import { useForm, Controller } from "react-hook-form";
import { CheckboxKit } from "../../../components/kit/Checkbox";
import AppForm from "../../../components/Form/AppForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import jwt_decode from "jwt-decode";
import { useLogin } from "../../../hooks";
import { authStore, userStore } from "../../../stores";
import { toast } from "react-toastify";

const sharedStyle = createStyles({
    sharedRule: {
        width: "100%",
    },
    sharedPosition: {
        position: "relative",
    },
});

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        margin: "32px 52px",
        alignItems: "center",
    },

    button: {
        color: theme.palette.text.primary,
    },
    badge: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        padding: "5px",
    },
    logo: {
        ...sharedStyle.sharedRule,
        display: "flex",
        alignItems: "center",
    },
    formField: {
        width: "100%",
    },
}));

interface ILoginForm {
    username?: string;
    password?: string;
    remember?: boolean;
}

const loginValidationSchema = yup.object({
    username: yup.string().required("لطفا نام کاربری را وارد کنید").label("نام کاربری"),
    password: yup.string().required("لطفا رمز عبور را وارد کنید").label("رمز عبور"),
    remember: yup.boolean().label("مرا به خاطر بسپار"),
});

const LoginView = React.forwardRef((props, ref: any) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const { setAccessToken } = authStore((state) => state);
    const { setUser } = userStore((state) => state);

    const [loading, setLoading] = useState<boolean>(false);

    const loginHandler = useLogin();

    const {
        control: loginControl,
        handleSubmit: handleLoginSubmit,
        register: loginRegister,
        clearErrors,
        formState: { errors: loginErrors },
    } = useForm<ILoginForm>({
        resolver: yupResolver(loginValidationSchema),
        defaultValues: {
            username: "",
            password: "",
            remember: false,
        },
    });

    const handleOnSubmit = async (data: any) => {
        setLoading(true);
        loginHandler.mutate(data, {
            onSuccess: async (result: {
                message: string;
                statusCode: number;
                access_token: string;
            }) => {
                if (result.statusCode === 200) {
                    setLoading(false);

                    setAccessToken(result.access_token);
                    setUser(jwt_decode(result.access_token));

                    navigate("/auth/check");
                } else {
                    setLoading(false);
                    toast(result.message);
                }
            },
        });
    };
    useEffect(() => {
        toast.error(loginErrors["username"]?.message?.toString());
        toast.error(loginErrors["password"]?.message?.toString());
        clearErrors();
    }, [loginErrors["username"]?.message, loginErrors["password"]?.message]);

    return (
        <Box className={classes.container}>
            <Box display={"block"} alignItems={"center"}>
                <Box
                    sx={{
                        width: "100%",
                        alignItems: "center",
                    }}
                >
                    <Box justifyContent={"center"} className={classes.logo}>
                        <ButtonKit onClick={() => navigate("/")}>
                            {" "}
                            <KaranbalaLogoSvg />
                        </ButtonKit>
                        <ButtonKit onClick={() => navigate("/")}>
                            {" "}
                            <KaranbalaLogoTextSvg />
                        </ButtonKit>
                    </Box>

                    <Typography mt={"80px"} variant="h5">
                        {"خوش برگرشتی !"}
                    </Typography>

                    <AppForm
                        formId={"login-form"}
                        onSubmit={handleLoginSubmit((data) => handleOnSubmit(data))}
                    >
                        <Box
                            mt={"40px"}
                            sx={{
                                width: "100%",
                            }}
                        >
                            <Controller
                                name="username"
                                control={loginControl}
                                render={({ field }) => (
                                    <TextField
                                        autoComplete="off"
                                        label="نام کاربری"
                                        variant="outlined"
                                        className={classes.formField}
                                        ref={ref}
                                        {...field}
                                    />
                                )}
                            />

                            <Controller
                                name="password"
                                control={loginControl}
                                render={({ field }) => (
                                    <TextField
                                        label="رمز عبور"
                                        variant="outlined"
                                        autoComplete="off"
                                        className={classes.formField}
                                        type="password"
                                        sx={{
                                            marginTop: "20px",
                                        }}
                                        ref={ref}
                                        {...field}
                                    />
                                )}
                            />

                            <Box
                                justifyContent={"space-between"}
                                sx={{
                                    display: "flex",
                                    width: "100%",
                                    marginTop: "20px",
                                }}
                            >
                                <Controller
                                    name="remember"
                                    control={loginControl}
                                    render={({ field }) => (
                                        <CheckboxKit
                                            simple
                                            checked={field.value ?? false}
                                            width={15}
                                            height={15}
                                            label="مرا به خاطر بسپار."
                                            onChange={(event) =>
                                                field.onChange(event.target.checked)
                                            }
                                            ref={field.ref}
                                            {...field}
                                        />
                                    )}
                                />

                                <Typography variant="body1">{"فراموشی رمز عبور"}</Typography>
                            </Box>

                            <ButtonKit
                                type="submit"
                                size="large"
                                variant="contained"
                                fullWidth
                                sx={{
                                    marginTop: "40px",
                                }}
                            >
                                {loading ? <CircularProgress size={24} /> : "ورود"}
                            </ButtonKit>

                            <Box
                                justifyContent={"center"}
                                alignItems={"center"}
                                sx={{
                                    display: "flex",
                                    width: "100%",
                                    marginTop: "20px",
                                }}
                            >
                                <Typography variant="body2">{` حساب کاربری ندارید ؟  `}</Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        navigate("/auth/signup");
                                    }}
                                >
                                    {`ایجاد کنید  `}{" "}
                                </Typography>
                            </Box>
                        </Box>
                    </AppForm>
                </Box>
                <Box></Box>
            </Box>
        </Box>
    );
});

export default LoginView;
