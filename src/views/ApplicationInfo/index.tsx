import React, { useEffect } from "react";
import { Theme, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        margin: "0 5.2rem",
    },
}));
const ApplicationInfoView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
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
