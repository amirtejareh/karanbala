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
import useGetMainObjectiveTests from "../../../../../../hooks/objective-test/useGetMainObjectiveTests";
import useGetBooksBasedOnObjectiveTestId from "../../../../../../hooks/question/useGetBooksBasedOnObjectiveTestId";
import useCreateObjectiveTestManagement from "../../../../../../hooks/objective-test-management/useCreateObjectiveTestManagement";

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

    const [objectiveTestId, setObjectiveTestId] = React.useState<any>();
    const selectObjectiveTestRef = useRef<any>();
    const [loading, setLoading] = useState(false);

    const [bookId, setBookId] = React.useState<any>();
    const selectBookRef = useRef<any>();

    const handleObjectiveTestChange = (event: SelectChangeEvent) => {
        setObjectiveTestId(event.target.value as any);
    };

    const handleBookChange = (event: SelectChangeEvent) => {
        setBookId(event.target.value as any);
    };

    const getMainObjectiveTests = useGetMainObjectiveTests();

    const getBooksBasedOnObjectiveTestId = useGetBooksBasedOnObjectiveTestId(objectiveTestId);
    const createObjectiveTestManagement = useCreateObjectiveTestManagement();
    useEffect(() => {
        getBooksBasedOnObjectiveTestId.refetch();
    }, [objectiveTestId]);

    const handleCreateObjectiveTestManagement = async (data: any) => {
        setLoading(true);
        createObjectiveTestManagement.mutate(data, {
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
    return (
        <Box display={"flex"}>
            <Box className={classes.container}>
                <form onSubmit={handleSubmit(handleCreateObjectiveTestManagement)}>
                    <FormControl className={classes.formField} fullWidth>
                        <InputLabel id="demo-simple-select-label">انتخاب آزمون</InputLabel>
                        <Select
                            value={objectiveTestId ?? ""}
                            {...register("objectiveTest", {
                                required: "انتخاب آزمون اجباری است",
                            })}
                            inputRef={selectObjectiveTestRef}
                            onChange={handleObjectiveTestChange}
                        >
                            {!getMainObjectiveTests?.isLoading &&
                                getMainObjectiveTests?.data.map((element: any) => {
                                    return (
                                        <MenuItem key={element._id} value={element._id}>
                                            {element.number}
                                        </MenuItem>
                                    );
                                })}
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formField} fullWidth>
                        <InputLabel id="demo-simple-select-label">انتخاب کتاب</InputLabel>
                        <Select
                            value={bookId ?? ""}
                            {...register("books", {
                                required: "انتخاب کتاب اجباری است",
                            })}
                            inputRef={selectBookRef}
                            onChange={handleBookChange}
                        >
                            {!getBooksBasedOnObjectiveTestId?.isLoading &&
                                getBooksBasedOnObjectiveTestId?.data.map((book: any) => {
                                    return (
                                        <MenuItem key={book._id} value={book._id}>
                                            {book.title}
                                        </MenuItem>
                                    );
                                })}
                        </Select>{" "}
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
