import React, { useEffect, useRef, useState } from "react";
import {
    Theme,
    Box,
    Typography,
    Button,
    CircularProgress,
    FormControl,
    MenuItem,
    SelectChangeEvent,
    InputLabel,
    Select,
    TextField,
    IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import useGetSectionsBasedOnChapters from "../../../../../../hooks/section/useGetSectionsBasedOnChapters";
import useGetBooksBasedOnGradeLevels from "../../../../../../hooks/book/useGetBooksBasedOnGradeLevels";
import useGetSubjectsBasedOnSections from "../../../../../../hooks/subject/useGetSubjectsBasedOnSections";
import useGetGradeLevels from "../../../../../../hooks/grade-level/useGetGradeLevels";
import useGetChaptersBasedOnBooks from "../../../../../../hooks/chapter/useGetChaptersBasedOnBooks";
import useGetObjectiveTests from "../../../../../../hooks/objective-test/useGetObjectiveTests";
import RichTextEditor from "../../../../../../utils/ReactQuill";
import useCreateQuestion from "../../../../../../hooks/question/useCreateQuestion";
import useGetBookReferencesBasedOnGradeLevels from "../../../../../../hooks/book-reference/useGetBookReferencesBasedOnGradeLevels";
import useGetBooksBasedOnBookReferences from "../../../../../../hooks/book/useGetBooksBasedOnBookReferences";
import { DeleteLightSvg, EditLightSvg } from "../../../../../../assets";
import { PrompModalKit } from "../../../../../../components/kit/Modal";
import useGetBookReferencesBasedOnObjectiveTestId from "../../../../../../hooks/question/useGetBookReferencesBasedOnObjectiveTestId";
import useGetQuestionsBasedOnBookReferences from "../../../../../../hooks/question/useGetQuestionsBasedOnBookReference";
import { TableKit } from "../../../../../../components/kit/Table";
import useDeleteQuestions from "../../../../../../hooks/question/useDeleteQuestions";
import useUpdateQuestion from "../../../../../../hooks/question/useUpdateQuestion";

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
const Question = (props: any) => {
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
    const [quillEditorValue, setQuillEditorValue] = useState<any>();
    const [objectiveTestIds, setObjectiveTestIds] = useState<any>([]);
    const [objectiveTestEditIds, setObjectiveTestEditIds] = useState<any>([]);
    const [gradeLevelIds, setGradeLevelIds] = useState<any>([]);
    const [bookIds, setBookIds] = React.useState<any>(gradeLevelIds);
    const [bookReferenceIds, setBookReferenceIds] = React.useState<any>(gradeLevelIds);
    const [bookReferenceEditIds, setBookReferenceEditIds] = React.useState<any>(gradeLevelIds);
    const [number, setNumber] = React.useState<any>();
    const [chapterIds, setChapterIds] = React.useState<any>(bookIds);
    const [sectionIds, setSectionIds] = React.useState<any>(chapterIds);
    const [subjectIds, setSubjectIds] = React.useState<any>(sectionIds);
    const [questionDifficulty, setQuestionDifficulty] = React.useState<any>("easy");
    const [type, settype] = React.useState<any>("conceptional");
    const [correctAnswer, setCorrectAnswer] = React.useState<any>("1");
    const [editors, setEditors] = useState([]);
    const [page, setPage] = useState<number>(0);
    const [id, setId] = useState<number>(0);
    const [limit, _] = useState<number>(5);
    const [pageSize, setPageSize] = useState<number>(0);

    const Quill = ReactQuill.Quill;
    const Font = Quill.import("formats/font");
    Font.whitelist = ["IRANSans", "Ubuntu", "Raleway", "Roboto"];
    Quill.register(Font, true);

    const selectObjectiveTestRef = useRef<any>();
    const selectObjectiveTestEditRef = useRef<any>();
    const selectGradeLevelRef = useRef<any>();
    const selectBookRef = useRef<any>();
    const selectBookReferenceRef = useRef<any>();
    const selectBookReferenceEditRef = useRef<any>();
    const selectChaptertRef = useRef<any>();
    const selectSectionRef = useRef<any>();
    const selectSubjectRef = useRef<any>();
    const inputNumberRef = useRef<any>();

    const getGradeLevels = useGetGradeLevels();
    const getObjectiveTests = useGetObjectiveTests();
    const getBooksBasedOnBookReferences = useGetBooksBasedOnBookReferences(
        bookReferenceIds?.length == 0 ? 0 : bookReferenceIds,
        gradeLevelIds?.length == 0 ? 0 : gradeLevelIds,
    );

    const getBookReferencesBasedOnbObjectiveTest = useGetBookReferencesBasedOnObjectiveTestId(
        objectiveTestEditIds?.length == 0 ? null : objectiveTestEditIds,
    );

    const getQuestionsBasedOnBookReferences = useGetQuestionsBasedOnBookReferences(
        page === 0 ? 1 : page,
        limit,
        bookReferenceEditIds,
    );

    useEffect(() => {
        if (
            !getQuestionsBasedOnBookReferences.isLoading &&
            getQuestionsBasedOnBookReferences?.data?.objectiveTests
        ) {
            setPage(parseInt(getQuestionsBasedOnBookReferences?.data?.currentPage ?? 1));
            setPageSize(getQuestionsBasedOnBookReferences?.data?.totalPages ?? 1);
        }
    }, [getQuestionsBasedOnBookReferences?.data]);

    useEffect(() => {
        if (page > 0) {
            getQuestionsBasedOnBookReferences.refetch();
        }
    }, [page]);

    useEffect(() => {
        if (bookReferenceEditIds.length > 0) {
            getQuestionsBasedOnBookReferences.refetch();
        }
    }, [bookReferenceEditIds]);

    useEffect(() => {
        getBookReferencesBasedOnbObjectiveTest.refetch();
    }, [objectiveTestEditIds]);

    const getBookReferencesBasedOnGradeLevels = useGetBookReferencesBasedOnGradeLevels(
        gradeLevelIds?.length == 0 ? null : gradeLevelIds,
    );
    const getChaptersBasedOnBooks = useGetChaptersBasedOnBooks(
        bookIds?.length == 0 ? null : bookIds,
    );

    const getSectionsBasedOnChapters = useGetSectionsBasedOnChapters(
        chapterIds?.length == 0 ? null : chapterIds,
    );

    const getSubjectsBasedOnSections = useGetSubjectsBasedOnSections(
        sectionIds?.length == 0 ? null : sectionIds,
    );

    const handleGradeLevelChange = (event: SelectChangeEvent) => {
        setGradeLevelIds(event.target.value as any);
        setChapterIds(null);
        setBookIds(null);
        setBookReferenceIds(null);
        setSectionIds(null);
        setSubjectIds(null);
    };
    const handleObjectiveTestChange = (event: SelectChangeEvent) => {
        setObjectiveTestIds(event.target.value as any);
    };

    const handleObjectiveTestEditChange = (event: SelectChangeEvent) => {
        setObjectiveTestEditIds(event.target.value as any);
    };

    const handleBookChange = (event: SelectChangeEvent) => {
        setBookIds(event.target.value as any);
    };

    const handleBookReferenceChange = (event: SelectChangeEvent) => {
        setBookReferenceIds(event.target.value as any);
        setBookIds(null);
    };

    const handleBookReferenceEditChange = (event: SelectChangeEvent) => {
        setBookReferenceEditIds(event.target.value as any);
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
            getBookReferencesBasedOnGradeLevels.refetch();
        }
    }, [gradeLevelIds]);

    useEffect(() => {
        getBooksBasedOnBookReferences.refetch();
    }, [bookReferenceIds, gradeLevelIds]);

    useEffect(() => {
        getChaptersBasedOnBooks.refetch();
    }, [bookIds]);

    useEffect(() => {
        getSectionsBasedOnChapters.refetch();
    }, [chapterIds]);

    useEffect(() => {
        getSubjectsBasedOnSections.refetch();
    }, [sectionIds]);

    useEffect(() => {
        const quill: any = document.querySelector(".ql-editor");
        if (quill) {
            quill.style.textAlign = "right";
        }
    }, [editors]);

    useEffect(() => {
        toast.error(errors["type"]?.message?.toString());
        toast.error(errors["number"]?.message?.toString());
        toast.error(errors["objectiveTests"]?.message?.toString());
        toast.error(errors["correctAnswer"]?.message?.toString());
        clearErrors();
    }, [
        errors["type"]?.message,
        errors["number"]?.message,
        errors["objectiveTests"]?.message,
        errors["correctAnswer"]?.message,
    ]);

    const createQuestion = useCreateQuestion();

    const handleCreateQuestion = async (data: any) => {
        if (
            options.option1 == "" ||
            options.option2 == "" ||
            options.option3 == "" ||
            options.option4 == ""
        ) {
            return toast.error("هر ۴ گزینه باید مقدار داشته باشند");
        }

        if (quillEditorValue == "") {
            return toast.error("حداقل یک سوال باید ایجاد شود");
        }
        data.options = options;
        data.question = quillEditorValue;
        setLoading(true);

        createQuestion.mutate(data, {
            onSuccess: async (result: { message: string; statusCode: number }) => {
                if (result.statusCode == 200) {
                    setLoading(false);
                    setGradeLevelIds(null);
                    setBookIds(null);
                    setChapterIds(null);
                    setSectionIds(null);
                    toast.success(result.message);
                    getQuestionsBasedOnBookReferences.refetch();
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

    const updateQuestion = useUpdateQuestion();

    const handleUpdateQuestion = async (data: any) => {
        if (
            options.option1 == "" ||
            options.option2 == "" ||
            options.option3 == "" ||
            options.option4 == ""
        ) {
            return toast.error("هر ۴ گزینه باید مقدار داشته باشند");
        }

        if (quillEditorValue == "") {
            return toast.error("حداقل یک سوال باید ایجاد شود");
        }
        data.options = options;
        data.question = quillEditorValue;
        setLoading(true);

        data.id = id;
        updateQuestion.mutate(data, {
            onSuccess: async (result: { message: string; statusCode: number }) => {
                if (result.statusCode == 200) {
                    setLoading(false);
                    toast.success(result.message);
                    getQuestionsBasedOnBookReferences.refetch();
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

    const deleteQuestions = useDeleteQuestions();
    const handleDeleteQuestions = (id: string) => {
        deleteQuestions.mutate(id, {
            onSuccess: async (result: { message: string; statusCode: number }) => {
                if (result.statusCode === 200) {
                    setLoading(false);
                    toast(result.message);
                    getQuestionsBasedOnBookReferences.refetch();
                } else {
                    setLoading(false);
                    toast(result.message);
                }
            },
        });
    };

    const [options, setOptions] = useState({
        option1: "",
        option2: "",
        option3: "",
        option4: "",
    });

    const handleEditorChange = (newValue, editorName) => {
        setOptions((prevOptions) => ({
            ...prevOptions,
            [editorName]: newValue,
        }));
    };

    return (
        <Box display={"flex"}>
            <Box className={classes.container}>
                <form
                    onSubmit={
                        id ? handleSubmit(handleUpdateQuestion) : handleSubmit(handleCreateQuestion)
                    }
                >
                    <FormControl className={classes.formField}>
                        <InputLabel id="demo-simple-select-label">انتخاب آزمون</InputLabel>
                        <Select
                            value={objectiveTestIds ?? []}
                            {...register("objectiveTests")}
                            inputRef={selectObjectiveTestRef}
                            onChange={handleObjectiveTestChange}
                            multiple
                        >
                            {!getObjectiveTests?.isLoading &&
                                getObjectiveTests?.data?.map((element: any) => {
                                    return (
                                        <MenuItem key={element?._id} value={element?._id}>
                                            {`${element?.gradeLevel[0]
                                                ?.title} - ${element?.number} - ${
                                                element?.type == "main" ? "اصلی" : "رفع اشکال"
                                            }`}
                                        </MenuItem>
                                    );
                                })}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formField}>
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

                    <FormControl className={classes.formField}>
                        <InputLabel id="demo-simple-select-label">انتخاب کتاب مرجع</InputLabel>
                        <Select
                            value={bookReferenceIds ?? []}
                            {...register("bookReferences")}
                            inputRef={selectBookReferenceRef}
                            onChange={handleBookReferenceChange}
                            multiple
                        >
                            {!getBookReferencesBasedOnGradeLevels?.isLoading &&
                                getBookReferencesBasedOnGradeLevels?.data != undefined &&
                                getBookReferencesBasedOnGradeLevels?.data?.map((element) => {
                                    return (
                                        <MenuItem key={element._id} value={element._id}>
                                            {element.title}
                                        </MenuItem>
                                    );
                                })}
                        </Select>{" "}
                    </FormControl>

                    <FormControl className={classes.formField}>
                        <InputLabel id="demo-simple-select-label">انتخاب کتاب</InputLabel>
                        <Select
                            value={bookIds ?? []}
                            {...register("books")}
                            inputRef={selectBookRef}
                            onChange={handleBookChange}
                            multiple
                        >
                            {!getBooksBasedOnBookReferences?.isLoading &&
                                getBooksBasedOnBookReferences?.data != undefined &&
                                getBooksBasedOnBookReferences?.data?.map((element) => {
                                    return (
                                        <MenuItem key={element._id} value={element._id}>
                                            {element.title}
                                        </MenuItem>
                                    );
                                })}
                        </Select>{" "}
                    </FormControl>
                    <FormControl className={classes.formField}>
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
                    <FormControl className={classes.formField}>
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
                    <FormControl className={classes.formField}>
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
                    <FormControl className={classes.formField}>
                        <InputLabel id="demo-simple-select-label">سختی سوال</InputLabel>
                        <Select
                            value={questionDifficulty}
                            {...register("questionDifficulty", {
                                required: "لطفا سختی سوال را مشخص کنید",
                            })}
                            onChange={(e) => {
                                setQuestionDifficulty(e.target.value);
                                register("questionDifficulty").onChange(e);
                            }}
                        >
                            <MenuItem key={1} value={"easy"}>
                                ساده
                            </MenuItem>
                            <MenuItem key={2} value={"average"}>
                                متوسط
                            </MenuItem>
                            <MenuItem key={3} value={"hard"}>
                                سخت
                            </MenuItem>
                            <MenuItem key={4} value={"challenging"}>
                                چالشی
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formField}>
                        <InputLabel id="demo-simple-select-label">نوع سوال</InputLabel>
                        <Select
                            value={type}
                            {...register("type", {
                                required: "لطفا نوع سوال را مشخص کنید",
                            })}
                            onChange={(e) => {
                                settype(e.target.value);
                                register("type").onChange(e);
                            }}
                        >
                            <MenuItem key={1} value={"conceptional"}>
                                مفهومی
                            </MenuItem>
                            <MenuItem key={2} value={"computational"}>
                                محاسباتی
                            </MenuItem>
                            <MenuItem key={3} value={"trick"}>
                                تله دار
                            </MenuItem>
                            <MenuItem key={4} value={"memorizational"}>
                                حفظی
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formField}>
                        <InputLabel id="demo-simple-select-label">گزیه درست</InputLabel>
                        <Select
                            value={correctAnswer}
                            {...register("correctAnswer", {
                                required: "لطفا گزینه صحیح را مشخص کنید",
                            })}
                            onChange={(e) => {
                                setCorrectAnswer(e.target.value);
                                register("correctAnswer").onChange(e);
                            }}
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
                    <FormControl className={classes.formField}>
                        <TextField
                            value={number}
                            type="text"
                            {...register("number")}
                            onChange={(e) => {
                                setNumber(e.target.value);
                                register("number").onChange(e);
                            }}
                            label="شماره سوال"
                            inputRef={inputNumberRef}
                        />
                    </FormControl>
                    <FormControl className={classes.formField}>
                        <Typography>سوال</Typography>

                        <RichTextEditor
                            value={quillEditorValue}
                            setValue={(newValue) => setQuillEditorValue(newValue)}
                        />
                    </FormControl>
                    <FormControl className={classes.formField}>
                        <Typography>گزینه اول</Typography>
                        <RichTextEditor
                            value={options.option1}
                            setValue={(value) => handleEditorChange(value, "option1")}
                        />
                    </FormControl>
                    <FormControl className={classes.formField}>
                        <Typography>گزینه دوم</Typography>

                        <RichTextEditor
                            value={options.option2}
                            setValue={(value) => handleEditorChange(value, "option2")}
                        />
                    </FormControl>
                    <FormControl className={classes.formField}>
                        <Typography>گزینه سوم</Typography>

                        <RichTextEditor
                            value={options.option3}
                            setValue={(value) => handleEditorChange(value, "option3")}
                        />
                    </FormControl>

                    <FormControl className={classes.formField}>
                        <Typography>گزینه چهارم</Typography>

                        <RichTextEditor
                            value={options.option4}
                            setValue={(value) => handleEditorChange(value, "option4")}
                        />
                    </FormControl>

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.specialField}
                        disabled={loading}
                        type="submit"
                    >
                        {loading ? <CircularProgress size={24} /> : id ? "ویرایش" : "ذخیره"}
                    </Button>
                </form>
            </Box>

            <Box className={classes.objectiveTest}>
                <Typography>لیست آزمون‌های تستی</Typography>
                <FormControl className={classes.formField}>
                    <InputLabel id="demo-simple-select-label">انتخاب آزمون</InputLabel>
                    <Select
                        value={objectiveTestEditIds ?? []}
                        inputRef={selectObjectiveTestEditRef}
                        onChange={handleObjectiveTestEditChange}
                        multiple
                    >
                        {!getObjectiveTests?.isLoading &&
                            getObjectiveTests?.data?.map((element: any) => {
                                return (
                                    <MenuItem key={element?._id} value={element?._id}>
                                        {`${element?.gradeLevel[0]?.title} - ${element?.number} - ${
                                            element?.type == "main" ? "اصلی" : "رفع اشکال"
                                        }`}
                                    </MenuItem>
                                );
                            })}
                    </Select>
                </FormControl>

                <FormControl className={classes.formField}>
                    <InputLabel>انتخاب کتاب مرجع</InputLabel>
                    <Select
                        value={bookReferenceEditIds ?? []}
                        inputRef={selectBookReferenceEditRef}
                        onChange={handleBookReferenceEditChange}
                        multiple
                    >
                        {!getBookReferencesBasedOnbObjectiveTest?.isLoading &&
                            getBookReferencesBasedOnbObjectiveTest?.data != undefined &&
                            getBookReferencesBasedOnbObjectiveTest?.data?.map((element) => {
                                return (
                                    <MenuItem key={element._id} value={element._id}>
                                        {element.title}
                                    </MenuItem>
                                );
                            })}
                    </Select>{" "}
                </FormControl>

                {!getQuestionsBasedOnBookReferences.isLoading &&
                getQuestionsBasedOnBookReferences?.data ? (
                    <TableKit
                        secondary
                        headers={[{ children: `عنوان` }, { children: `عملیات` }]}
                        rows={getQuestionsBasedOnBookReferences?.data?.questions?.map(
                            (item: any, index: any) => {
                                return {
                                    id: item._id,
                                    data: {
                                        title: `${item.number}`,
                                        action: (
                                            <>
                                                <IconButton
                                                    onClick={() => {
                                                        setId(item?._id);
                                                        setObjectiveTestIds(item.objectiveTests);
                                                        setGradeLevelIds(item.gradeLevels);
                                                        setBookReferenceIds(item.bookReferences);
                                                        setBookIds(
                                                            item.books.map((book) => book?._id),
                                                        );

                                                        setChapterIds(item.chapters);
                                                        setSectionIds(item.sections);
                                                        setSubjectIds(item.subjects);
                                                        setQuestionDifficulty(
                                                            item.questionDifficulty,
                                                        );
                                                        settype(item.type);
                                                        setCorrectAnswer(item.correctAnswer);
                                                        setNumber(item.number);

                                                        setQuillEditorValue(item.question);

                                                        handleEditorChange(
                                                            item.options[0].option1,
                                                            "option1",
                                                        );
                                                        handleEditorChange(
                                                            item.options[0].option2,
                                                            "option2",
                                                        );
                                                        handleEditorChange(
                                                            item.options[0].option3,
                                                            "option3",
                                                        );
                                                        handleEditorChange(
                                                            item.options[0].option4,
                                                            "option4",
                                                        );

                                                        setTimeout(() => {
                                                            selectObjectiveTestRef.current.focus();
                                                        }, 50);
                                                        setTimeout(() => {
                                                            selectGradeLevelRef.current.focus();
                                                        }, 100);
                                                        setTimeout(() => {
                                                            selectBookRef.current.focus();
                                                        }, 150);
                                                        setTimeout(() => {
                                                            selectBookReferenceRef.current.focus();
                                                        }, 200);

                                                        setTimeout(() => {
                                                            selectChaptertRef.current.focus();
                                                        }, 200);

                                                        setTimeout(() => {
                                                            selectSectionRef.current.focus();
                                                        }, 250);

                                                        setTimeout(() => {
                                                            selectSubjectRef.current.focus();
                                                        }, 300);

                                                        setTimeout(() => {
                                                            inputNumberRef.current.focus();
                                                        }, 350);
                                                    }}
                                                >
                                                    <EditLightSvg width={12} height={12} />
                                                </IconButton>
                                                <IconButton>
                                                    <PrompModalKit
                                                        description={`آیا از حذف سوال ${item.number}  مطمئن  هستید؟`}
                                                        onConfirm={() => {
                                                            handleDeleteQuestions(item._id);
                                                        }}
                                                        approved={"بله"}
                                                        denied={"خیر"}
                                                    >
                                                        <DeleteLightSvg width={16} height={16} />
                                                    </PrompModalKit>
                                                </IconButton>
                                            </>
                                        ),
                                    },
                                };
                            },
                        )}
                        pagination={{
                            page: page,
                            count: pageSize,
                            rowsPerPage: limit,
                            onChange: (_, e) => {
                                setPage(e);
                            },
                            onRowsPerPageChange: () => {},
                        }}
                    />
                ) : (
                    <div>در حال بارگیری...</div>
                )}
            </Box>
        </Box>
    );
};

export default Question;
