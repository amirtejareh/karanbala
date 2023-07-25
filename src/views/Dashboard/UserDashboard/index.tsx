import React, { useEffect } from "react";
import { Theme, Box, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector } from "react-redux";
import { MainReducerInterface } from "../../../provider/reducer/main.reducer";
import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        margin: "0 52px",
    },
}));
const UserDashboard = () => {
    const auth = useSelector((state: MainReducerInterface) => state.auth);
    const navigate = useNavigate();
    const token = auth.token ?? localStorage.getItem("token");
    const data: any = useJwt(token ?? "");

    console.log(data, "user");

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <>
                سلام خوش آمدی {data?.decodedToken?.username} با نقش {data?.decodedToken?.roles[0]}
            </>
        </Box>
    );
};

export default UserDashboard;
