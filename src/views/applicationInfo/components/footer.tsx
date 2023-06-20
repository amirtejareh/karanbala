import { Box, Grid, Typography } from "@mui/material";
import { ThemeOptions } from "@mui/system";

import { createStyles, makeStyles } from "@mui/styles";
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
        height: "132px",
        position: "relative",
        bottom: "0",
        color: theme?.palette?.common.white,
        padding: "0 100px",
    },
    phone: {
        backgroundColor: theme?.palette?.primary["main"],
        margin: "0 0 0 24px",
    },
    email: {
        backgroundColor: theme?.palette?.primary["main"],
    },

    socialNetwork: {
        "& > div": {
            margin: "0 25px 0 0",
        },
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
                    className={classes.footer}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    display={"flex"}
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
