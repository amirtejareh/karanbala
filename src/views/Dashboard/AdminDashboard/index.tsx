import React, { useEffect } from "react";
import { Theme, Box, Typography, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MenuCreator } from "../../../components/MenuCreator";
import { adminDashboardMenuItems } from "../../../utils/menuItems/adminDashboardMenuItems";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AdminDashboardRoute from "../../../routes/adminRoute";
import { authStore, userStore } from "../../../stores";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        margin: "32px 52px",
    },

    menu: {
        margin: "0 0 0 150px ",
        width: "26rem",
        padding: "2.4rem",
        backgroundColor: theme.palette.primary["600"],
        color: theme.palette.common.white,
        "& .menus": {
            padding: "0",
        },
        "& .menus li": {
            padding: "0",
        },
        "& .menus li a": {
            padding: "0.8rem",
            display: "flex",
            justifyContent: "flex-start",
        },
        "& .menus span": {
            padding: "0.8rem",
            display: "flex",
        },
        "& .menu-items > a": {
            fontSize: "1.6rem",
        },
        "& .menu-items > a:hover": {
            backgroundColor: theme.palette.secondary["500"],
        },
        borderRadius: "1.6rem",
    },
    button: {
        color: theme.palette.text.primary,
    },
    badge: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        padding: "5px",
    },
}));
const AdminDashboard = () => {
    const user: any = userStore((state) => state);
    const { setAccessToken } = authStore((state) => state);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const classes = useStyles();
    const navigate = useNavigate();
    const handleLogout = () => {
        setAccessToken("");
        user.setUser(null);
        localStorage.removeItem("auth-storage");
        navigate("/");
    };
    return (
        <Box className={classes.container}>
            <Box display={"flex"} justifyContent={"space-around"}>
                <Box display={"flex"} gap={"10px"}>
                    <Typography variant="h5">{user?.user?.username}</Typography>
                    {user?.user?.roles?.map((role: { id: string; title: string }) => {
                        return (
                            <Box key={role.title} className={classes.badge}>
                                <Typography variant="body2">
                                    {role.title === "User" ? "کاربر عادی" : "مدیر کل"}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
                <Box>
                    <IconButton className={classes.button} onClick={handleLogout}>
                        <ExitToAppIcon />
                    </IconButton>
                </Box>
            </Box>

            <Box display={"flex"} mt={"50px"} gap={"100px"} flexWrap={"wrap"}>
                <Box className={classes.menu}>
                    <MenuCreator items={adminDashboardMenuItems} />
                </Box>
                <Box>
                    <AdminDashboardRoute />
                </Box>
            </Box>
        </Box>
    );
};

export default AdminDashboard;
