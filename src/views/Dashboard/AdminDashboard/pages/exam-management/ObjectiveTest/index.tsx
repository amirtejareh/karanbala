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
import { useForm } from "react-hook-form";
import useGetGradeLevels from "../../../../../../hooks/grade-level/useGetGradeLevels";
import { toast } from "react-toastify";
import useCreateObjectiveTest from "../../../../../../hooks/objective-test/useCreateObjectiveTest";
import "react-quill/dist/quill.snow.css";
import useGetObjectiveTestsBasedOnGradeLevel from "../../../../../../hooks/objective-test/useGetObjectiveTestsBasedOnGradeLevel";
import { TableKit } from "../../../../../../components/kit/Table";
import { DeleteLightSvg, EditLightSvg } from "../../../../../../assets";
import { PrompModalKit } from "../../../../../../components/kit/Modal";
import useDeleteObjectiveTest from "../../../../../../hooks/objective-test/useDeleteObjectiveTest";
import useUpdateObjectiveTest from "../../../../../../hooks/objective-test/useUpdateObjectiveTest";

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
        control,
        formState: { errors },
    } = useForm();

    const [gradeLevelIdsEdit, setGradeLevelIdsEdit] = useState<any>([]);
    const selectGradeLevelRefEdit = useRef<any>();
    const [isObjectiveTestUpdated, setIsObjectiveTestUpdated] = useState(false);

    const handleGradeLevelChangeEdit = (event: SelectChangeEvent) => {
        setGradeLevelIdsEdit(event.target.value as any);
    };

    const [duration, setDuration] = useState(0);

    const selectGradeLevelRef = useRef<any>();
    const selectObjectiveTestTypeRef = useRef<any>();

    const [loading, setLoading] = useState(false);

    const durationRef = useRef<any>(null);
    const numberRef = useRef<any>(null);
    const createObjectiveTest = useCreateObjectiveTest();
    const updateObjectiveTest = useUpdateObjectiveTest();
    const [number, setNumber] = useState<number>(0);
    const [page, setPage] = useState<number>(0);
    const [limit, _] = useState<number>(5);
    const [pageSize, setPageSize] = useState<number>(0);
    const [type, setType] = useState<string>("main");

    const deleteObjectiveTest = useDeleteObjectiveTest();
    const handleDeleteObjectiveTest = (id: string) => {
        deleteObjectiveTest.mutate(id, {
            onSuccess: async (result: { message: string; statusCode: number }) => {
                if (result.statusCode === 200) {
                    setLoading(false);
                    toast(result.message);
                    getObjectiveTestsBasedOnGradeLevel.refetch();
                } else {
                    setLoading(false);
                    toast(result.message);
                }
            },
        });
    };

    const handleCreateObjectiveTest = async (data: any) => {
        setLoading(true);
        createObjectiveTest.mutate(data, {
            onSuccess: async (result: { message: string; statusCode: number }) => {
                if (result.statusCode == 200) {
                    setLoading(false);

                    setGradeLevelIdsEdit([gradeLevelId]);
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

    const handleUpdateObjectiveTest = async (data: any) => {
        setLoading(true);
        data.id = id;

        updateObjectiveTest.mutate(data, {
            onSuccess: async (result: { message: string; statusCode: number }) => {
                if (result.statusCode == 200) {
                    setLoading(false);
                    setGradeLevelIdsEdit([gradeLevelId]);

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
    const [gradeLevelId, setGradeLevelId] = React.useState<any>();
    const [id, setId] = React.useState<any>();
    const getGradeLevels = useGetGradeLevels();

    const getObjectiveTestsBasedOnGradeLevel = useGetObjectiveTestsBasedOnGradeLevel(
        page === 0 ? 1 : page,
        limit,
        gradeLevelIdsEdit,
    );

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
        if (gradeLevelIdsEdit.length > 0) {
            getObjectiveTestsBasedOnGradeLevel.refetch();
        }
    }, [gradeLevelIdsEdit]);

    useEffect(() => {
        if (
            !getObjectiveTestsBasedOnGradeLevel.isLoading &&
            getObjectiveTestsBasedOnGradeLevel?.data?.objectiveTests
        ) {
            setPage(parseInt(getObjectiveTestsBasedOnGradeLevel?.data?.currentPage ?? 1));
            setPageSize(getObjectiveTestsBasedOnGradeLevel?.data?.totalPages ?? 1);
        }
    }, [getObjectiveTestsBasedOnGradeLevel?.data]);

    useEffect(() => {
        if (page > 0) {
            getObjectiveTestsBasedOnGradeLevel.refetch();
        }
    }, [page]);

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
                <form
                    onSubmit={handleSubmit(
                        isObjectiveTestUpdated
                            ? handleUpdateObjectiveTest
                            : handleCreateObjectiveTest,
                    )}
                >
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
                                getGradeLevels?.data?.map((element: any) => {
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
                        value={number === 0 ? "" : number}
                        onChange={(e: any) => setNumber(e.target.value)}
                        className={classes.formField}
                        variant="outlined"
                        label="لطفا شماره آزمون را وارد کنید"
                        type="number"
                        ref={(e) => {
                            register("number").ref(e);
                            numberRef.current = e;
                        }}
                    />

                    <FormControl className={classes.formField}>
                        <InputLabel id="demo-simple-select-label">نوع آزمون</InputLabel>
                        <Select
                            {...register("type", {
                                required: "لطفا نوع آزمون را مشخص کنید",
                            })}
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            inputRef={selectObjectiveTestTypeRef}
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
                        <>
                            <TextField
                                type="number"
                                className={`${classes.formField} ${classes.durationField}`}
                                variant="outlined"
                                label="لطفا مدت زمان آزمون را به دقیقه مشخص کنید"
                                {...register("duration", {
                                    required: "مدت زمان آزمون را مشخص کنید",
                                })}
                                value={duration === 0 ? "" : duration}
                                onChange={(e: any) => setDuration(e.target.value)}
                                ref={(e) => {
                                    register("duration").ref(e);
                                    durationRef.current = e;
                                }}
                            />
                        </>
                    )}

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.specialField}
                        disabled={loading}
                        type="submit"
                    >
                        {loading ? (
                            <CircularProgress size={24} />
                        ) : isObjectiveTestUpdated ? (
                            "ویرایش"
                        ) : (
                            "ذخیره"
                        )}
                    </Button>
                </form>
            </Box>

            <Box className={classes.objectiveTest}>
                <Typography>لیست آزمون‌های تستی</Typography>
                <FormControl className={classes.formField}>
                    <InputLabel id="demo-simple-select-label">انتخاب پایه</InputLabel>
                    <Select
                        value={gradeLevelIdsEdit ?? []}
                        inputRef={selectGradeLevelRefEdit}
                        onChange={handleGradeLevelChangeEdit}
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
                {!getObjectiveTestsBasedOnGradeLevel.isLoading &&
                getObjectiveTestsBasedOnGradeLevel?.data ? (
                    <TableKit
                        secondary
                        headers={[{ children: `عنوان` }, { children: `عملیات` }]}
                        rows={getObjectiveTestsBasedOnGradeLevel?.data?.objectiveTests?.map(
                            (item: any, index: any) => {
                                return {
                                    id: item._id,
                                    data: {
                                        title: `آزمون ${
                                            item.type == "main" ? "اصلی" : "رفع اشکال"
                                        } - ${item.number}`,
                                        action: (
                                            <>
                                                <IconButton
                                                    onClick={() => {
                                                        setIsObjectiveTestUpdated(true);
                                                        setGradeLevelId(item.gradeLevel[0]._id);
                                                        setNumber(item.number);
                                                        setType(item.type);
                                                        setDuration(item.duration);
                                                        setId(item._id);

                                                        setTimeout(() => {
                                                            selectObjectiveTestTypeRef.current.focus();
                                                        }, 200);
                                                        setTimeout(() => {
                                                            numberRef.current.focus();
                                                        }, 300);
                                                        setTimeout(() => {
                                                            selectGradeLevelRef.current.focus();
                                                        }, 400);
                                                    }}
                                                >
                                                    <EditLightSvg width={12} height={12} />
                                                </IconButton>
                                                <IconButton>
                                                    <PrompModalKit
                                                        description={`آیا از حذف آزمون ${
                                                            item.type == "main"
                                                                ? "اصلی"
                                                                : "رفع اشکال"
                                                        } - ${item.number} - ${
                                                            item.gradeLevel[0].title
                                                        }  مطمئن  هستید؟`}
                                                        onConfirm={() => {
                                                            handleDeleteObjectiveTest(item._id);
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

export default ObjectiveTest;
