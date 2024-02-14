import React, { useEffect, useRef, useState } from "react";
import {
    Theme,
    Box,
    TextField,
    Button,
    CircularProgress,
    Typography,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useGetBooksBasedOnGradeLevels from "../../../../../../hooks/book/useGetBooksBasedOnGradeLevels";
import useGetChaptersBasedOnBooks from "../../../../../../hooks/chapter/useGetChaptersBasedOnBooks";
import useGetGradeLevels from "../../../../../../hooks/grade-level/useGetGradeLevels";
import { TableKit } from "../../../../../../components/kit/Table";
import { DeleteLightSvg, EditLightSvg } from "../../../../../../assets";
import { PrompModalKit } from "../../../../../../components/kit/Modal";
import useGetSectionsBasedOnChapters from "../../../../../../hooks/section/useGetSectionsBasedOnChapters";
import { bytesToKilobytes } from "../../../../../../utils/helper";
import { IVideo } from "../../../../../../interface/IEntity";
import useCreateAttach from "../../../../../../hooks/attach/useCreateAttach";
import useDeleteAttach from "../../../../../../hooks/attach/useDeleteAttach";
import useUpdateAttach from "../../../../../../hooks/attach/useUpdateAttach";
import useGetAttachBasedOnChapters from "../../../../../../hooks/attach/useGetAttachBasedOnChapters";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: "flex",
        gap: "10px",
        justifyContent: "space-around",
    },
    fieldOfStudy: {
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
    formButton: {
        margin: "1rem",
        width: "100%",
    },
}));

