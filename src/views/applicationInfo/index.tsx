import React from "react";
import { useTheme, Theme, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        margin: "0 52px",
    },
}));
const ApplicationInfoView = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Header />
            <Main />
            <Footer />
        </Box>
    );
};

export default ApplicationInfoView;
