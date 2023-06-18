import React from "react";
import { Grid, Stack, useTheme, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { Header } from "./components/Header";

const useStyles = makeStyles((theme: Theme) => ({}));
const ApplicationInfoView = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Stack my={1} display={"flex"} justifyContent={"center"} alignItems={"center"} mx={2}>
            <Grid item xs={12}>
                Karanbala
            </Grid>
        </Stack>
    );
};

export default ApplicationInfoView;
