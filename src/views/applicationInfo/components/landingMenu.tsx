import { List, ListItem, ListItemButton, ListItemText, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";
import { useState } from "react";
import { ArrowDownSvg } from "../../../assets";

const useStyles = makeStyles((theme: Theme) => ({}));

const StyledList = styled(List)(({ theme }) => ({
    display: "flex",

    "& .MuiListItem-root": {
        color: theme.palette.grey["50"],
        "& 	.MuiListItemButton-root": {
            [theme.breakpoints.between("lg", "xl")]: {
                paddingRight: "1rem",
                paddingLeft: "1rem",
            },
        },

        "&:hover": {
            color: theme.palette.primary.main,
        },
        "&.selected": {
            color: theme.palette.primary.main,
        },
        "& span": {
            fontSize: "1.4rem",
            [theme.breakpoints.between("lg", "xl")]: {
                fontSize: "1.3rem",
            },
        },
    },
}));

const menuItems = [
    { id: 0, name: "داشبورد" },
    { id: 1, name: "حسابداری", children: [] },
    { id: 2, name: "گزارش ها", children: [] },
    { id: 3, name: "بازار" },
    { id: 4, name: " عرضه اولیه" },
    { id: 5, name: "تغییر کارگزار ناظر" },
];

const Menu = () => {
    const classes = useStyles();
    const [selected, setSelected] = useState(0);

    const handleSelected = (index: number) => {
        setSelected(index);
    };

    return (
        <StyledList>
            {menuItems.map((item, index) => (
                <ListItem
                    disablePadding
                    key={index}
                    sx={{ width: "auto" }}
                    onClick={() => handleSelected(item.id)}
                    className={index === selected ? "selected" : ""}
                >
                    <ListItemButton disableRipple>
                        <ListItemText primary={item.name} />
                        {item?.children && <ArrowDownSvg />}
                    </ListItemButton>
                </ListItem>
            ))}
        </StyledList>
    );
};

export default Menu;
