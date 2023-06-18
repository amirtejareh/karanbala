import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import {
    ListItemIcon,
    ListItemIconProps,
    ListItemText,
    ListItemTextProps,
    Theme,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({}));

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 8,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
        boxShadow: "0 2px 30px 0 rgba(0, 0, 0, 0.5)",
        "& .MuiMenu-list": {
            // padding: '4px 0',
        },
        "& .MuiMenuItem-root": {
            fontSize: 12,
            color: theme.palette.grey[50],
            paddingTop: 12,
            paddingBottom: 12,
            "& span , & p": {
                fontSize: 12,
            },
            "& svg": {
                marginRight: theme.spacing(1),
            },
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

interface IMenuKitProps extends Omit<MenuProps, "open"> {
    hasIcon?: boolean;
    data?: Array<
        { icon?: ListItemIconProps; text?: ListItemTextProps } & MenuItemProps
        // & { prompt?: PromptModalProps }
    >;
}

const MenuKit: React.FC<IMenuKitProps> = (props) => {
    const classes = useStyles();
    const { hasIcon, children, data, ...rest } = props;
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {children &&
                React.cloneElement(children as React.ReactElement, { onClick: handleClick })}

            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                }}
                elevation={0}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {data?.map(({ icon, text, onClick, ...other }, key) => {
                    // const dom = (
                    return (
                        <MenuItem
                            onClick={(e) => {
                                onClick && onClick(e);
                                handleClose();
                            }}
                            key={key}
                            {...other}
                        >
                            {other.children}
                            {icon && (
                                <ListItemIcon {...icon} sx={{ minWidth: "22px !important" }} />
                            )}
                            {text && <ListItemText {...text} sx={{ fontSize: 12 }} />}
                        </MenuItem>
                    );

                    // );
                    // return other.prompt ? <PromptModalKit {...other.prompt}>{dom}</PromptModalKit> : dom;
                })}
            </StyledMenu>
        </>
    );
};

export default MenuKit;
