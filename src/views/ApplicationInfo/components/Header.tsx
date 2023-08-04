import React, { useEffect, useState } from "react";
import { Box, TextField, Theme, Typography, Popover } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { KaranbalaLogoSvg, KaranbalaLogoTextSvg } from "../../../assets";
import { ButtonKit } from "../../../components/kit/Button";
import { useNavigate } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import jwt_decode from "jwt-decode";
import { authStore, userStore } from "../../../stores";
import { OpenAPI } from "../../../services/core/OpenAPI";

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

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const { accessToken } = authStore((state) => state);
    const userData: any = userStore((state) => state);

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const [popoverAnchor, setPopoverAnchor] = useState<any>(null);
    useEffect(() => {
        if (accessToken && userData.user === null) {
            const user = jwt_decode(accessToken ?? "");
            OpenAPI.TOKEN = accessToken;

            userData.setUser(user);
        } else {
            OpenAPI.TOKEN = accessToken;
        }
    }, [accessToken, userData]);

    const handlePopoverOpen = (event: any) => {
        if (userData.user) {
            navigate("/auth/check");
        } else {
            setPopoverAnchor(event.currentTarget);
        }
    };

    const handlePopoverClose = () => {
        setPopoverAnchor(null);
    };

    return (
        <>
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
                    <ButtonKit variant="contained" onClick={handlePopoverOpen}>
                        <Typography variant="subtitle1">
                            {userData.user ? `داشبورد` : `ورود / ثبت نام`}
                        </Typography>
                    </ButtonKit>
                    <Popover
                        open={Boolean(popoverAnchor)}
                        anchorEl={popoverAnchor}
                        onClose={handlePopoverClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                        }}
                    >
                        <Box
                            p={2}
                            sx={{
                                alignItems: "center",
                                display: "grid",
                            }}
                        >
                            <ButtonKit
                                onClick={() => {
                                    navigate("/auth/login");
                                    handlePopoverClose(); // با کلیک روی دکمه ورود، popover بسته می‌شود
                                }}
                            >
                                <Typography variant="subtitle1">ورود</Typography>
                            </ButtonKit>
                            <ButtonKit
                                onClick={() => {
                                    navigate("/auth/signup");
                                    handlePopoverClose(); // با کلیک روی دکمه ثبت نام، popover بسته می‌شود
                                }}
                            >
                                <Typography variant="subtitle1">ثبت نام</Typography>
                            </ButtonKit>
                        </Box>
                    </Popover>
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
