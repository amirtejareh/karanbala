import React from "react";
import { useTheme, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const useStyles = makeStyles((theme: Theme) => ({}));
const ApplicationInfoView = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <>
            <Header />
            <Footer />
        </>
    );
};

export default ApplicationInfoView;
