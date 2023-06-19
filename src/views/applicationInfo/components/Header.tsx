import { Box, Grid, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    typography: {
        color: theme.palette.primary["main"],
    },
    logo: {
        margin: "0 10px 0 10px",
        width: "100%",
    },
    signUp: {
        margin: "0 10px 0 10px",
        width: "100%",
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

            <Box alignItems={"center"} justifyContent={"space-around"} display={"flex"}>
                <Box className={classes.logo}>test</Box>
                <Box className={classes.signUp}>test</Box>
            </Box>
        </>
    );
};

export { Header };
