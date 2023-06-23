import React from "react";
import { Theme, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

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
