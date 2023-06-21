import { Box, Grid, Typography } from "@mui/material";
import { ThemeOptions } from "@mui/system";

import { makeStyles } from "@mui/styles";
import {
    AparatSvg,
    InstagramSvg,
    SanatSvg,
    EnamadSvg,
    TelegramSvg,
    TwitterSvg,
} from "../../../assets";

const useStyles = makeStyles((theme: ThemeOptions) => ({
    footer: {
        backgroundColor: theme?.palette?.primary["main"],
        width: "100%",
        minHeight: "132px",
        height: "auto",
        color: theme?.palette?.common.white,
    },
    phone: {
        backgroundColor: theme?.palette?.primary["main"],
        margin: "0 0 0 25px",
    },
    email: {
        backgroundColor: theme?.palette?.primary["main"],
    },

    socialNetwork: {
        flexWrap: "wrap",
        "& > div": {
            margin: "0 25px ",
        },
    },

    "& > div:nth-of-type(2)": {
        margin: "0 25px 0 0 !important",
    },

    auth: {
        "& > div": {
            margin: "0 4px 0 4px",
        },
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box
                    className={`${classes.footer} ${"footer"}`}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    display={"flex"}
                    flexWrap={"wrap"}
                >
                    <Box justifyContent={"center"} display={"flex"}>
                        <Box className={classes.phone}>
                            {" "}
                            <Typography>شماره تماس: ۸۸۹۶۵۲۳-۰۲۱</Typography>
                        </Box>
                        <Box className={classes.email}>
                            {" "}
                            <Typography>ایمیل: karanbala.com</Typography>
                        </Box>
                    </Box>
                    <Box
                        className={classes.socialNetwork}
                        justifyContent={"center"}
                        display={"flex"}
                    >
                        <Box>
                            <AparatSvg />
                        </Box>
                        <Box>
                            <InstagramSvg />{" "}
                        </Box>
                        <Box>
                            <TwitterSvg />{" "}
                        </Box>
                        <Box>
                            <TelegramSvg />
                        </Box>
                    </Box>
                    <Box className={classes.auth} justifyContent={"center"} display={"flex"}>
                        <Box>
                            <EnamadSvg />
                        </Box>
                        <Box>
                            <SanatSvg />
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export { Footer };
