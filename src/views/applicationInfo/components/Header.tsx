import { Box, Theme, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { KaranbalaLogoSvg, KaranbalaLogoTextSvg } from "../../../assets";
import { ButtonKit } from "../../../components/kit/Button";

const sharedStyle = createStyles({
    sharedRule: {
        width: "100%",
    },
    sharedPosition: {
        position: "relative",
    },
});

const useStyles = makeStyles((theme: Theme) => ({
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
                    <KaranbalaLogoSvg />
                    <KaranbalaLogoTextSvg />
                </Box>
                <Box className={classes.signUp}>
                    <ButtonKit variant="contained">
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
