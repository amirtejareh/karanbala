import React from "react";
import { makeStyles } from "@mui/styles";

import { Box, Grid, Stack, Theme, Typography, useTheme } from "@mui/material";
// import { Header } from "./Header";
import { ButtonKit } from "../../../components/kit/Button";
import { Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";

const useStyles = makeStyles((theme: Theme) => ({
    mainSec: {
        marginTop: "0px",
        marginBottom: "0px",
        transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
        padding: "95px 0px 0px 0px",
        position: "relative",
    },
}));

const Slider = () => {
    const theme = useTheme();
    const classes = useStyles();
    const auth = useAuth();

    return (
        <Stack className={classes.mainSec}>
            <Box
                position={"absolute"}
                top={"8px"}
                width={"100%"}
                justifyContent={"space-between"}
                display={"flex"}
            >
                <Link to="/pv/dashboard">
                    <img src="/images/hafez-logo.svg" alt="logo" height={45} />
                </Link>
                <Link to="/pv/dashboard">
                    <img src="/images/dorin-logo.svg" alt="logo" height={50} />
                </Link>
            </Box>

            <Grid container spacing={2} flexWrap="nowrap">
                <Grid item xs={5} display={"flex"} alignItems={"center"}>
                    <Stack minHeight={300}>
                        <Typography variant="h3" fontSize={25} lineHeight={2.2} color={"primary"}>
                            درین{" "}
                        </Typography>
                        <Typography variant="h5" fontSize={20} lineHeight={2.2}>
                            سامانه معاملات برخط کارگزاری حافظ
                        </Typography>
                        <Box width={"100%"} display={"flex"} justifyContent={"space-between"}>
                            <ButtonKit
                                onClick={() => {
                                    auth.signinRedirect();
                                    // if (!auth.isAuthenticated) {

                                    // } else {
                                    //     auth.signinSilent()
                                    // }
                                    // mgr.signinRedirect()
                                }}
                                sx={{ width: "200px", mt: 8 }}
                                variant="contained"
                            >
                                ورود
                            </ButtonKit>
                            <Link to="/pub/login">
                                <ButtonKit
                                    sx={{ width: "130px", mt: 8, ml: 1 }}
                                    variant="outlined"
                                    size="medium"
                                >
                                    فعالسازی
                                </ButtonKit>
                            </Link>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={7}>
                    <Box display={"flex"} justifyContent={"center"}>
                        <img src="/images/landingSlider.png" alt="logo" height={220} />
                    </Box>
                </Grid>
            </Grid>
        </Stack>
    );
};

export { Slider };
