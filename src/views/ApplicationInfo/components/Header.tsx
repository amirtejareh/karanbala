import React, { useState } from "react";
import { Box, TextField, Theme, Typography, Button, CircularProgress } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { KaranbalaLogoSvg, KaranbalaLogoTextSvg } from "../../../assets";
import { ButtonKit } from "../../../components/kit/Button";
import { useNavigate } from "react-router-dom";
import { ModalKit } from "../../../components/kit/Modal";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useLogin, useSignup } from "../../../hooks";
import "react-tabs/style/react-tabs.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import jwt_decode from "jwt-decode";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { authStore, userStore } from "../../../stores";

const sharedStyle = createStyles({
    sharedRule: {
        width: "100%",
    },
    sharedPosition: {
        position: "relative",
    },
});

const useStyles = makeStyles((theme: Theme) => ({
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

    typography: {
        color: theme.palette.primary["main"],
        textAlign: "center",
    },

    logo: {
        ...sharedStyle.sharedRule,
        display: "flex",
        gap: "8px",
    },
    signUp: {
        ...sharedStyle.sharedRule,
        textAlign: "left",
    },
    parentLogoAndSignUp: {
        ...sharedStyle.sharedPosition,
        top: "-16px",
    },
    parentCaption: {
        ...sharedStyle.sharedPosition,
        top: "-32px",
    },
}));

const ModalLoginOrSignup = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState("login");
    const { setAccessToken } = authStore((state) => state);
    const { setUser } = userStore((state) => state);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const [loading, setLoading] = useState(false);
    const loginHandler = useLogin();
    const signupHandler = useSignup();
    const navigate = useNavigate();

    const {
        handleSubmit: handleLoginSubmit,
        register: loginRegister,
        formState: { errors: loginErrors },
    } = useForm();
    const {
        handleSubmit: handleSignupSubmit,
        register: signupRegister,
        formState: { errors: signupErrors },
    } = useForm();

    const handleOnSubmit = async (data: any) => {
        setLoading(true);
        if (value === "login") {
            loginHandler.mutate(data, {
                onSuccess: async (result: {
                    message: string;
                    statusCode: number;
                    access_token: string;
                }) => {
                    if (result.statusCode == 200) {
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
        } else if (value === "signup") {
            signupHandler.mutate(data, {
                onSuccess: async (result: {
                    message: [] | string;
                    statusCode: number;
                    access_token: string;
                }) => {
                    if (result.statusCode == 200) {
                        setLoading(false);

                        toast.success(
                            "ثبت نام با موفقیت انجام شد. لطفا وارد حساب کاربری خود شوید."
                        );
                        setValue("login");
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
        }
    };

    return (
        <TabContext value={value}>
            <TabList onChange={handleChange}>
                <Tab label="ورود" value="login" />
                <Tab label="عضویت" value="signup" />
            </TabList>

            <TabPanel value="login">
                <div className={classes.formContainer}>
                    <h2 className={classes.formTitle}>ورود</h2>
                    <form onSubmit={handleLoginSubmit(handleOnSubmit)}>
                        <TextField
                            label="نام کاربری"
                            variant="outlined"
                            className={classes.formField}
                            InputProps={{
                                ...loginRegister("username", {
                                    required: "لطفا نام کاربری را وارد کنید",
                                }),
                            }}
                        />
                        <TextField
                            label="رمز عبور"
                            variant="outlined"
                            autoComplete="off"
                            className={classes.formField}
                            type="password"
                            InputProps={{
                                ...loginRegister("password", {
                                    required: "لطفا رمز عبور را وارد کنید",
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
                            {loading ? <CircularProgress size={24} /> : "ورود"}
                        </Button>
                    </form>
                </div>
            </TabPanel>

            <TabPanel value="signup">
                <div className={classes.formContainer}>
                    <h2 className={classes.formTitle}>ثبت نام</h2>
                    <form onSubmit={handleSignupSubmit(handleOnSubmit)}>
                        <TextField
                            label="نام کاربری"
                            variant="outlined"
                            className={classes.formField}
                            InputProps={{
                                ...signupRegister("username", {
                                    required: "لطفا نام کاربری را وارد کنید",
                                }),
                            }}
                        />
                        <TextField
                            label="رمز عبور"
                            variant="outlined"
                            className={classes.formField}
                            type="password"
                            autoComplete="off"
                            InputProps={{
                                ...signupRegister("password", {
                                    required: "لطفا رمز عبور را وارد کنید",
                                }),
                            }}
                        />

                        <TextField
                            label="ایمیل"
                            variant="outlined"
                            className={classes.formField}
                            type="email"
                            InputProps={{
                                ...signupRegister("email", {
                                    required: "لطفا ایمیل را وارد کنید",
                                }),
                            }}
                        />

                        <TextField
                            label="موبایل"
                            variant="outlined"
                            className={classes.formField}
                            type="tel"
                            InputProps={{
                                ...signupRegister("mobile", {
                                    required: "لطفا شماره موبایل را وارد کنید",
                                }),
                            }}
                        />

                        <TextField
                            label="کد ملی"
                            variant="outlined"
                            className={classes.formField}
                            type="text-"
                            InputProps={{
                                ...signupRegister("national_id_number", {
                                    required: "لطفا کد ملی را وارد کنید",
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
                            {loading ? <CircularProgress size={24} /> : "ثبت نام"}
                        </Button>
                    </form>
                </div>
            </TabPanel>
        </TabContext>
    );
};

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <>
            <ModalKit
                onClose={() => {
                    setModalOpen(false);
                }}
                modalState={modalOpen}
                title={<>ورود/ثبت نام کاربر</>}
                maxWidth={"sm"}
            >
                {({ handleApproved }: any) => <ModalLoginOrSignup />}
            </ModalKit>
            <Box alignItems={"center"} justifyContent={"space-around"} display={"flex"}>
                <Box mt={"1.6rem"}>
                    <Typography
                        fontSize={"2rem"}
                        variant="subtitle1"
                        className={classes.typography}
                    >
                        امام جعفر صادق (ع) : دوست ندارم جوانی از شما را جز بر دو گونه ببینم،دانشمند
                        یا دانشجو
                    </Typography>
                </Box>
            </Box>

            <Box
                className={`${classes.parentLogoAndSignUp} ${"parentLogoAndSignUp"}`}
                alignItems={"center"}
                justifyContent={"space-around"}
                display={"flex"}
            >
                <Box className={classes.logo}>
                    <ButtonKit onClick={() => navigate("/")}>
                        {" "}
                        <KaranbalaLogoSvg />
                    </ButtonKit>
                    <ButtonKit onClick={() => navigate("/")}>
                        {" "}
                        <KaranbalaLogoTextSvg />
                    </ButtonKit>
                </Box>
                <Box className={classes.signUp}>
                    <ButtonKit
                        variant="contained"
                        onClick={() => {
                            setModalOpen(true);
                        }}
                    >
                        <Typography variant="subtitle1">ورود / ثبت نام</Typography>
                    </ButtonKit>
                </Box>
            </Box>
            <Box
                className={`${classes.parentCaption} ${"parentCaption"}`}
                alignItems={"center"}
                justifyContent={"space-around"}
                display={"flex"}
            >
                <Typography fontSize={"1.6rem"} variant="caption" className={classes.typography}>
                    یکشنبه ۱۰ اردیبهشت ۱۴۰۲ - ۱۸:۳۷
                </Typography>
            </Box>
        </>
    );
};

export { Header };
