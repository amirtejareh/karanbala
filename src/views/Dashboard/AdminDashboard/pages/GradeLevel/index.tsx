import React, { useEffect, useRef, useState } from "react";
import {
    Theme,
    Box,
    TextField,
    Button,
    CircularProgress,
    Typography,
    IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { PrompModalKit } from "../../../../../components/kit/Modal";
import { DeleteLightSvg, EditLightSvg } from "../../../../../assets";
import useUpdateGradeLevel from "../../../../../hooks/grade-level/useUpdateGradeLevel";
import useGetGradeLevels from "../../../../../hooks/grade-level/useGetGradeLevels";
import useDeleteGradeLevel from "../../../../../hooks/grade-level/useDeleteGradeLevel";
import useCreateGradeLevel from "../../../../../hooks/grade-level/useCreateGradeLevel";
import { TableKit } from "../../../../../components/kit/Table";
import GradeLevelImage from "../../../../../assets/images/user.jpg";
import { EditDarkSvg } from "../../../../../assets";
import getGradeLevelsImage from "../../../../../hooks/grade-level/getGradeLevelsImage";

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

const GradeLevel = (props: any) => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const [loading, setLoading] = useState(false);

    const createGradeLevel = useCreateGradeLevel();
    const updateGradeLevel = useUpdateGradeLevel();

    const gradeLevels = useGetGradeLevels();

    const deleteGradeLevel = useDeleteGradeLevel();

    const handleDeleteGradeLevel = (id: string) => {
        deleteGradeLevel.mutate(id, {
            onSuccess: async (result: {
                message: string;
                statusCode: number;
                access_token: string;
            }) => {
                if (result.statusCode == 200) {
                    setLoading(false);
                    gradeLevels.refetch();
                    toast.success(result.message);
                } else {
                    setLoading(false);
                    toast.error(result.message);
                }
            },
        });
    };

    const [gradeLevelsImage, setGradeLevelsImage] = useState("");

    const [page, setPage] = useState<number>(1);
    const [pageSize] = useState<number>(10);
    const [value, setValue] = useState({ doUpdate: false, data: "", id: null });
    const titleInputRef = useRef<any>(null);
    const [preview, setPreview] = useState<any>();
    const [selectedFile, setSelectedFile] = useState<any>();
    const imageRef = useRef<any>();

    const descriptionInputRef = useRef<any>(null);

    const [descriptionValue, setDescriptionValue] = useState({
        doUpdate: false,
        data: "",
        id: null,
    });

    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }

        const objectUrl: any = URL.createObjectURL(selectedFile);
        console.log(objectUrl);

        setPreview(objectUrl);

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedFile]);

    const [getImageData, setImageData] = useState("");

    useEffect(() => {
        if (getImageData && getImageData !== undefined) {
            getGradeLevelsImage(getImageData).then((response) => setSelectedFile(response));
        }
    }, [getImageData]);

    const {
        handleSubmit,
        register,
        formState: { errors },
        clearErrors,
    } = useForm();

    const { ref, onChange, ...rest } = register("image");

    useEffect(() => {
        toast.error(errors["description"]?.message?.toString());
        toast.error(errors["title"]?.message?.toString());
        toast.error(errors["image"]?.message?.toString());
        clearErrors();
    }, [errors["description"]?.message, errors["title"]?.message, errors["image"]?.message]);

    const handleCreateGradeLevel = async (data: any) => {
        setLoading(true);

        createGradeLevel.mutate(
            { ...data, image: data.image[0] },
            {
                onSuccess: async (result: { message: string; statusCode: number }) => {
                    if (result.statusCode == 200) {
                        setLoading(false);
                        gradeLevels.refetch();
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
            },
        );
    };

    const onSelectFile = (e: any) => {
        if (!imageRef.current.files || imageRef.current.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(imageRef.current.files[0]);
    };

    const handleUpdateGradeLevel = async (data: any) => {
        setLoading(true);

        updateGradeLevel.mutate(
            { id: value.id, ...data },
            {
                onSuccess: async (result: { message: string; statusCode: number }) => {
                    if (result.statusCode == 200) {
                        setLoading(false);
                        gradeLevels.refetch();
                        toast.success(result.message);
                        setValue({ doUpdate: false, data: "", id: null });
                        setDescriptionValue({ doUpdate: false, data: "", id: null });
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
            <Box>
                <form
                    onSubmit={
                        value.doUpdate
                            ? handleSubmit(handleUpdateGradeLevel)
                            : handleSubmit(handleCreateGradeLevel)
                    }
                >
                    <TextField
                        label="عنوان پایه تحصیلی"
                        variant="outlined"
                        className={classes.formField}
                        value={value.data}
                        {...register("title", {
                            required: "لطفا نام پایه تحصیلی را وارد کنید",
                        })}
                        inputRef={titleInputRef}
                        onChange={(e) => {
                            if (value.doUpdate) {
                                setValue({ doUpdate: true, data: e.target.value, id: value.id });
                            } else {
                                setValue({ doUpdate: false, data: e.target.value, id: null });
                            }
                        }}
                    />

                    <TextField
                        label="توضیحات پایه تحصیلی"
                        variant="outlined"
                        className={classes.formField}
                        value={descriptionValue.data}
                        {...register("description", {
                            required: "لطفا توضیحات پایه تحصیلی را وارد کنید",
                        })}
                        inputRef={descriptionInputRef}
                        onChange={(e) => {
                            if (descriptionValue.doUpdate) {
                                setDescriptionValue({
                                    doUpdate: true,
                                    data: e.target.value,
                                    id: value.id,
                                });
                            } else {
                                setDescriptionValue({
                                    doUpdate: false,
                                    data: e.target.value,
                                    id: null,
                                });
                            }
                        }}
                    />

                    <Box display={"flex"} position={"relative"} borderRadius={"100%"} mb={3}>
                        {selectedFile ? (
                            <Box
                                component={"img"}
                                src={preview ?? ""}
                                alt={"test flag"}
                                width={100}
                                height={100}
                            />
                        ) : (
                            <Box
                                component={"img"}
                                src={GradeLevelImage}
                                alt={"User flag"}
                                width={100}
                                height={100}
                            />
                        )}
                        <IconButton
                            sx={{
                                backgroundColor: "#FCF0FF",
                                width: 28,
                                height: 28,
                                borderRadius: "8px",
                                p: 0.5,
                                position: "absolute",
                                bottom: -10,
                            }}
                        >
                            <EditDarkSvg onClick={() => imageRef.current.click()} />
                            <input
                                {...rest}
                                type="file"
                                ref={(e) => {
                                    ref(e);
                                    imageRef.current = e;
                                }}
                                hidden
                                onChange={(e) => {
                                    onSelectFile(e);
                                    onChange(e);
                                }}
                            />
                        </IconButton>
                    </Box>
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
                <Typography>لیست پایه های تحصیلی</Typography>
                {!gradeLevels.isLoading ? (
                    <TableKit
                        secondary
                        headers={[{ children: `عنوان` }, { children: `عملیات` }]}
                        rows={gradeLevels?.data.map((item: any, index: any) => {
                            return {
                                id: item._id,
                                data: {
                                    title: item?.title,
                                    action: (
                                        <>
                                            <IconButton
                                                onClick={() => {
                                                    setValue({
                                                        doUpdate: true,
                                                        data: item.title,
                                                        id: item._id,
                                                    });
                                                    setDescriptionValue({
                                                        doUpdate: true,
                                                        data: item.description,
                                                        id: item._id,
                                                    });

                                                    setImageData(item.image.split("/")[2]);

                                                    titleInputRef.current.focus();
                                                    setTimeout(() => {
                                                        descriptionInputRef.current.focus();
                                                    }, 1000);

                                                    setGradeLevelsImage(item.image.split("/")[2]);
                                                }}
                                            >
                                                <EditLightSvg width={12} height={12} />
                                            </IconButton>
                                            <IconButton>
                                                <PrompModalKit
                                                    description={
                                                        "آیا از حذف پایه تحصیلی مطمئن  هستید؟"
                                                    }
                                                    onConfirm={() =>
                                                        handleDeleteGradeLevel(item._id)
                                                    }
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

export default GradeLevel;
