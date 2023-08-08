import React, { useEffect, useRef, useState } from "react";
import {
    Theme,
    Box,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    Button,
    CircularProgress,
    MenuItem,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm } from "react-hook-form";
import { EditLightSvg } from "../../../../../../assets";
import { PrompModalKit } from "../../../../../../components/kit/Modal";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        display: "flex",
        gap: "10px",
        justifyContent: "space-around",
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
    formButton: {
        margin: "1rem",
        width: "100%",
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
        formState: { errors },
    } = useForm();

    const [loading, setLoading] = useState(false);

    return (
        <Box className={classes.container}>
            <Box className={classes.container}>
                <Box>
                    <form>
                        <FormControl className={classes.formField} fullWidth>
                            <InputLabel id="demo-simple-select-label">انتخاب پایه</InputLabel>
                            <Select></Select>
                        </FormControl>

                        <FormControl className={classes.formField} fullWidth>
                            <InputLabel id="demo-simple-select-label">انتخاب کتاب</InputLabel>
                            <Select></Select>
                        </FormControl>

                        <FormControl className={classes.formField} fullWidth>
                            <InputLabel id="demo-simple-select-label">انتخاب فصل</InputLabel>
                            <Select></Select>
                        </FormControl>

                        <FormControl className={classes.formField} fullWidth>
                            <InputLabel id="demo-simple-select-label">انتخاب بخش</InputLabel>
                            <Select></Select>
                        </FormControl>

                        <FormControl className={classes.formField} fullWidth>
                            <InputLabel id="demo-simple-select-label">انتخاب موضوع</InputLabel>
                            <Select></Select>
                        </FormControl>

                        <FormControl className={classes.formField} fullWidth>
                            <InputLabel id="demo-simple-select-label">سختی سوال</InputLabel>
                            <Select>
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
                            <Select>
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
                            <Select>
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
                            <Select>
                                <MenuItem key={1} value={"main"}>
                                    آزمون اصلی
                                </MenuItem>
                                <MenuItem key={2} value={"remedial"}>
                                    آزمون رفع اشکال
                                </MenuItem>
                            </Select>
                        </FormControl>

                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.formButton}
                            disabled={loading}
                            type="submit"
                        >
                            {loading ? <CircularProgress size={24} /> : "ذخیره"}
                        </Button>
                    </form>
                </Box>
                <Box className={classes.objectiveTest}>
                    <Typography>لیست موضوع‌ها</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ObjectiveTest;
