import React, { useEffect } from "react";
import { Theme, Box, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { MainReducerInterface } from "../../../provider/reducer/main.reducer";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        margin: "0 52px",
    },
}));
const AdminDashboard = () => {
    const user: any = useSelector((state: MainReducerInterface) => state.user);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {}, [user]);
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <>
                سلام خوش آمدی {user?.user?.username} با نقش {user?.user?.roles[0]}
            </>
        </Box>
    );
};

export default AdminDashboard;
