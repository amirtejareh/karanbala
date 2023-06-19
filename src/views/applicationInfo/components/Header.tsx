import { Box, Grid, IconButton, Theme, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { KaranbalaLogoSvg, KaranbalaLogoTextSvg } from "../../../assets";
import { ButtonKit } from "../../../components/kit/Button";

const sharedStyle = createStyles({
    sharedRule: {
        width: "100%",
        margin: "0 52px",
    },
});

const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        color: theme.palette.primary["main"],
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
        position: "relative",
        top: "-25px",
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <>
            <Box alignItems={"center"} justifyContent={"space-around"} display={"flex"}>
                <Box mt={"16px"}>
                    <Typography variant="subtitle1" className={classes.typography}>
                        امام جعفر صادق (ع) : دوست ندارم جوانی از شما را جز بر دو گونه ببینم،دانشمند
                        یا دانشجو
                    </Typography>
                </Box>
            </Box>

            <Box
                className={classes.parentLogoAndSignUp}
                alignItems={"center"}
                justifyContent={"space-around"}
                display={"flex"}
            >
                <Box className={classes.logo}>
                    <KaranbalaLogoSvg />
                    <KaranbalaLogoTextSvg />
                </Box>
                <Box className={classes.signUp}>
                    <ButtonKit variant="contained">ورود / ثبت نام</ButtonKit>
                </Box>
            </Box>
        </>
    );
};

export { Header };
