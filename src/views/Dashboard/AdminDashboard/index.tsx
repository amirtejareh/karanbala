import React, { useEffect } from "react";
import { Theme, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MainReducerInterface } from "../../../provider/reducer/main.reducer";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        margin: "0 52px",
    },
}));
const AdminDashboard = () => {
    const user = useSelector((state: MainReducerInterface) => state);

    console.log(user, "user");

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    const classes = useStyles();
    return <Box className={classes.container}>سلام خوش اومدی</Box>;
};

export default AdminDashboard;