const Attach = () => {
    const classes = useStyles();

    const selectGradeLevelRef = useRef<any>();
    const selectBookRef = useRef<any>();
    const selectChaptertRef = useRef<any>();
    const selectTypeRef = useRef<any>();
    const imageRef = useRef<any>();

    const {
        handleSubmit,
        register,
        clearErrors,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState<number>(1);
    const [pageSize] = useState<number>(10);
    const [value, setValue] = useState({ doUpdate: false, data: "", id: null });

    const [gradeLevelIds, setGradeLevelIds] = useState<any>([]);
    const [bookIds, setBookIds] = useState<any>(gradeLevelIds);
    const [chapterIds, setChapterIds] = React.useState<any>(bookIds);
    const [typeIds, setTypeIds] = React.useState<any>("");

    const [videoTitle, setVideoTitle] = useState<string>("");
    const [videoLink, setVideoLink] = useState<string>("");
    const [videoList, setVideoList] = useState<any[]>([]);
    const [videoEditItemIndex, setVideoEditItemIndex] = useState<number>(-1);
    const [selectedFile, setSelectedFile] = useState<any[]>([]);

    const getGradeLevels = useGetGradeLevels();
    const createAttach = useCreateAttach();
    const deleteAttach = useDeleteAttach();
    const updateAttach = useUpdateAttach();

    const onSelectFile = (e: any) => {
        if (!imageRef.current.files || imageRef.current.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }

        const newFiles = Array.from(e.target.files);
        setSelectedFile([...selectedFile, ...newFiles]);
    };

    const handleRemoveFile = (fileToRemove) => {
        const updatedFiles = selectedFile.filter((file) => file !== fileToRemove);
        setSelectedFile(updatedFiles);
    };

    const handleDeleteAttach = (id: string) => {
        deleteAttach.mutate(id, {
            onSuccess: async (result: {
                message: string;
                statusCode: number;
                access_token: string;
            }) => {
                if (result.statusCode == 200) {
                    setLoading(false);
                    attachBasedOnChapters.refetch();
                    toast.success(result.message);
                } else {
                    setLoading(false);
                    toast.error(result.message);
                }
            },
        });
    };

    const attachBasedOnChapters = useGetAttachBasedOnChapters(
        chapterIds?.length == 0 ? [null] : [chapterIds],
    );

    const getBooksBasedOnGradeLevels = useGetBooksBasedOnGradeLevels(
        gradeLevelIds?.length == 0 ? null : gradeLevelIds,
    );

    const getChaptersBasedOnBooks = useGetChaptersBasedOnBooks(
        bookIds?.length == 0 ? null : bookIds,
    );

    const getSectionsBasedOnChapters = useGetSectionsBasedOnChapters(
        chapterIds?.length == 0 ? null : chapterIds,
    );

    useEffect(() => {
        if (gradeLevelIds) {
            getBooksBasedOnGradeLevels.refetch();
        }
    }, [gradeLevelIds]);

    useEffect(() => {
        if (bookIds) getChaptersBasedOnBooks.refetch();
    }, [bookIds]);

    useEffect(() => {
        if (chapterIds) attachBasedOnChapters.refetch();
    }, [chapterIds]);

    useEffect(() => {
        toast.error(errors["books"]?.message?.toString());
        toast.error(errors["title"]?.message?.toString());
        toast.error(errors["gradeLevels"]?.message?.toString());
        clearErrors();
    }, [errors["books"]?.message, errors["title"]?.message, errors["gradeLevels"]?.message]);

    const handleGradeLevelChange = (event: SelectChangeEvent) => {
        setGradeLevelIds(event.target.value as any);
        setBookIds(null);
        setChapterIds(null);
    };

    const handleBookChange = (event: SelectChangeEvent) => {
        setBookIds(event.target.value as any);
        setChapterIds(null);
    };

    const handleChapterChange = (event: SelectChangeEvent) => {
        setChapterIds(event.target.value as any);
    };

    const handleTypeChange = (event: SelectChangeEvent) => {
        setTypeIds(event.target.value as any);
    };

    const handleCreateSubject = async (data: any) => {
        createAttach.mutate(
            { ...data, videos: videoList, pdfFiles: selectedFile },
            {
                onSuccess: async (result: { message: string; statusCode: number }) => {
                    setGradeLevelIds(null);
                    setBookIds(null);
                    setChapterIds(null);
                    setVideoList([]);
                    setSelectedFile([]);
                    setTypeIds(null);
                    attachBasedOnChapters.refetch();
                    toast.success(result.message);
                },
                onError: async (e: any) => {
                    toast.error(e.message);
                },
            },
        );
    };

    const handleUpdateSubject = async (data: any) => {
        setLoading(true);

        updateAttach.mutate(
            { id: value.id, ...data },
            {
                onSuccess: async (result: { message: string; statusCode: number }) => {
                    if (result.statusCode == 200) {
                        setLoading(false);
                        toast.success(result.message);
                        setValue({ doUpdate: false, data: "", id: null });
                        setGradeLevelIds(null);
                        setBookIds(null);
                        setTypeIds(null);
                        attachBasedOnChapters.refetch();
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
            },
        );
    };

    return (
        <Box className={classes.container}>
            <Box
                sx={{
                    width: 500,
                }}
            >
                <form
                    onSubmit={
                        value.doUpdate
                            ? handleSubmit(handleUpdateSubject)
                            : handleSubmit(handleCreateSubject)
                    }
                >
                    <FormControl className={classes.formField} fullWidth>
                        <InputLabel id="demo-simple-select-label">انتخاب پایه</InputLabel>
                        <Select
                            value={gradeLevelIds ?? []}
                            {...register("gradeLevel")}
                            inputRef={selectGradeLevelRef}
                            onChange={handleGradeLevelChange}
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
                            {...register("book")}
                            inputRef={selectBookRef}
                            onChange={handleBookChange}
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
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formField} fullWidth>
                        <InputLabel id="demo-simple-select-label">انتخاب فصل</InputLabel>
                        <Select
                            value={chapterIds ?? []}
                            {...register("chapter")}
                            inputRef={selectChaptertRef}
                            onChange={handleChapterChange}
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
                        </Select>
                    </FormControl>

                    <FormControl className={classes.formField} fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            انتخاب (خلاصه درس، پیوست، جداول)
                        </InputLabel>
                        <Select
                            value={typeIds}
                            {...register("type")}
                            onChange={handleTypeChange}
                            inputRef={selectTypeRef}
                        >
                            <MenuItem value={"summary"}>خلاصه فصل</MenuItem>
                            <MenuItem value={"attaches"}>پیوست</MenuItem>
                            <MenuItem value={"tables"}>جداول</MenuItem>
                        </Select>
                    </FormControl>

                    {/* video link */}
                    {typeIds && typeIds?.length > 0 && (
                        <Box
                            sx={{
                                width: "510px",
                                backgroundColor: "#ededed",
                                padding: "10px",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "12px",
                            }}
                        >
                            {/* inputs */}
                            <Box
                                sx={{
                                    width: "100%",
                                }}
                            >
                                <TextField
                                    label="عنوان ویدیو "
                                    variant="outlined"
                                    className={classes.formField}
                                    value={videoTitle}
                                    onChange={(e) => {
                                        setVideoTitle(e.target.value);
                                    }}
                                />
                                <TextField
                                    label="لینک ویدیو"
                                    variant="outlined"
                                    className={classes.formField}
                                    value={videoLink}
                                    onChange={(e) => {
                                        setVideoLink(e.target.value);
                                    }}
                                />
                            </Box>

                            {/* list */}
                            <Box
                                sx={{
                                    display: "flex",
                                }}
                            >
                                {/* video list */}
                                <Box
                                    sx={{
                                        width: "350px",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography textAlign={"center"}>لیست ویدیوها</Typography>

                                    <TableKit
                                        secondary
                                        headers={[
                                            { children: `عنوان` },
                                            { children: `لینک` },
                                            { children: `عملیات` },
                                        ]}
                                        rows={videoList.map((item: IVideo, index: any) => {
                                            return {
                                                id: index,
                                                data: {
                                                    title: item?.title ?? "-",
                                                    link: item?.link ?? "-",
                                                    action: (
                                                        <>
                                                            <IconButton
                                                                onClick={() => {
                                                                    setVideoEditItemIndex(index);
                                                                    setVideoTitle(
                                                                        item?.title ?? "",
                                                                    );
                                                                    setVideoLink(item?.link ?? "");
                                                                }}
                                                            >
                                                                <EditLightSvg
                                                                    width={12}
                                                                    height={12}
                                                                />
                                                            </IconButton>
                                                            <IconButton>
                                                                <PrompModalKit
                                                                    description={
                                                                        "آیا از حذف ویدیو مورد نظر مطمئن  هستید؟"
                                                                    }
                                                                    onConfirm={() =>
                                                                        setVideoList(
                                                                            videoList.filter(
                                                                                (item, i) =>
                                                                                    i !== index,
                                                                            ),
                                                                        )
                                                                    }
                                                                    approved={"بله"}
                                                                    denied={"خیر"}
                                                                >
                                                                    <DeleteLightSvg
                                                                        width={16}
                                                                        height={16}
                                                                    />
                                                                </PrompModalKit>
                                                            </IconButton>
                                                        </>
                                                    ),
                                                },
                                            };
                                        })}
                                    />
                                </Box>

                                {/* buttons */}
                                <Box
                                    sx={{
                                        width: "130px",
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        className={classes.formButton}
                                        disabled={loading}
                                        sx={{
                                            width: "130px !important",
                                            height: "40px",
                                            position: "relative",
                                        }}
                                        onClick={() => {
                                            if (videoEditItemIndex === -1) {
                                                const videoItem = {
                                                    title: videoTitle,
                                                    link: videoLink,
                                                };
                                                setVideoList([...videoList, videoItem]);
                                            } else {
                                                const videoItem = {
                                                    title: videoTitle,
                                                    link: videoLink,
                                                };
                                                setVideoList(
                                                    videoList.map((item, index) =>
                                                        videoEditItemIndex === index
                                                            ? videoItem
                                                            : item,
                                                    ),
                                                );
                                                setVideoEditItemIndex(-1);
                                            }
                                            setVideoTitle("");
                                            setVideoLink("");
                                        }}
                                    >
                                        {videoEditItemIndex === -1
                                            ? "افزودن ویدیو"
                                            : "ویرایش ویدیو"}
                                    </Button>
                                    {videoEditItemIndex !== -1 && (
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.formButton}
                                            disabled={loading}
                                            sx={{
                                                width: "130px !important",
                                                height: "40px",
                                                position: "relative",
                                            }}
                                            onClick={() => {
                                                setVideoEditItemIndex(-1);
                                                setVideoTitle("");
                                                setVideoLink("");
                                            }}
                                        >
                                            {"انصراف"}
                                        </Button>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    )}

                    {/* select pdf files */}
                    {typeIds && typeIds?.length > 0 && (
                        <Box
                            sx={{
                                width: "510px",
                                backgroundColor: "#ededed",
                                padding: "10px",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "12px",
                                marginTop: "10px",
                            }}
                        >
                            <input
                                type="file"
                                accept=".pdf"
                                multiple
                                ref={(e) => {
                                    imageRef.current = e;
                                }}
                                hidden
                                onChange={(e) => {
                                    onSelectFile(e);
                                }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.formButton}
                                disabled={loading}
                                onClick={() => imageRef.current.click()}
                            >
                                {"انتخاب فایل PDF"}
                            </Button>

                            {/* pdf list */}
                            <Box
                                sx={{
                                    width: "100%",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography textAlign={"center"}>لیست فایل pdf</Typography>

                                <TableKit
                                    secondary
                                    headers={[
                                        { children: `عنوان` },
                                        { children: `حجم KB` },
                                        { children: `عملیات` },
                                    ]}
                                    rows={selectedFile.map((item: any, index: any) => {
                                        return {
                                            id: index,
                                            data: {
                                                title: item.name ?? "-",
                                                link: bytesToKilobytes(item.size) ?? "-",
                                                action: (
                                                    <>
                                                        <IconButton>
                                                            <PrompModalKit
                                                                description={
                                                                    "آیا از حذف موضوع مورد نظر مطمئن  هستید؟"
                                                                }
                                                                onConfirm={() => {
                                                                    handleRemoveFile(item);
                                                                }}
                                                                approved={"بله"}
                                                                denied={"خیر"}
                                                            >
                                                                <DeleteLightSvg
                                                                    width={16}
                                                                    height={16}
                                                                />
                                                            </PrompModalKit>
                                                        </IconButton>
                                                    </>
                                                ),
                                            },
                                        };
                                    })}
                                />
                            </Box>
                        </Box>
                    )}

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.formButton}
                        disabled={loading}
                        type="submit"
                    >
                        {loading ? (
                            <CircularProgress size={24} />
                        ) : value.doUpdate ? (
                            "ویرایش"
                        ) : (
                            "ذخیره"
                        )}
                    </Button>
                </form>
            </Box>
            <Box className={classes.fieldOfStudy}>
                <Typography>لیست ضمائم </Typography>
                {!attachBasedOnChapters.isLoading ? (
                    <TableKit
                        secondary
                        headers={[{ children: `عنوان` }, { children: `عملیات` }]}
                        rows={attachBasedOnChapters?.data?.map((item: any, index: any) => {
                            return {
                                id: item._id,
                                data: {
                                    title: `${item.chapter[0].title} ${
                                        item.type == "summary"
                                            ? "- خلاصه"
                                            : item.type == "attaches"
                                              ? "پیوست"
                                              : "جداول"
                                    }  `,
                                    action: (
                                        <>
                                            <IconButton
                                                onClick={() => {
                                                    setValue({
                                                        doUpdate: true,
                                                        data: "",
                                                        id: item._id,
                                                    });

                                                    setVideoList(
                                                        item.videos.map((item) => {
                                                            const newItem: IVideo =
                                                                typeof item === "string"
                                                                    ? JSON.parse(item)
                                                                    : item;
                                                            return newItem;
                                                        }),
                                                    );

                                                    setTypeIds(item.type);

                                                    setTimeout(() => {
                                                        selectTypeRef.current.focus();
                                                    }, 400);
                                                }}
                                            >
                                                <EditLightSvg width={12} height={12} />
                                            </IconButton>
                                            <IconButton>
                                                <PrompModalKit
                                                    description={
                                                        "آیا از حذف ضمیمه مورد نظر مطمئن  هستید؟"
                                                    }
                                                    onConfirm={() => handleDeleteAttach(item._id)}
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
                        })}
                        pagination={{
                            page: page,
                            count: 1,
                            rowsPerPage: pageSize,
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

export default Attach;
