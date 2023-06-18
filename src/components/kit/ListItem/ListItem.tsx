import { List, ListItem, ListItemProps, ListItemText, Theme } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import clsx from "clsx";
import React from "react";

interface IListItemProps extends ListItemProps {
    rows: {
        data: { [name: string]: any };
        id: string | number;
    }[];
    scrollHeight?: number;
}
interface IUseStyles {
    scrollHeight?: number;
}
const useStyles = makeStyles<Theme, IUseStyles>((theme: Theme) => ({
    scrollable: {
        maxHeight: (props) => (props.scrollHeight ? `${props.scrollHeight}px` : undefined),
        overflow: "auto",
    },
}));

const StyledListItem = withStyles((theme: Theme) => ({
    root: {
        margin: "0",
        borderRadius: "0.8rem",
        padding: "0",

        // "&:nth-of-type(even)": {
        //     backgroundColor: "#2c2b32",
        // },
        // "&:nth-of-type(odd)": {
        //     backgroundColor: "#28272c",
        // },
        "& .MuiListItemText-root": {
            display: "flex",
            justifyContent: "space-between",
        },
        "& .MuiListItemText-primary": {
            color: theme.palette.grey[100],
            fontSize: "1.1rem",
            fontWeight: 500,
        },
        "& .MuiListItemText-secondary": {
            color: theme.palette.grey.A100,
            fontSize: "1rem",
            fontWeight: 400,
        },
    },
}))(ListItem);

const ListItemKit: React.FC<IListItemProps> = (props) => {
    const { children, rows, scrollHeight, ...rest } = props;
    const classes = useStyles({ scrollHeight });

    return (
        <List
            className={clsx(
                {
                    [classes.scrollable]: scrollHeight,
                },
                {
                    ["scrollable"]: scrollHeight,
                }
            )}
        >
            {rows.length > 0 &&
                rows.map(({ data, id }, key) => {
                    return (
                        <React.Fragment key={key}>
                            {Object.values(data).map((item, index) => {
                                return (
                                    <StyledListItem {...rest} key={index}>
                                        <ListItemText
                                            primary={item.props.primary}
                                            secondary={item.props.secondary}
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

export default ListItemKit;
