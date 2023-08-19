import React, { useEffect, useRef, useState } from "react";
import {
    Theme,
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    Button,
    CircularProgress,
    MenuItem,
    SelectChangeEvent,
    TextField,
    IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Controller, useForm } from "react-hook-form";
import useGetGradeLevels from "../../../../../../hooks/grade-level/useGetGradeLevels";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import { CalendarDarkSvg } from "../../../../../../assets";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        maxWidth: "600px",
    },
    ObjectiveTestManagement: {
        margin: "0 50px",
    },
    formContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        margin: "1rem",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "5px",
        boxShadow: `0px 1px 2px ${theme.palette.primary.main}`,
    },
    formTitle: {
        marginBottom: "2rem",
        fontSize: "2rem",
        fontWeight: "bold",
        color: theme.palette.primary.main,
    },
    formField: {
        margin: "1rem",
        width: "100%",
    },
    durationField: {
        margin: "1rem",
        width: "100%",
        display: "none",
    },
    editorField: {
        margin: "2rem 0",
    },
    specialField: {
        margin: "1rem",
    },
}));
const ObjectiveTestManagement = (props: any) => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const {
        handleSubmit,
        register,
        clearErrors,
        control,
        formState: { errors },
    } = useForm();

    return (
        <Box display={"flex"}>
            <Box className={classes.container}>
                <form>
                    <FormControl className={classes.formField} fullWidth>
                        <InputLabel id="demo-simple-select-label">انتخاب آزمون</InputLabel>
                        <Select></Select>
                    </FormControl>

                    <FormControl className={classes.formField} fullWidth>
                        <InputLabel id="demo-simple-select-label">انتخاب کتاب</InputLabel>
                        <Select></Select>
                    </FormControl>

                    <Box className={classes.specialField}>
                        <Controller
                            name="start"
                            control={control}
                            render={({ field: { onChange, ...restField } }) => (
                                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                                    <DateTimePicker
                                        label="تاریخ شروع آزمون"
                                        onChange={(e) => {
                                            onChange(e);
                                        }}
                                        components={{
                                            OpenPickerIcon: CalendarDarkSvg,
                                        }}
                                    />
                                </LocalizationProvider>
                            )}
                        />
                    </Box>

                    <Box className={classes.specialField}>
                        <Controller
                            name="end"
                            control={control}
                            render={({ field: { onChange, ...restField } }) => (
                                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                                    <DateTimePicker
                                        label="تاریخ اتمام آزمون"
                                        onChange={(e) => {
                                            onChange(e);
                                        }}
                                        components={{
                                            OpenPickerIcon: CalendarDarkSvg,
                                        }}
                                    />
                                </LocalizationProvider>
                            )}
                        />
                    </Box>

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.specialField}
                        type="submit"
                    >
                        {"ذخیره"}
                    </Button>
                </form>
            </Box>

            <Box className={classes.ObjectiveTestManagement}>
                <Typography>لیست آزمون‌های تستی</Typography>
            </Box>
        </Box>
    );
};

export default ObjectiveTestManagement;
