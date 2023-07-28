import React, { useEffect } from "react";
import { Theme, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        margin: "32px 52px",
    },
}));
const TermOfStudy = () => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return <Box className={classes.container}>ترم</Box>;
};

export default TermOfStudy;
