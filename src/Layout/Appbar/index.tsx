import {
    AppBar,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Theme,
    Toolbar,
    Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { fontSize } from "@mui/system";
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BagSvg, BookmarkSvg, GraphSvg, HomeSvg, TradeSvg } from "../../assets";

const useStyles = makeStyles((theme: Theme) => ({
    appbar: {
        background: theme.palette.background.paper,
        borderRadius: 12,
        right: 10,
        left: 10,
        width: "95%",
        margin: "0 auto",
    },
    navbar: {
        flexDirection: "row-reverse",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 0,
        display: "flex",
        width: "100%",
    },

    menuItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: theme.palette.common.white,
        paddingBottom: 0,

        "& svg": {
            height: 21,
            margin: "0 auto",
        },
        "& span": {
            fontSize: 10,
        },

        "&.Mui-selected": {
            borderBottom: "solid 1px #03BD90",

            background: "linear-gradient(180deg, rgb(37 43 61) 15%, rgba(34, 169, 191, 0.2) 100%)",
        },
    },
}));

const menu = [
    { id: 0, href: "home", name: "صفحه اصلی", icon: <HomeSvg />, hasBackBtn: false },
    { id: 1, href: "portfoi", name: "پورتفوی", icon: <GraphSvg />, hasBackBtn: true },
    { id: 2, href: "trade", name: "معاملات", icon: <TradeSvg />, hasBackBtn: false },
    { id: 3, href: "order", name: "سفارشات", icon: <BagSvg />, hasBackBtn: false },
    { id: 4, href: "watch-list", name: "دیدبان", icon: <BookmarkSvg />, hasBackBtn: false },
];

const Appbar = () => {
    const classes = useStyles();
    const [selected, setSelected] = useState(0);
    const location = useLocation();

    const selectedIndex = menu.findIndex((item) => item.href === location.pathname.split("/")[2]);

    return (
        <AppBar position="fixed" className={classes.appbar} sx={{ top: "auto", bottom: 10 }}>
            <Toolbar>
                <List className={classes.navbar} component="nav" aria-label="main mailbox folders">
                    {menu.map((item, index) => {
                        return (
                            <Link to={item.href} key={item.id}>
                                <ListItemButton
                                    disableGutters
                                    className={classes.menuItem}
                                    selected={selectedIndex === item.id}
                                    key={index}
                                    onClick={() => {}}
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </Link>
                        );
                    })}
                </List>
            </Toolbar>
        </AppBar>
    );
};

export default Appbar;
