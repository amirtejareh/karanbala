import { InputLabel, MenuItem, OutlinedInput, SelectProps } from "@mui/material";
import { withStyles } from "@mui/styles";
import React from "react";
import Select from "@mui/material/Select";

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
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>

            <Select
                labelId="demo-simple-select-label"
                fullWidth
                size="small"
                input={<OutlinedInput />}
                renderValue={(selected: any) => {
                    if (typeof selected === "number" || selected) {
                        return options.find((fid) => fid.value === selected)?.title || label;
                    }
                    return label;
                }}
            >
                <StyledMenu disabled value="">
                    <em>انتخاب کنید...</em>
                </StyledMenu>
                {options.map((item, index) => {
                    return (
                        <StyledMenu key={index} value={item.value}>
                            {item.title}
                        </StyledMenu>
                    );
                })}
            </Select>
        </>
    );
};

export default SelectKit;
