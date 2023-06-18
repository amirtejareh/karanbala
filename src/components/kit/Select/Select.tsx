import { MenuItem, OutlinedInput, SelectProps } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";
import React from "react";
import Select from "@mui/material/Select";

const useStyles = makeStyles(() => ({
    "&.MuiMenu-paper": {
        backgroundColor: "red",
    },
    formControl: {
        marign: 0,
        minWidth: 120,
    },
    select: {
        "&:focus": {
            backgroundColor: "transparent",
        },
    },
}));

const StyledMenu = withStyles(() => ({
    root: {
        fontSize: "1.4rem",
        paddingTop: "1.1rem",
        paddingBottom: "1.1rem",
    },
}))(MenuItem);

export interface SelectKitOptionItemInterface {
    value?: any;
    title?: string;
    code?: any;
}

interface ISelectKitProps extends Omit<SelectProps, "renderValue"> {
    label?: React.ReactNode;
    options: SelectKitOptionItemInterface[];
    name?: string;
}

const SelectKit: React.FC<ISelectKitProps> = (props) => {
    const { label, options, name, ...rest } = props;

    return (
        <>
            <Select
                fullWidth
                size="small"
                displayEmpty
                input={<OutlinedInput />}
                renderValue={(selected: any) => {
                    if (typeof selected === "number" || selected) {
                        return options.find((fid) => fid.value === selected)?.title || label;
                    }
                    return label;
                }}
                // MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
                {...rest}
            >
                <StyledMenu disabled value="">
                    <em>انتخاب کنید...</em>
                </StyledMenu>
                {options.map((item, index) => (
                    <StyledMenu key={index} value={item.value}>
                        {item.title}
                    </StyledMenu>
                ))}
            </Select>
        </>
    );
};

export default SelectKit;
