import { Box, Pagination, PaginationProps, Theme } from "@mui/material";
import React from "react";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            "& > *": {
                marginTop: theme.spacing(2),
            },
            "& .MuiPaginationItem-page": {
                backgroundColor: theme.palette.background.paper,
            },
            "& .MuiPagination-ul": {
                justifyContent: "flex-start",
            },
            "& .Mui-selected": {
                backgroundColor: `${theme.palette.primary.main} !important`,
                color: `${theme.palette.common.white}  !important`,
            },
        },
    }),
);

interface IPaginationProps extends PaginationProps {
    rowsPerPage?: number;
    total?: number;
    onRowsPerPageChange?: (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
        page: number,
        rowsPerPage: number,
    ) => void;
}

const PaginationKit: React.FC<IPaginationProps> = (props) => {
    const { rowsPerPage, onRowsPerPageChange, total, ...rest } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Pagination defaultPage={1} color="primary" variant="outlined" {...rest} />
        </div>
    );
};
export default PaginationKit;
