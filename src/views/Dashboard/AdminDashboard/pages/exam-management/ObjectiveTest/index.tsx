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
    const [gradeLevelIds, setGradeLevelIds] = useState<any>([]);
    const [bookIds, setBookIds] = React.useState<any>(gradeLevelIds);
    const [chapterIds, setChapterIds] = React.useState<any>(bookIds);
    const [sectionIds, setSectionIds] = React.useState<any>(chapterIds);
    const [subjectIds, setSubjectIds] = React.useState<any>(sectionIds);
    const [questionDifficulty, setQuestionDifficulty] = React.useState<any>();
    const [questionType, setQuestionType] = React.useState<any>();
    const [examType, setExamType] = React.useState<any>();
    const [examNumber, setExamNumber] = React.useState<any>();
    const [correctAnswer, setCorrectAnswer] = React.useState<any>();
    const [editors, setEditors] = useState([]);
    const [value, setValue] = useState<any>(new Date());

    const Quill = ReactQuill.Quill;
    const Font = Quill.import("formats/font");
    Font.whitelist = ["IRANSans", "Ubuntu", "Raleway", "Roboto"];
    Quill.register(Font, true);

    const selectGradeLevelRef = useRef<any>();
    const selectBookRef = useRef<any>();
    const selectChaptertRef = useRef<any>();
    const selectSectionRef = useRef<any>();
    const selectSubjectRef = useRef<any>();

    const getGradeLevels = useGetGradeLevels();
    const getBooksBasedOnGradeLevels = useGetBooksBasedOnGradeLevels(
        gradeLevelIds?.length == 0 ? null : gradeLevelIds
    );
    const getChaptersBasedOnBooks = useGetChaptersBasedOnBooks(
        bookIds?.length == 0 ? null : bookIds
    );

    const getSectionsBasedOnChapters = useGetSectionsBasedOnChapters(
        chapterIds?.length == 0 ? null : chapterIds
    );

    const getSubjectsBasedOnSections = useGetSubjectsBasedOnSections(
        sectionIds?.length == 0 ? null : sectionIds
    );

    const handleGradeLevelChange = (event: SelectChangeEvent) => {
        setGradeLevelIds(event.target.value as any);
        setChapterIds(null);
        setBookIds(null);
        setSectionIds(null);
        setSubjectIds(null);
    };

    const handleBookChange = (event: SelectChangeEvent) => {
        setBookIds(event.target.value as any);
    };

    const handleChapterChange = (event: SelectChangeEvent) => {
        setChapterIds(event.target.value as any);
    };

    const handleSectionChange = (event: SelectChangeEvent) => {
        setSectionIds(event.target.value as any);
    };

    const handleSubjectChange = (event: SelectChangeEvent) => {
        setSubjectIds(event.target.value as any);
    };

    useEffect(() => {
        if (gradeLevelIds) {
            getBooksBasedOnGradeLevels.refetch();
        }
    }, [gradeLevelIds]);

    useEffect(() => {
        getChaptersBasedOnBooks.refetch();
    }, [bookIds]);

    useEffect(() => {
        getSectionsBasedOnChapters.refetch();
    }, [chapterIds]);

    useEffect(() => {
        getSubjectsBasedOnSections.refetch();
    }, [sectionIds]);

    const createObjectiveTest = useCreateObjectiveTest();

    const handleCreateObjectiveTest = async (data: any) => {
        if (editors.length == 0) {
            return toast.error("شما حداقل باید یک سوال ایجاد کنید");
        }
        setLoading(true);

        data.question = editors;

        createObjectiveTest.mutate(data, {
            onSuccess: async (result: { message: string; statusCode: number }) => {
                if (result.statusCode == 200) {
                    setLoading(false);
                    setGradeLevelIds(null);
                    setBookIds(null);
                    setChapterIds(null);
                    setSectionIds(null);
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

    useEffect(() => {
        const quill: any = document.querySelector(".ql-editor");
        if (quill) {
            quill.style.textAlign = "right";
        }
    }, [editors]);

    useEffect(() => {
        toast.error(errors["questionType"]?.message?.toString());
        toast.error(errors["questionNumber"]?.message?.toString());
        toast.error(errors["examType"]?.message?.toString());
        toast.error(errors["examNumber"]?.message?.toString());
        toast.error(errors["correctAnswer"]?.message?.toString());
        clearErrors();
    }, [
        errors["questionType"]?.message,
        errors["questionNumber"]?.message,
        errors["examType"]?.message,
        errors["examNumber"]?.message,
        errors["correctAnswer"]?.message,
    ]);

    const handleAddEditor = () => {
        setEditors([...editors, { content: "", number: "", id: editors.length }]);
    };

    const handleQuillEditorValueChange = (index, newValue) => {
        setEditors((prevEditors) =>
            prevEditors.map((editor, idx) =>
                idx === index ? { ...editor, content: newValue } : editor
            )
        );
    };

    const handleTextValueChange = (index, newValue) => {
        setEditors((prevEditors) =>
            prevEditors.map((editor, idx) =>
                idx === index ? { ...editor, number: newValue } : editor
            )
        );
    };

    const [selectedStartDate, setselectedStartDate] = useState(null);
    const [selectedEndDate, setselectedEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setselectedStartDate(date);
    };
    const handleEndDateChange = (date) => {
        setselectedEndDate(date);
    };

    const CustomTextField = (props) => <TextField {...props} />;

    return (
        <Box display={"flex"}>
            <Box className={classes.container}>
                <form onSubmit={handleSubmit(handleCreateObjectiveTest)}>
                    <FormControl className={classes.formField} fullWidth>
                        <InputLabel id="demo-simple-select-label">انتخاب پایه</InputLabel>
                        <Select
                            value={gradeLevelIds ?? []}
                            {...register("gradeLevels")}
                            inputRef={selectGradeLevelRef}
                            onChange={handleGradeLevelChange}
                            multiple
                        >
                            {!getGradeLevels?.isLoading &&
                                getGradeLevels?.data?.map((element: any) => {
                                    return (
                                        <MenuItem key={element._id} value={element._id}>
                                            {element.title}
                                        </MenuItem>
                                    );
                                })}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formField} fullWidth>
                        <InputLabel id="demo-simple-select-label">انتخاب کتاب</InputLabel>
                        <Select
                            value={bookIds ?? []}
                            {...register("books")}
                            inputRef={selectBookRef}
                            onChange={handleBookChange}
                            multiple
                        >
                            {!getBooksBasedOnGradeLevels?.isLoading &&
                                getBooksBasedOnGradeLevels?.data != undefined &&
                                getBooksBasedOnGradeLevels?.data?.map((element) => {
                                    return (
                                        <MenuItem key={element._id} value={element._id}>
                                            {element.title}
                                        </MenuItem>
                                    );
                                })}
                        </Select>{" "}
                    </FormControl>
                    <FormControl className={classes.formField} fullWidth>
                        <InputLabel id="demo-simple-select-label">انتخاب فصل</InputLabel>
                        <Select
                            value={chapterIds ?? []}
                            {...register("chapters")}
                            inputRef={selectChaptertRef}
                            onChange={handleChapterChange}
                            multiple
                        >
                            {!getChaptersBasedOnBooks?.isLoading &&
                                getChaptersBasedOnBooks?.data != undefined &&
                                getChaptersBasedOnBooks?.data?.map((element) => {
                                    return (
                                        <MenuItem key={element._id} value={element._id}>
                                            {element.title}
                                        </MenuItem>
                                    );
                                })}
                        </Select>{" "}
                    </FormControl>
                    <FormControl className={classes.formField} fullWidth>
                        <InputLabel id="demo-simple-select-label">انتخاب بخش</InputLabel>
                        <Select
                            value={sectionIds ?? []}
                            {...register("sections")}
                            inputRef={selectSectionRef}
                            onChange={handleSectionChange}
                            multiple
                        >
                            {!getSectionsBasedOnChapters?.isLoading &&
                                getSectionsBasedOnChapters?.data != undefined &&
                                getSectionsBasedOnChapters?.data?.map((element) => {
                                    return (
                                        <MenuItem key={element._id} value={element._id}>
                                            {element.title}
                                        </MenuItem>
                                    );
                                })}
                        </Select>{" "}
                    </FormControl>
                    <FormControl className={classes.formField} fullWidth>
                        <InputLabel id="demo-simple-select-label">انتخاب موضوع</InputLabel>
                        <Select
                            value={subjectIds ?? []}
                            {...register("subjects")}
                            inputRef={selectSubjectRef}
                            onChange={handleSubjectChange}
                            multiple
                        >
                            {!getSubjectsBasedOnSections?.isLoading &&
                                getSubjectsBasedOnSections?.data != undefined &&
                                getSubjectsBasedOnSections?.data?.map((element) => {
                                    return (
                                        <MenuItem key={element._id} value={element._id}>
                                            {element.title}
                                        </MenuItem>
                                    );
                                })}
                        </Select>{" "}
                    </FormControl>
                    <FormControl className={classes.formField} fullWidth>
                        <InputLabel id="demo-simple-select-label">سختی سوال</InputLabel>
                        <Select
                            value={questionDifficulty}
                            onChange={(e) => setQuestionDifficulty(e.target.value)}
                            {...register("questionDifficulty", {
                                required: "لطفا سختی آزمون را مشخص کنید",
                            })}
                        >
                            <MenuItem key={1} value={"easy"}>
                                ساده
                            </MenuItem>
                            <MenuItem key={1} value={"average"}>
                                متوسط
                            </MenuItem>
                            <MenuItem key={1} value={"hard"}>
                                دشوار
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formField} fullWidth>
                        <InputLabel id="demo-simple-select-label">نوع سوال</InputLabel>
                        <Select
                            value={questionType}
                            onChange={(e) => setQuestionType(e.target.value)}
                            {...register("questionType", {
                                required: "لطفا نوع آزمون را مشخص کنید",
                            })}
                        >
                            <MenuItem key={1} value={"conceptional"}>
                                مفهومی
                            </MenuItem>
                            <MenuItem key={2} value={"computational"}>
                                محاسباتی
                            </MenuItem>
                            <MenuItem key={3} value={"trick"}>
                                دام دار
                            </MenuItem>
                            <MenuItem key={4} value={"memorizational"}>
                                حفظی
                            </MenuItem>
                            <MenuItem key={4} value={"challenging"}>
                                چالشی
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formField} fullWidth>
                        <InputLabel id="demo-simple-select-label">گزیه درست</InputLabel>
                        <Select
                            value={correctAnswer}
                            onChange={(e) => setCorrectAnswer(e.target.value)}
                            {...register("correctAnswer", {
                                required: "لطفا گزینه صحیح را مشخص کنید",
                            })}
                        >
                            <MenuItem key={1} value={1}>
                                1
                            </MenuItem>
                            <MenuItem key={2} value={2}>
                                2
                            </MenuItem>
                            <MenuItem key={3} value={3}>
                                3
                            </MenuItem>
                            <MenuItem key={4} value={4}>
                                4
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formField} fullWidth>
                        <InputLabel id="demo-simple-select-label">ذخیره سوال در</InputLabel>
                        <Select
                            value={examType}
                            onChange={(e) => setExamType(e.target.value)}
                            {...register("examType", {
                                required: "لطفا محل ذخیره آزمون را مشخص کنید",
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
                    <TextField
                        {...register("examNumber", {
                            required: "لطفا شماره آزمون را وارد کنید",
                        })}
                        value={examNumber}
                        className={classes.formField}
                        onChange={() => setExamNumber(Number(examNumber))}
                        variant="outlined"
                        label="لطفا شماره آزمون را وارد کنید"
                        {...register("examNumber")}
                    />

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
                    <Box className={classes.specialField}>
                        <Button variant="outlined" onClick={handleAddEditor}>
                            <Box className={classes.specialField}>
                                <PlusIconSvg />
                            </Box>
                            <Typography> ایجاد سوال</Typography>
                        </Button>
                    </Box>
                    {editors.map((editor, index) => (
                        <Box
                            gap={"10px"}
                            display={"flex"}
                            justifyContent={"space-around"}
                            key={editor.id}
                            className={classes.specialField}
                            flexWrap={"wrap"}
                        >
                            <Box flexBasis={"75%"}>
                                <RichTextEditor
                                    value={editor.content}
                                    setValue={(newValue) =>
                                        handleQuillEditorValueChange(index, newValue)
                                    }
                                />
                            </Box>
                            <Box flexBasis={"15%"}>
                                <TextField
                                    type="text"
                                    value={editor.number}
                                    onChange={(e) => handleTextValueChange(index, e.target.value)}
                                    label="شماره سوال"
                                />
                            </Box>
                            <IconButton
                                sx={{
                                    backgroundColor: "#FCF0FF",
                                    width: 28,
                                    height: 28,
                                    borderRadius: "8px",
                                    p: 0.5,
                                }}
                                onClick={() => {}}
                            >
                                <DeleteLightSvg width={12} height={12} />
                            </IconButton>
                        </Box>
                    ))}
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
