import React, { useEffect } from "react";
import { Theme, Box, Typography, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MenuCreator } from "../../../components/MenuCreator";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { userDashboardMenuItems } from "../../../utils/menuItems/userDashboardMenuItems";
import UserDashboardRoute from "../../../routes/userRoute";
import { userStore, authStore } from "../../../stores";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        margin: "32px 52px",
    },
    contentWrapper: {},
    content: {
        margin: "16px 0",
        padding: "2px 0",
        float: "right",
    },
    menu: {
        margin: "0 0 0 150px ",
        width: "200px",
        float: "right",
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
const UserDashboard = () => {
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

            <Box className={classes.contentWrapper}>
                <Box className={classes.menu}>
                    <MenuCreator items={userDashboardMenuItems} />
                </Box>
                <Box className={classes.content}>
                    <UserDashboardRoute />
                </Box>
            </Box>
        </Box>
    );
};

export default UserDashboard;
