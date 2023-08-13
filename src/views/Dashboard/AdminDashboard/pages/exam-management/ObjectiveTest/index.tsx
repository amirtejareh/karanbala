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
const ObjectiveTest = (props: any) => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    const {
        handleSubmit,
        register,
        clearErrors,
        unregister,
        control,
        formState: { errors },
    } = useForm();

    const selectGradeLevelRef = useRef<any>();

    const [loading, setLoading] = useState(false);

    const durationRef = useRef<any>(null);

    const [number, setNumber] = React.useState<any>(1);

    const createObjectiveTest = useCreateObjectiveTest();

    const [value, setValue] = useState<any>(new Date());
    const [type, setType] = useState<string>("main");

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
                            </ul>
                        );
                    } else {
                        toast.error(
                            <ul>
                                <li key={result.message}>{result.message}</li>
                            </ul>
                        );
                    }
                }
            },
            onError: async (e: any) => {
                toast.error(e.message);
            },
        });
    };
    const [gradeLevelId, setGradeLevelId] = React.useState<any>();
    const getGradeLevels = useGetGradeLevels();
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    const handleGradeLevelChange = (event: SelectChangeEvent) => {
        setGradeLevelId(event.target.value as any);
    };

    useEffect(() => {
        if (durationRef && durationRef.current) {
            if (type === "main") {
                durationRef.current.style.display = "none";
            } else {
                durationRef.current.style.display = "block";
            }
        }
    }, [type]);

    useEffect(() => {
        toast.error(errors["gradeLevel"]?.message?.toString());
        toast.error(errors["number"]?.message?.toString());
        toast.error(errors["type"]?.message?.toString());
        toast.error(errors["duration"]?.message?.toString());
        clearErrors();
    }, [
        errors["type"]?.message,
        errors["number"]?.message,
        errors["gradeLevel"]?.message,
        errors["duration"]?.message,
    ]);

    return (
        <Box display={"flex"}>
            <Box className={classes.container}>
                <form onSubmit={handleSubmit(handleCreateObjectiveTest)}>
                    <FormControl className={classes.formField} fullWidth>
                        <InputLabel id="demo-simple-select-label">انتخاب پایه</InputLabel>
                        <Select
                            value={gradeLevelId ?? ""}
                            {...register("gradeLevel", {
                                required: "انتخاب پایه اجباری است",
                            })}
                            inputRef={selectGradeLevelRef}
                            onChange={handleGradeLevelChange}
                        >
                            {!getGradeLevels?.isLoading &&
                                getGradeLevels?.data.map((element: any) => {
                                    return (
                                        <MenuItem key={element._id} value={element._id}>
                                            {element.title}
                                        </MenuItem>
                                    );
                                })}
                        </Select>
                    </FormControl>

                    <TextField
                        {...register("number", {
                            required: "لطفا شماره آزمون را وارد کنید",
                        })}
                        className={classes.formField}
                        variant="outlined"
                        label="لطفا شماره آزمون را وارد کنید"
                    />

                    <FormControl className={classes.formField}>
                        <InputLabel id="demo-simple-select-label">نوع آزمون</InputLabel>
                        <Select
                            {...register("type", {
                                required: "لطفا نوع آزمون را مشخص کنید",
                            })}
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <MenuItem key={1} value={"main"}>
                                آزمون اصلی
                            </MenuItem>
                            <MenuItem key={2} value={"remedial"}>
                                آزمون رفع اشکال
                            </MenuItem>
                        </Select>
                    </FormControl>

                    {type === "remedial" && (
                        <TextField
                            type="number"
                            className={`${classes.formField} ${classes.durationField}`}
                            variant="outlined"
                            label="لطفا مدت زمان آزمون را به دقیقه مشخص کنید"
                            {...register("duration", {
                                required: "مدت زمان آزمون را مشخص کنید",
                            })}
                            ref={(e) => {
                                register("duration").ref(e);
                                durationRef.current = e;
                            }}
                        />
                    )}
                    <Box className={classes.specialField}>
                        <Controller
                            name="start"
                            control={control}
                            render={({ field: { onChange, ...restField } }) => (
                                <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                                    <DateTimePicker
                                        label="تاریخ شروع آزمون"
                                        value={selectedStartDate}
                                        onChange={(e) => {
                                            onChange(e);
                                            setSelectedStartDate(e);
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
                                        value={selectedEndDate}
                                        onChange={(e) => {
                                            onChange(e);
                                            setSelectedEndDate(e);
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
