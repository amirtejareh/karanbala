import React, { useEffect, useState } from "react";
import { Box, TextField, Theme, Typography, Button } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { KaranbalaLogoSvg, KaranbalaLogoTextSvg } from "../../../assets";
import { ButtonKit } from "../../../components/kit/Button";
import { useNavigate } from "react-router-dom";
import { ModalKit } from "../../../components/kit/Modal";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useLogin } from "../../../hooks";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
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
    const [tabIndex, setTabIndex] = useState(0);
    const classes = useStyles();
    const { handleSubmit, register } = useForm();
    const [loading, setLoading] = useState(false);
    const loginHandler = useLogin();

    const handleLoginSubmit = async (data: any) => {
        console.log(data);
        setLoading(true);
        loginHandler.mutate(data, {
            onSuccess: async (result: { message: string; statusCode: number; token: string }) => {
                if (result.statusCode == 200) {
                    setLoading(false);

                    localStorage.setItem("token", result.token);
                } else {
                    console.log(result);
                    toast(result.message);
                }
            },
        });
    };
    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab>ورود</Tab>
                <Tab>عضویت</Tab>
            </TabList>

            <TabPanel>
                <div className={classes.formContainer}>
                    <h2 className={classes.formTitle}>ورود</h2>
                    <form id="login-form" onSubmit={handleSubmit(handleLoginSubmit)}>
                        <TextField
                            label="نام کاربری"
                            variant="outlined"
                            className={classes.formField}
                            required
                            InputProps={{
                                ...register("username", {
                                    required: "لطفا نام کاربری را وارد کنید",
                                }),
                            }}
                        />
                        <TextField
                            label="رمز عبور"
                            variant="outlined"
                            className={classes.formField}
                            type="password"
                            required
                            InputProps={{
                                ...register("password", {
                                    required: "لطفا رمز عبور را وارد کنید",
                                }),
                            }}
                        />
                        <Button
                            type={"submit"}
                            variant="contained"
                            color="primary"
                            className={classes.formButton}
                            form={"login-form"}
                        >
                            ورود
                        </Button>
                    </form>
                </div>
            </TabPanel>

            <TabPanel>
                <div className={classes.formContainer}>
                    <h2 className={classes.formTitle}>عضویت</h2>
                    <form>
                        <TextField
                            label="نام کاربری"
                            variant="outlined"
                            className={classes.formField}
                            required
                        />
                        <TextField
                            label="ایمیل"
                            variant="outlined"
                            className={classes.formField}
                            type="email"
                            required
                        />
                        <TextField
                            label="رمز عبور"
                            variant="outlined"
                            className={classes.formField}
                            type="password"
                            required
                        />
                        <TextField
                            label="تکرار رمز عبور"
                            variant="outlined"
                            className={classes.formField}
                            type="password"
                            required
                        />
                        <TextField
                            label="موبایل"
                            variant="outlined"
                            className={classes.formField}
                            type="tel"
                            required
                        />
                        <TextField
                            label="کد ملی"
                            variant="outlined"
                            className={classes.formField}
                            required
                        />
                        <Button variant="contained" color="primary" className={classes.formButton}>
                            عضویت
                        </Button>
                    </form>
                </div>
            </TabPanel>
        </Tabs>
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
