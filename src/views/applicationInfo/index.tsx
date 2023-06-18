import React from "react";
import { Grid, Stack, useTheme, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Header } from "./components/Header";
import { Footer } from "./components/footer";

const useStyles = makeStyles((theme: Theme) => ({}));
const ApplicationInfoView = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (

        <Grid container>
     
            <Grid m={'16px'}  item xs={12}>
                <Header/>
                <Footer/>
            </Grid>

            </Grid>
    );
};

export default ApplicationInfoView;
