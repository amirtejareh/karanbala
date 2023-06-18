import { Box, List, ListItem, ListItemProps, ListItemText, Theme } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import clsx from "clsx";
import React from "react";
import useStyles from "./style";

interface IListItemProps extends ListItemProps {
    headers: {
        data: { [name: string]: any };
        id: string | number;
    }[];
    rows: {
        data: { [name: string]: any };
        id: string | number;
        volumePercent: number;
    }[];
    type: string;
    scrollHeight?: number;
    vertical?: boolean;
}

interface IUseStyles {
    scrollHeight?: number;
}
interface IDirectionStyles {
    vertical?: boolean;
}
const useScrollStyles = makeStyles<Theme, IUseStyles>(() => ({
    scrollable: {
        maxHeight: (props) => (props.scrollHeight ? `${props.scrollHeight}px` : undefined),
        overflow: "auto",
    },
}));

const StyledListItem = withStyles((theme: Theme) => ({
    root: {
        paddingTop: "0rem",
        paddingBottom: "0rem",
        position: "relative",
        "& .MuiListItemText-root": {
            display: "flex",
            justifyContent: "space-between",
        },
        "& .MuiListItemText-primary": {
            color:
                theme.palette.mode === "dark"
                    ? theme.palette.grey.A400
                    : theme.palette.text.primary,
            fontSize: "1.6rem",
            [theme.breakpoints.down(1880)]: {
                fontSize: "1.4rem",
            },
        },
        "& .MuiListItemText-secondary": {
            color: theme.palette.common.white,
            fontSize: "1.6rem",
        },
    },
}))(ListItem);

const BestLimitListItem: React.FC<IListItemProps & IDirectionStyles> = (props) => {
    const { type, headers, children, scrollHeight, rows, vertical, ...rest } = props;
    const classes = useStyles({ type, vertical });
    const classesScroll = useScrollStyles({ scrollHeight });

    return (
        <List
            disablePadding
            className={clsx(
                {
                    [classesScroll.scrollable]: scrollHeight,
                },
                {
                    ["scrollable"]: scrollHeight,
                }
            )}
        >
            <Box
                display={"flex"}
                px={2}
                sx={{
                    "& li": {
                        flexBasis: "33.3%",
                        "&:nth-of-type(2)": {
                            textAlign: "center",
                        },
                        "&:last-child": {
                            textAlign: "right",
                        },
                    },
                }}
            >
                {headers.length > 0 &&
                    headers.map(({ data, id }, key) => {
                        return (
                            <React.Fragment key={key}>
                                {Object.values(data).map((item, index) => {
                                    return (
                                        <ListItem
                                            sx={{ paddingTop: "0px", paddingBottom: "0px" }}
                                            key={index}
                                            {...rest}
                                            disableGutters
                                        >
                                            <ListItemText
                                                className={clsx(classes.listItemHeaderText, {
                                                    [classes.success]: type.includes("benefits"),
                                                    [classes.error]: type.includes("lost"),
                                                })}
                                                primary={item.props.primary}
                                                secondary={item.props.secondary}
                                            />
                                        </ListItem>
                                    );
                                })}
                            </React.Fragment>
                        );
                    })}
            </Box>
            {rows.length > 0 &&
                rows.map(({ data, volumePercent }, key) => {
                    const eachPercentItem = 9;
                    const svgNumber =
                        volumePercent > 0
                            ? Math.trunc(volumePercent / eachPercentItem) >= 10
                                ? 10
                                : Math.trunc(volumePercent / eachPercentItem) + 1
                            : 0;

                    return (
                        <React.Fragment key={key}>
                            {Object.values(data).map((item, index) => {
                                return (
                                    <StyledListItem key={index} {...rest}>
                                        <Box className={classes.iconWrapper}>
                                            <Box className={classes[`I${svgNumber}`]} />
                                        </Box>
                                        <ListItemText
                                            primary={item.props.primary}
                                            secondary={item.props.secondary}
                                            className={classes.listItemText}
                                        />
                                    </StyledListItem>
                                );
                            })}
                        </React.Fragment>
                    );
                })}
        </List>
    );
};

export default BestLimitListItem;
