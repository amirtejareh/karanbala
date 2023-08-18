import React, { useEffect, useState } from "react";
import { Theme, Box, Typography, TextField, CircularProgress } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { ButtonKit } from "../../../components/kit/Button";
import { KaranbalaLogoSvg, KaranbalaLogoTextSvg } from "../../../assets";
import { useForm, Controller } from "react-hook-form";
import AppForm from "../../../components/Form/AppForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import jwt_decode from "jwt-decode";
import { useSignup } from "../../../hooks";
import { authStore, userStore } from "../../../stores";
import { toast } from "react-toastify";
import { mobileNumberRegex } from "../../../utils/helper";

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
    contentWrapper: {},
    content: {
        margin: "16px 0",
        padding: "2px 0",
        float: "right",
    },
    menu: {
        margin: "0 0 0 150px ",
        width: "300px",
        float: "right",
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
        // margin: "1rem 0",
        // margin
        width: "100%",
    },
}));

interface ISignUpForm {
    username: string;
    email: string;
    mobile: string;
    national_id_number: string;
    password: string;
}

const signUpValidationSchema = yup
    .object({
        username: yup.string().required("لطفا نام کاربری را وارد کنید").label("نام کاربری"),
        email: yup
            .string()
            .required("لطفا ایمیل را وارد کنید")
            .email("لطفا یک آدرس ایمیل صحیح وارد کنید")
            .label("ایمیل"),
        mobile: yup
            .string()
            .required("لطفا شماره موبایل را وارد کنید")
            .matches(mobileNumberRegex, "شماره موبایل معتبر نیست")
            .length(11, "لطفا شماره موبایل خود را همراه با ۰ وارد کنید")
            .label("شماره موبایل"),
        national_id_number: yup
            .string()
            .required("لطفا کد ملی را وارد کنید")
            .length(10, "کد ملی شامل ۱۰ کاراکتر عددی می باشد.")
            .label("کد ملی"),
        password: yup.string().required("لطفا رمز عبور را وارد کنید").label("رمز عبور"),
    })
    .required();

const SignUpView = React.forwardRef((props, ref: any) => {
    const classes = useStyles();
    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [disableForm, setDisableForm] = useState<boolean>(false);

    const signupHandler = useSignup();

    const {
        control: signUpControl,
        handleSubmit: handleSignUpSubmit,
        register: signUpRegister,

        clearErrors,
        formState: { errors: signUpErrors },
    } = useForm<ISignUpForm>({
        resolver: yupResolver(signUpValidationSchema),
        defaultValues: {
            username: "",
            email: "",
            mobile: "",
            national_id_number: "",
            password: "",
        },
    });

    useEffect(() => {
        const errors: string[] = Object.keys(signUpErrors);
        if (errors.length > 0) {
            for (let index = 0; index < errors.length; index++) {
                toast.error(signUpErrors[errors[index]]?.message?.toString());
            }
        }
        clearErrors();
    }, [signUpErrors]);

    const handleOnSubmit = async (data: any) => {
        setLoading(true);
        signupHandler.mutate(data, {
            onSuccess: async (result: {
                message: [] | string;
                statusCode: number;
                access_token: string;
            }) => {
                if (result.statusCode === 200) {
                    setLoading(false);

                    toast.success("ثبت نام با موفقیت انجام شد. لطفا وارد حساب کاربری خود شوید.");
                    setDisableForm(true);
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
        });
    };

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
                        {"به کران بالا خوش آمدید"}
                    </Typography>

                    <AppForm
                        formId={"sign-up-form"}
                        onSubmit={handleSignUpSubmit((data) => handleOnSubmit(data))}
                    >
                        <Box
                            mt={"40px"}
                            sx={{
                                width: "100%",
                            }}
                        >
                            <Controller
                                name="username"
                                control={signUpControl}
                                render={({ field }) => (
                                    <TextField
                                        autoComplete="off"
                                        disabled={disableForm}
                                        label="نام کاربری"
                                        variant="outlined"
                                        className={classes.formField}
                                        ref={ref}
                                        {...field}
                                    />
                                )}
                            />

                            <Controller
                                name="email"
                                control={signUpControl}
                                render={({ field }) => (
                                    <TextField
                                        autoComplete="off"
                                        disabled={disableForm}
                                        label="ایمیل"
                                        variant="outlined"
                                        className={classes.formField}
                                        ref={ref}
                                        sx={{
                                            marginTop: "20px",
                                        }}
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                name="mobile"
                                control={signUpControl}
                                render={({ field }) => (
                                    <TextField
                                        autoComplete="off"
                                        disabled={disableForm}
                                        label="موبایل"
                                        variant="outlined"
                                        className={classes.formField}
                                        ref={ref}
                                        sx={{
                                            marginTop: "20px",
                                        }}
                                        {...field}
                                    />
                                )}
                            />
                            <Controller
                                name="national_id_number"
                                control={signUpControl}
                                render={({ field }) => (
                                    <TextField
                                        autoComplete="off"
                                        disabled={disableForm}
                                        label="کد ملی"
                                        variant="outlined"
                                        className={classes.formField}
                                        ref={ref}
                                        sx={{
                                            marginTop: "20px",
                                        }}
                                        {...field}
                                    />
                                )}
                            />

                            <Controller
                                name="password"
                                control={signUpControl}
                                render={({ field }) => (
                                    <TextField
                                        label="رمز عبور"
                                        disabled={disableForm}
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

                            <ButtonKit
                                disabled={disableForm}
                                type="submit"
                                size="large"
                                variant="contained"
                                fullWidth
                                sx={{
                                    marginTop: "40px",
                                }}
                            >
                                {loading ? <CircularProgress size={24} /> : "ساخت حساب"}
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
                                <Typography variant="body2">{` حساب کاربری دارید ؟  `}</Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        cursor: "pointer",
                                    }}
                                    onClick={() => {
                                        navigate("/auth/login");
                                    }}
                                >
                                    {`وارد شوید  `}{" "}
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

export default SignUpView;
