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
                color: theme.palette.background.paper,
                boxShadow:
                    "0 14px 26px -12px rgb(103 28 201 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(103 28 201 / 20%)",
            },
        },
    })
);

interface IPaginationProps extends PaginationProps {
    rowsPerPage?: number;
    total?: number;
    onRowsPerPageChange?: (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
        page: number,
        rowsPerPage: number
    ) => void;
}

const PaginationKit: React.FC<IPaginationProps> = (props) => {
    const { rowsPerPage, onRowsPerPageChange, total, ...rest } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination
                defaultPage={1}
                color="primary"
                variant="outlined"
                // showFirstButton
                // showLastButton
                {...rest}
            />
            {/* <Box maxWidth={80} mr={'auto'} clone>
				<InputKit
					id={'select-rows-per-page'}
					value={typeof rowsPerPage === 'string' ? +rowsPerPage : rowsPerPage}
					onChange={(e) => {
						onRowsPerPageChange && onRowsPerPageChange(e, rest?.page || 0, parseInt(e.target.value));
					}}
					label={'تعداد نمایش'}
					size={'small'}
					select
				>
					{findedRows === 0 && (
						<MenuItem
							key={typeof rowsPerPage === 'string' ? +rowsPerPage : rowsPerPage}
							value={typeof rowsPerPage === 'string' ? +rowsPerPage : rowsPerPage}
						>
							{rowsPerPage}
						</MenuItem>
					)}
					{rowsPerPageList.map((item) => (
						<MenuItem key={item} value={typeof item === 'string' ? +item : item}>
							{item}
						</MenuItem>
					))}
				</InputKit>
			</Box> */}
        </div>
    );
};
export default PaginationKit;
