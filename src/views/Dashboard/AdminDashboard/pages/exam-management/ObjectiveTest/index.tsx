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
import useGetBooksBasedOnGradeLevels from "../../../../../../hooks/book/useGetBooksBasedOnGradeLevels";
import useGetChaptersBasedOnBooks from "../../../../../../hooks/chapter/useGetChaptersBasedOnBooks";
import useGetSectionsBasedOnChapters from "../../../../../../hooks/section/useGetSectionsBasedOnChapters";
import useGetSubjectsBasedOnSections from "../../../../../../hooks/subject/useGetSubjectsBasedOnSections";
import { toast } from "react-toastify";
import useCreateObjectiveTest from "../../../../../../hooks/objective-test/useCreateObjectiveTest";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import RichTextEditor from "../../../../../../utils/ReactQuill";
import { CalendarDarkSvg, DeleteLightSvg, PlusIconSvg } from "../../../../../../assets";
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
    objectiveTest: {
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
    editorField: {
        margin: "2rem 0",
    },
    specialField: {
        margin: "1rem",
    },
}));
const ObjectiveTest = (props: any) => {
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

    const [loading, setLoading] = useState(false);

    const [number, setnumber] = React.useState<any>();
    const [duration, setDuration] = React.useState<any>();

    const createObjectiveTest = useCreateObjectiveTest();

    const [value, setValue] = useState<any>(new Date());
    const [type, setType] = useState<any>();

    const handleCreateObjectiveTest = async (data: any) => {
        setLoading(true);
        createObjectiveTest.mutate(data, {
            onSuccess: async (result: { message: string; statusCode: number }) => {
                if (result.statusCode == 200) {
                    setLoading(false);

                    toast.success(result.message);
                } else {
                    setLoading(false);
                    if (Array.isArray(result.message)) {
                        toast.error(
                            <ul>
                                {result.message.map((msg: string) => (
                                    <li key={msg}>{msg}</li>
                                ))}
                            </ul>,
                        );
                    } else {
                        toast.error(
                            <ul>
                                <li key={result.message}>{result.message}</li>
                            </ul>,
                        );
                    }
                }
            },
            onError: async (e: any) => {
                toast.error(e.message);
            },
        });
    };

    const [selectedStartDate, setselectedStartDate] = useState(null);
    const [selectedEndDate, setselectedEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setselectedStartDate(date);
    };
    const handleEndDateChange = (date) => {
        setselectedEndDate(date);
    };

    useEffect(() => {
        toast.error(errors["type"]?.message?.toString());
        toast.error(errors["number"]?.message?.toString());
        clearErrors();
    }, [errors["type"]?.message, errors["number"]?.message]);

    return (
        <Box display={"flex"}>
            <Box className={classes.container}>
                <form onSubmit={handleSubmit(handleCreateObjectiveTest)}>
                    <TextField
                        {...register("number", {
                            required: "لطفا شماره آزمون را وارد کنید",
                        })}
                        value={number}
                        className={classes.formField}
                        onChange={() => setnumber(number)}
                        variant="outlined"
                        label="لطفا شماره آزمون را وارد کنید"
                    />
                    <TextField
                        {...register("duration", {
                            required: "لطفا مدت زمان آزمون را مشخص کنید",
                        })}
                        type="number"
                        value={duration}
                        className={classes.formField}
                        onChange={() => setDuration(duration)}
                        variant="outlined"
                        label="لطفا مدت زمان آزمون را مشخص کنید"
                    />
                    <FormControl className={classes.formField}>
                        <InputLabel id="demo-simple-select-label">نوع آزمون</InputLabel>
                        <Select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            {...register("type", {
                                required: "لطفا نوع آزمون را مشخص کنید",
                            })}
                        >
                            <MenuItem key={1} value={"main"}>
                                آزمون اصلی
                            </MenuItem>
                            <MenuItem key={2} value={"remedial"}>
                                آزمون رفع اشکال
                            </MenuItem>
                        </Select>
                    </FormControl>

                    <Box className={classes.specialField}>
                        <Controller
                            name="start"
                            defaultValue={value}
                            control={control}
                            render={({ field: { onChange, ...restField } }) => (
                                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                                    <DateTimePicker
                                        label="تاریخ شروع آزمون"
                                        value={selectedStartDate}
                                        onChange={handleStartDateChange}
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
                            defaultValue={value}
                            control={control}
                            render={({ field: { onChange, ...restField } }) => (
                                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                                    <DateTimePicker
                                        label="تاریخ اتمام آزمون"
                                        value={selectedEndDate}
                                        onChange={handleEndDateChange}
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
                        disabled={loading}
                        type="submit"
                    >
                        {loading ? <CircularProgress size={24} /> : "ذخیره"}
                    </Button>
                </form>
            </Box>

            <Box className={classes.objectiveTest}>
                <Typography>لیست آزمون‌های تستی</Typography>
            </Box>
        </Box>
    );
};

export default ObjectiveTest;
