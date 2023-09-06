import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import { KaranbalaLogoTextSvg } from "../../../../assets";
import { ButtonKit } from "../../../../components/kit/Button";
import { Theme } from "@mui/material/styles";
import { userStore } from "../../../../stores";
import useGetOnlineGradeLevelBasedObjectiveTest from "../../../../hooks/online-grade-report/useGetOnlineGradeLevelBasedObjectiveTest";

const useStyles = makeStyles((theme: Theme) => ({
    table: {
        padding: "5px",
        borderTop: "none",
        borderBottom: "none",
        borderLeft: "none",
        borderRight: "none",
        backgroundColor: theme.palette.grey["50"],
        "&  th": {
            border: "1px solid gray",
            borderTop: "none",
            textAlign: "center",
        },
        "& th:last-child, & td:last-child": {
            borderLeft: "none",
            borderRight: "none",
        },
        "& th:first-child, & td:first-child": {
            borderLeft: "none",
            borderRight: "none",
        },
        "&  td": {
            border: "1px solid gray !important",
            borderBottom: "none !important",
        },
        "& td:last-child, & td:last-child": {
            borderLeft: "none !important",
            borderRight: "none !important",
        },
        "& td:first-child, & td:first-child": {
            borderLeft: "none !important",
            borderRight: "none !important",
        },
    },
    table2: {
        "&  td": {
            border: "1px solid gray !important",
            textAlign: "center",
        },
        "&  th": {
            textAlign: "center",
        },
    },
    true: {
        backgroundColor: `${theme.palette.success.main} !important`,
        color: "white",
    },
    false: {
        backgroundColor: `${theme.palette.error["400"]} !important`,
        color: "white",
    },
    undone: {
        backgroundColor: `${theme.palette.grey["500"]} !important`,
        color: "white",
    },
}));
const Report = () => {
    const theme: ThemeOptions = useTheme();
    const navigate = useNavigate();
    const classes = useStyles();
    const { examId } = useParams();
    const user = userStore((state) => state.user);

    const getOnlineGradeLevelBasedObjectiveTest = useGetOnlineGradeLevelBasedObjectiveTest(examId);

    useEffect(() => {
        getOnlineGradeLevelBasedObjectiveTest.refetch();
    }, []);

    const [isUserInitialized, setIsUserInitialized] = useState(false);

    console.log(getOnlineGradeLevelBasedObjectiveTest);

    useEffect(() => {
        if (!isUserInitialized && user !== null) {
            setIsUserInitialized(true);
        } else if (isUserInitialized && user === null) {
            navigate("/");
        }
    }, [user, isUserInitialized, navigate]);

    const [tableData, setTableData] = useState([
        [
            "۱",
            <Typography className={classes.true}>صحیح</Typography>,
            "",
            "",
            "",
            "یازدهم",
            "اول",
            "حد",
            "ساده",
            "مفهومی",
        ],
        [
            "۲",
            "",
            <Typography className={classes.false}>غلط</Typography>,
            ,
            "",
            "",
            "دهم",
            "دوم",
            "پیوستگی",
            "متوسط",
            "چالشی",
        ],
        [
            "۳",
            "",
            "",
            "",
            <Typography className={classes.undone}>نزده</Typography>,
            ,
            "یازدهم",
            "سوم",
            "مشتق تابع مرکب",
            "سخت",
            "دام دار",
        ],
        [
            "۴",
            "",
            <Typography className={classes.true}>صحیح</Typography>,
            ,
            "",
            "",
            "دوازدهم",
            "دوم",
            "مشتق تابع مرکب",
            "سخت",
            "حفظی",
        ],
        [
            "۵",
            "",
            <Typography className={classes.false}>غلط</Typography>,
            ,
            "",
            "",
            "دهم",
            "سوم",
            "مشتق تابع مرکب",
            "متوسط",
            "محاسباتی",
        ],
        [
            "۶",
            "",
            "",
            <Typography className={classes.true}>صحیح</Typography>,
            ,
            "",
            "دوازدهم",
            "دوم",
            "مشتق تابع مرکب",
            "ساده",
            "محاسباتی",
        ],
        [
            "۷",
            <Typography className={classes.true}>صحیح</Typography>,
            ,
            "",
            "",
            "",
            "دهم",
            "اول",
            "مشتق تابع مرکب",
            "متوسط",
            "حفظی",
        ],
        [
            "۸",
            "",
            "",
            "",
            <Typography className={classes.false}>غلط</Typography>,
            ,
            "دوازدهم",
            "سوم",
            "مشتق تابع مرکب",
            "ساده",
            "چالشی",
        ],
        [
            "۹",
            "",
            "",
            <Typography className={classes.true}>صحیح</Typography>,
            ,
            "",
            "دهم",
            "اول",
            "مشتق تابع مرکب",
            "متوسط",
            "مفهومی",
        ],
        [
            "۱۰",
            "",
            "",
            "",
            <Typography className={classes.true}>صحیح</Typography>,
            ,
            "دوازدهم",
            "سوم",
            "مشتق تابع مرکب",
            "متوسط",
            "مفهومی",
        ],
    ]);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const checkQuestionDifficulty = (questionDifficulty) => {
        switch (questionDifficulty) {
            case "hard":
                return "سخت";
            case "average":
                return "متوسط";
            case "easy":
                return "ساده";
            case "challenging":
                return "چالشی";
        }
    };

    const checkQuestionType = (questionType) => {
        switch (questionType) {
            case "conceptional":
                return "مفهومی";
            case "computational":
                return "محاسباتی";
            case "trick":
                return "دام دار";
            case "memorizational":
                return "حفظی";
        }
    };
    return (
        <Box margin={"0.75rem 3.25rem 0 3.25rem"} paddingBottom={"7.5rem"}>
            <Box display={"flex"} justifyContent={"end"}>
                <ButtonKit onClick={() => navigate("/")}>
                    {" "}
                    <KaranbalaLogoTextSvg />
                </ButtonKit>
            </Box>
            <Box>
                <Typography variant="h3">کارنامه</Typography>
            </Box>

            <Box mt="20px" display="flex" gap="50px">
                <Box display="flex" gap="5px">
                    <Typography color={theme.palette.grey.A700} variant="subtitle1">
                        نوع آزمون:
                    </Typography>
                    <Typography variant="subtitle1">
                        {" "}
                        {getOnlineGradeLevelBasedObjectiveTest?.data && (
                            <>
                                {getOnlineGradeLevelBasedObjectiveTest?.data[0]?.examType === "main"
                                    ? "اصلی"
                                    : "رفع اشکال"}{" "}
                            </>
                        )}
                    </Typography>
                </Box>
                <Box display="flex" gap="5px">
                    <Typography color={theme.palette.grey.A700}>شماره آزمون: </Typography>
                    <Typography variant="subtitle1">
                        {" "}
                        {getOnlineGradeLevelBasedObjectiveTest?.data && (
                            <>{getOnlineGradeLevelBasedObjectiveTest?.data[0]?.examNumber} </>
                        )}{" "}
                    </Typography>
                </Box>
                <Box display="flex" gap="5px">
                    <Typography color={theme.palette.grey.A700}>پایه تحصیلی : </Typography>
                    <Typography variant="subtitle1">
                        {getOnlineGradeLevelBasedObjectiveTest?.data && (
                            <>
                                {
                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]?.gradeLevel[0]
                                        .title
                                }{" "}
                            </>
                        )}
                    </Typography>
                </Box>
            </Box>

            {/*
            <Box mt="20px" display={"flex"} flexWrap={"wrap"}>
                <Table className={classes.table} component={Paper}>
                    <TableHead>
                        <TableRow>
                            <TableCell rowSpan={2}>تعداد سوالات</TableCell>
                            <TableCell rowSpan={2}>شماره سوالات</TableCell>
                            <TableCell rowSpan={2}>صحیح</TableCell>
                            <TableCell rowSpan={2}>نزده</TableCell>
                            <TableCell rowSpan={2}>غلط</TableCell>{" "}
                            <TableCell rowSpan={2}>درصد کسب شده آزمون فعلی</TableCell>
                            <TableCell rowSpan={2}>درصد کسب شده آزمون قبلی</TableCell>
                            <TableCell colSpan={3}>نمره خام</TableCell>
                            <TableCell colSpan={3}>سطح علمی</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>آزمون فعلی</TableCell>
                            <TableCell>آزمون قبلی</TableCell>
                            <TableCell>مجموع</TableCell>
                            <TableCell>آزمون فعلی</TableCell>
                            <TableCell>آزمون قبلی</TableCell>
                            <TableCell>مجموع</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>۲۰</TableCell>
                            <TableCell>۱ تا ۲۰</TableCell>
                            <TableCell>۱۴</TableCell>
                            <TableCell>۱</TableCell>
                            <TableCell>۴</TableCell>
                            <TableCell>۴۵</TableCell>
                            <TableCell>۵۶</TableCell>
                            <TableCell>۵۴۵۵</TableCell>
                            <TableCell>۵۳۴۳</TableCell>
                            <TableCell>۶۴۵۶</TableCell>
                            <TableCell>۴۵۷۸</TableCell>
                            <TableCell>۵۸۶۵</TableCell>
                            <TableCell>۶۳۴۳</TableCell>
                        </TableRow>
                    </TableBody>

                    {/* <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.rawScore}</TableCell>
            <TableCell>{row.scientificLevel}</TableCell>
            <TableCell>{row.currentExam}</TableCell>
            <TableCell>{row.previousExam}</TableCell>
            <TableCell>{row.totalExam}</TableCell>
          </TableRow>
        ))}
      </TableBody> 
      
                </Table>
            </Box>

            */}

            <Box mt="20px">
                <Table className={classes.table2} component={Paper}>
                    <TableHead>
                        <TableRow>
                            <TableCell>شماره سوال</TableCell>
                            <TableCell>گزینه۱</TableCell>
                            <TableCell>گزینه۲</TableCell>
                            <TableCell>گزینه۳</TableCell>
                            <TableCell>گزینه۴</TableCell>
                            <TableCell>پایه</TableCell>
                            <TableCell>فصل/درس</TableCell>
                            <TableCell>موضوع </TableCell>
                            <TableCell>سطح سوال</TableCell>
                            <TableCell>نوع سوال</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {getOnlineGradeLevelBasedObjectiveTest?.data && (
                            <>
                                {getOnlineGradeLevelBasedObjectiveTest?.data[0] && (
                                    <>
                                        {getOnlineGradeLevelBasedObjectiveTest?.data[0]?.userAnswers?.map(
                                            (answer, ix) => {
                                                return (
                                                    <TableRow key={ix}>
                                                        <TableCell key={ix}>
                                                            {answer.number}
                                                        </TableCell>
                                                        <TableCell key={ix}>
                                                            {answer.userAnswer ==
                                                                answer.correctAnswer &&
                                                            1 == answer.correctAnswer ? (
                                                                <Typography
                                                                    className={classes.true}
                                                                >
                                                                    صحیح
                                                                </Typography>
                                                            ) : answer.userAnswer !=
                                                                  answer.correctAnswer &&
                                                              answer.userAnswer != "-" &&
                                                              1 == answer.correctAnswer ? (
                                                                <Typography
                                                                    className={classes.false}
                                                                >
                                                                    غلط
                                                                </Typography>
                                                            ) : answer.userAnswer !=
                                                                  answer.correctAnswer &&
                                                              answer.userAnswer == "-" &&
                                                              1 == answer.correctAnswer ? (
                                                                <Typography
                                                                    className={classes.undone}
                                                                >
                                                                    نزده
                                                                </Typography>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </TableCell>
                                                        <TableCell key={ix}>
                                                            {answer.userAnswer ==
                                                                answer.correctAnswer &&
                                                            2 == answer.correctAnswer ? (
                                                                <Typography
                                                                    className={classes.true}
                                                                >
                                                                    صحیح
                                                                </Typography>
                                                            ) : answer.userAnswer !=
                                                                  answer.correctAnswer &&
                                                              answer.userAnswer != "-" &&
                                                              2 == answer.correctAnswer ? (
                                                                <Typography
                                                                    className={classes.false}
                                                                >
                                                                    غلط
                                                                </Typography>
                                                            ) : answer.userAnswer !=
                                                                  answer.correctAnswer &&
                                                              answer.userAnswer == "-" &&
                                                              2 == answer.correctAnswer ? (
                                                                <Typography
                                                                    className={classes.undone}
                                                                >
                                                                    نزده
                                                                </Typography>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </TableCell>
                                                        <TableCell key={ix}>
                                                            {answer.userAnswer ==
                                                                answer.correctAnswer &&
                                                            3 == answer.correctAnswer ? (
                                                                <Typography
                                                                    className={classes.true}
                                                                >
                                                                    صحیح
                                                                </Typography>
                                                            ) : answer.userAnswer !=
                                                                  answer.correctAnswer &&
                                                              answer.userAnswer != "-" &&
                                                              3 == answer.correctAnswer ? (
                                                                <Typography
                                                                    className={classes.false}
                                                                >
                                                                    غلط
                                                                </Typography>
                                                            ) : answer.userAnswer !=
                                                                  answer.correctAnswer &&
                                                              answer.userAnswer == "-" &&
                                                              3 == answer.correctAnswer ? (
                                                                <Typography
                                                                    className={classes.undone}
                                                                >
                                                                    نزده
                                                                </Typography>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </TableCell>
                                                        <TableCell key={ix}>
                                                            {answer.userAnswer ==
                                                                answer.correctAnswer &&
                                                            4 == answer.correctAnswer ? (
                                                                <Typography
                                                                    className={classes.true}
                                                                >
                                                                    صحیح
                                                                </Typography>
                                                            ) : answer.userAnswer !=
                                                                  answer.correctAnswer &&
                                                              answer.userAnswer != "-" &&
                                                              4 == answer.correctAnswer ? (
                                                                <Typography
                                                                    className={classes.false}
                                                                >
                                                                    غلط
                                                                </Typography>
                                                            ) : answer.userAnswer !=
                                                                  answer.correctAnswer &&
                                                              answer.userAnswer == "-" &&
                                                              4 == answer.correctAnswer ? (
                                                                <Typography
                                                                    className={classes.undone}
                                                                >
                                                                    نزده
                                                                </Typography>
                                                            ) : (
                                                                ""
                                                            )}
                                                        </TableCell>
                                                        <TableCell>
                                                            {answer.gradeLevels.map(
                                                                (gradeLevel) => gradeLevel.title,
                                                            )}
                                                        </TableCell>
                                                        <TableCell>
                                                            {answer.chapters.map(
                                                                (chapter) => chapter.title,
                                                            )}
                                                        </TableCell>
                                                        <TableCell>
                                                            {answer.subjects.map(
                                                                (subject) => subject.title,
                                                            )}
                                                        </TableCell>

                                                        <TableCell>
                                                            {checkQuestionDifficulty(
                                                                answer.questionDifficulty,
                                                            )}
                                                        </TableCell>

                                                        <TableCell>
                                                            {checkQuestionType(answer.questionType)}
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            },
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </TableBody>

                    {/* <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.rawScore}</TableCell>
            <TableCell>{row.scientificLevel}</TableCell>
            <TableCell>{row.currentExam}</TableCell>
            <TableCell>{row.previousExam}</TableCell>
            <TableCell>{row.totalExam}</TableCell>
          </TableRow>
        ))}
      </TableBody> */}
                </Table>
            </Box>
            {/* <Box mt="20px" display="flex" justifyContent="center">
                <svg
                    width="1336"
                    height="656"
                    viewBox="0 0 1336 656"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1179.71 579.707C1180.1 579.317 1180.1 578.683 1179.71 578.293L1173.34 571.929C1172.95 571.538 1172.32 571.538 1171.93 571.929C1171.54 572.319 1171.54 572.953 1171.93 573.343L1177.59 579L1171.93 584.657C1171.54 585.047 1171.54 585.681 1171.93 586.071C1172.32 586.462 1172.95 586.462 1173.34 586.071L1179.71 579.707ZM179 580H1179V578H179V580Z"
                        fill="black"
                    />
                    <path
                        d="M181.207 66.2534C180.817 65.8629 180.183 65.8629 179.793 66.2534L173.429 72.6174C173.038 73.0079 173.038 73.6411 173.429 74.0316C173.819 74.4221 174.453 74.4221 174.843 74.0316L180.5 68.3747L186.157 74.0316C186.547 74.4221 187.181 74.4221 187.571 74.0316C187.962 73.6411 187.962 73.0079 187.571 72.6174L181.207 66.2534ZM181.5 579.04L181.5 66.9605H179.5L179.5 579.04H181.5Z"
                        fill="black"
                    />
                    <path
                        d="M135.846 49.228C135.846 48.88 135.888 48.55 135.972 48.238C136.068 47.926 136.2 47.614 136.368 47.302C136.548 46.99 136.77 46.678 137.034 46.366C137.298 46.042 137.604 45.694 137.952 45.322L137.124 44.494L138.366 43.162C139.11 43.894 139.728 44.53 140.22 45.07C140.724 45.61 141.126 46.102 141.426 46.546C141.726 46.978 141.936 47.386 142.056 47.77C142.188 48.154 142.254 48.55 142.254 48.958C142.254 49.402 142.17 49.81 142.002 50.182C141.834 50.554 141.606 50.878 141.318 51.154C141.03 51.418 140.682 51.628 140.274 51.784C139.878 51.928 139.446 52 138.978 52C138.51 52 138.084 51.934 137.7 51.802C137.316 51.67 136.986 51.484 136.71 51.244C136.434 50.992 136.218 50.698 136.062 50.362C135.918 50.026 135.846 49.648 135.846 49.228ZM140.418 48.814C140.418 48.67 140.4 48.532 140.364 48.4C140.328 48.256 140.262 48.1 140.166 47.932C140.07 47.764 139.926 47.578 139.734 47.374C139.554 47.158 139.32 46.906 139.032 46.618C138.732 46.906 138.492 47.164 138.312 47.392C138.132 47.608 137.994 47.806 137.898 47.986C137.802 48.154 137.736 48.31 137.7 48.454C137.676 48.586 137.664 48.718 137.664 48.85C137.664 49.162 137.778 49.438 138.006 49.678C138.234 49.906 138.576 50.02 139.032 50.02C139.476 50.02 139.818 49.9 140.058 49.66C140.298 49.42 140.418 49.138 140.418 48.814ZM147.496 50.02C147.916 50.02 148.204 49.936 148.36 49.768C148.516 49.6 148.594 49.432 148.594 49.264C148.594 49.168 148.576 49.048 148.54 48.904C148.504 48.748 148.432 48.502 148.324 48.166C148.216 47.818 148.054 47.344 147.838 46.744C147.634 46.144 147.352 45.358 146.992 44.386L148.738 43.648L150.592 48.832C150.736 49.252 150.904 49.558 151.096 49.75C151.3 49.93 151.612 50.02 152.032 50.02H152.266C152.53 50.02 152.662 50.338 152.662 50.974C152.662 51.658 152.53 52 152.266 52H152.032C151.636 52 151.252 51.928 150.88 51.784C150.52 51.64 150.19 51.334 149.89 50.866C149.638 51.298 149.32 51.598 148.936 51.766C148.564 51.922 148.156 52 147.712 52H143.842L143.752 50.02H147.496ZM153.054 50.02C153.882 50.02 154.296 49.63 154.296 48.85V46.726H156.114V48.85C156.114 49.27 156.24 49.57 156.492 49.75C156.756 49.93 157.056 50.02 157.392 50.02C158.292 50.02 158.742 49.63 158.742 48.85V46.726H160.578V48.85C160.578 49.27 160.686 49.57 160.902 49.75C161.13 49.93 161.394 50.02 161.694 50.02C162.054 50.02 162.33 49.924 162.522 49.732C162.726 49.528 162.828 49.234 162.828 48.85V46.726H164.664V48.976C164.664 49.972 164.406 50.728 163.89 51.244C163.386 51.748 162.678 52 161.766 52C161.358 52 160.968 51.928 160.596 51.784C160.224 51.628 159.9 51.322 159.624 50.866C159.336 51.322 158.994 51.628 158.598 51.784C158.214 51.928 157.812 52 157.392 52C156.936 52 156.516 51.928 156.132 51.784C155.76 51.628 155.436 51.322 155.16 50.866C154.872 51.322 154.548 51.628 154.188 51.784C153.828 51.928 153.444 52 153.036 52H152.262C152.106 52 152.004 51.922 151.956 51.766C151.896 51.598 151.866 51.358 151.866 51.046C151.866 50.698 151.896 50.44 151.956 50.272C152.004 50.104 152.106 50.02 152.262 50.02H153.054ZM160.596 42.1H158.688V40.354H160.596V42.1ZM161.856 44.62H159.984V42.856H161.856V44.62ZM159.282 44.62H157.41V42.856H159.282V44.62ZM177.891 50.02C178.695 50.02 179.097 49.63 179.097 48.85V46.726H180.933V48.85C180.933 49.27 181.065 49.57 181.329 49.75C181.605 49.93 181.917 50.02 182.265 50.02H182.625C182.781 50.02 182.883 50.104 182.931 50.272C182.991 50.428 183.021 50.662 183.021 50.974C183.021 51.322 182.991 51.58 182.931 51.748C182.883 51.916 182.781 52 182.625 52H182.193C181.749 52 181.335 51.928 180.951 51.784C180.579 51.628 180.255 51.322 179.979 50.866C179.691 51.322 179.367 51.628 179.007 51.784C178.659 51.928 178.287 52 177.891 52H171.825C171.333 52 170.907 51.928 170.547 51.784C170.199 51.628 169.911 51.424 169.683 51.172C169.467 50.92 169.305 50.626 169.197 50.29C169.101 49.954 169.053 49.6 169.053 49.228V46.672H170.889V48.76C170.889 49.156 170.973 49.468 171.141 49.696C171.321 49.912 171.687 50.02 172.239 50.02H177.891ZM176.037 55.852H174.003V54.016H176.037V55.852ZM183.411 50.02C184.239 50.02 184.653 49.63 184.653 48.85V46.726H186.471V48.85C186.471 49.27 186.597 49.57 186.849 49.75C187.113 49.93 187.413 50.02 187.749 50.02C188.649 50.02 189.099 49.63 189.099 48.85V46.726H190.935V48.85C190.935 49.27 191.043 49.57 191.259 49.75C191.487 49.93 191.751 50.02 192.051 50.02C192.807 50.02 193.185 49.63 193.185 48.85V46.726H195.021V48.85C195.021 49.27 195.147 49.57 195.399 49.75C195.663 49.93 195.957 50.02 196.281 50.02H196.695C196.851 50.02 196.953 50.104 197.001 50.272C197.061 50.428 197.091 50.662 197.091 50.974C197.091 51.322 197.061 51.58 197.001 51.748C196.953 51.916 196.851 52 196.695 52H196.281C195.825 52 195.405 51.928 195.021 51.784C194.649 51.628 194.325 51.322 194.049 50.866C193.761 51.322 193.431 51.628 193.059 51.784C192.699 51.928 192.363 52 192.051 52C191.631 52 191.247 51.928 190.899 51.784C190.563 51.628 190.257 51.322 189.981 50.866C189.693 51.322 189.351 51.628 188.955 51.784C188.571 51.928 188.169 52 187.749 52C187.293 52 186.873 51.928 186.489 51.784C186.117 51.628 185.793 51.322 185.517 50.866C185.229 51.322 184.905 51.628 184.545 51.784C184.185 51.928 183.801 52 183.393 52H182.619C182.463 52 182.361 51.922 182.313 51.766C182.253 51.598 182.223 51.358 182.223 51.046C182.223 50.698 182.253 50.44 182.313 50.272C182.361 50.104 182.463 50.02 182.619 50.02H183.411ZM201.163 50.02C201.487 50.02 201.709 49.954 201.829 49.822C201.961 49.69 202.027 49.528 202.027 49.336C202.027 49.156 201.991 48.982 201.919 48.814C201.859 48.634 201.721 48.442 201.505 48.238L198.103 44.836V42.784L204.061 40.534L204.475 42.37L199.885 44.062L202.531 46.744C202.831 47.044 203.077 47.32 203.269 47.572C203.461 47.812 203.611 48.046 203.719 48.274C203.827 48.49 203.899 48.712 203.935 48.94C203.983 49.156 204.007 49.384 204.007 49.624C204.007 50.044 203.935 50.404 203.791 50.704C203.659 51.004 203.473 51.25 203.233 51.442C203.005 51.634 202.729 51.778 202.405 51.874C202.093 51.958 201.751 52 201.379 52H196.699C196.543 52 196.441 51.922 196.393 51.766C196.333 51.598 196.303 51.358 196.303 51.046C196.303 50.698 196.333 50.44 196.393 50.272C196.441 50.104 196.543 50.02 196.699 50.02H201.163ZM211.867 50.02C212.287 50.02 212.575 49.936 212.731 49.768C212.887 49.6 212.965 49.432 212.965 49.264C212.965 49.168 212.947 49.048 212.911 48.904C212.875 48.748 212.803 48.502 212.695 48.166C212.587 47.818 212.425 47.344 212.209 46.744C212.005 46.144 211.723 45.358 211.363 44.386L213.109 43.648L214.963 48.832C215.107 49.252 215.275 49.558 215.467 49.75C215.671 49.93 215.983 50.02 216.403 50.02H216.637C216.901 50.02 217.033 50.338 217.033 50.974C217.033 51.658 216.901 52 216.637 52H216.403C216.007 52 215.623 51.928 215.251 51.784C214.891 51.64 214.561 51.334 214.261 50.866C214.009 51.298 213.691 51.598 213.307 51.766C212.935 51.922 212.527 52 212.083 52H208.213L208.123 50.02H211.867ZM221.529 50.002C222.477 48.322 223.353 47.104 224.157 46.348C224.961 45.58 225.771 45.196 226.587 45.196C227.067 45.196 227.499 45.286 227.883 45.466C228.279 45.646 228.609 45.892 228.873 46.204C229.149 46.504 229.359 46.87 229.503 47.302C229.647 47.722 229.719 48.172 229.719 48.652C229.719 49.072 229.653 49.48 229.521 49.876C229.401 50.272 229.209 50.632 228.945 50.956C228.681 51.268 228.345 51.52 227.937 51.712C227.529 51.904 227.043 52 226.479 52H221.619C221.163 52 220.743 51.928 220.359 51.784C219.975 51.628 219.645 51.322 219.369 50.866C219.093 51.322 218.769 51.628 218.397 51.784C218.037 51.928 217.653 52 217.245 52H216.633C216.477 52 216.375 51.922 216.327 51.766C216.267 51.598 216.237 51.358 216.237 51.046C216.237 50.698 216.267 50.44 216.327 50.272C216.375 50.104 216.477 50.02 216.633 50.02H217.263C218.103 50.02 218.523 49.63 218.523 48.85V46.726H220.341V48.85C220.341 49.21 220.449 49.486 220.665 49.678C220.893 49.87 221.181 49.978 221.529 50.002ZM227.883 48.652C227.883 48.28 227.757 47.944 227.505 47.644C227.265 47.332 226.905 47.176 226.425 47.176C225.993 47.176 225.531 47.398 225.039 47.842C224.559 48.274 224.001 49 223.365 50.02H226.551C226.935 50.02 227.253 49.906 227.505 49.678C227.757 49.438 227.883 49.096 227.883 48.652ZM233.992 51.712C233.992 52.36 233.878 52.966 233.65 53.53C233.434 54.094 233.128 54.586 232.732 55.006C232.348 55.426 231.886 55.756 231.346 55.996C230.818 56.236 230.248 56.356 229.636 56.356H228.502L228.412 54.394H229.168C229.708 54.394 230.17 54.316 230.554 54.16C230.926 54.016 231.232 53.818 231.472 53.566C231.712 53.314 231.886 53.026 231.994 52.702C232.102 52.378 232.156 52.048 232.156 51.712V46.726H233.992V51.712ZM242.258 47.5C242.582 47.872 242.816 48.244 242.96 48.616C243.116 48.976 243.194 49.33 243.194 49.678C243.194 50.002 243.134 50.308 243.014 50.596C242.906 50.872 242.738 51.118 242.51 51.334C242.282 51.538 241.994 51.7 241.646 51.82C241.31 51.94 240.92 52 240.476 52H235.67L235.58 50.02H240.17C240.758 50.02 241.052 49.798 241.052 49.354C241.052 49.138 240.95 48.916 240.746 48.688L237.686 45.196L239.108 43.864L242.258 47.5Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M141.386 99.098V94.724C141.386 94.004 141.368 93.386 141.332 92.87C141.296 92.342 141.242 91.868 141.17 91.448C141.098 91.028 141.008 90.632 140.9 90.26C140.804 89.876 140.696 89.468 140.576 89.036L142.322 88.406C142.478 88.874 142.61 89.33 142.718 89.774C142.838 90.206 142.934 90.662 143.006 91.142C143.078 91.61 143.132 92.126 143.168 92.69C143.204 93.254 143.222 93.902 143.222 94.634V99.098H141.386ZM148.038 91.052C148.434 91.052 148.812 91.142 149.172 91.322C149.544 91.49 149.874 91.718 150.162 92.006C150.45 92.282 150.678 92.606 150.846 92.978C151.026 93.338 151.116 93.716 151.116 94.112C151.116 94.508 151.026 94.892 150.846 95.264C150.678 95.636 150.45 95.966 150.162 96.254C149.874 96.53 149.544 96.758 149.172 96.938C148.812 97.106 148.434 97.19 148.038 97.19C147.642 97.19 147.258 97.106 146.886 96.938C146.514 96.758 146.184 96.53 145.896 96.254C145.608 95.966 145.374 95.636 145.194 95.264C145.026 94.892 144.942 94.508 144.942 94.112C144.942 93.716 145.026 93.338 145.194 92.978C145.374 92.606 145.608 92.282 145.896 92.006C146.184 91.718 146.514 91.49 146.886 91.322C147.258 91.142 147.642 91.052 148.038 91.052ZM148.038 95.426C148.206 95.426 148.368 95.39 148.524 95.318C148.68 95.246 148.818 95.15 148.938 95.03C149.07 94.91 149.172 94.772 149.244 94.616C149.328 94.46 149.37 94.292 149.37 94.112C149.37 93.944 149.328 93.782 149.244 93.626C149.172 93.47 149.07 93.332 148.938 93.212C148.818 93.08 148.68 92.978 148.524 92.906C148.368 92.834 148.206 92.798 148.038 92.798C147.87 92.798 147.702 92.834 147.534 92.906C147.378 92.978 147.234 93.08 147.102 93.212C146.982 93.332 146.88 93.47 146.796 93.626C146.724 93.782 146.688 93.944 146.688 94.112C146.688 94.292 146.724 94.46 146.796 94.616C146.88 94.772 146.982 94.91 147.102 95.03C147.234 95.15 147.378 95.246 147.534 95.318C147.702 95.39 147.87 95.426 148.038 95.426ZM155.895 91.052C156.291 91.052 156.669 91.142 157.029 91.322C157.401 91.49 157.731 91.718 158.019 92.006C158.307 92.282 158.535 92.606 158.703 92.978C158.883 93.338 158.973 93.716 158.973 94.112C158.973 94.508 158.883 94.892 158.703 95.264C158.535 95.636 158.307 95.966 158.019 96.254C157.731 96.53 157.401 96.758 157.029 96.938C156.669 97.106 156.291 97.19 155.895 97.19C155.499 97.19 155.115 97.106 154.743 96.938C154.371 96.758 154.041 96.53 153.753 96.254C153.465 95.966 153.231 95.636 153.051 95.264C152.883 94.892 152.799 94.508 152.799 94.112C152.799 93.716 152.883 93.338 153.051 92.978C153.231 92.606 153.465 92.282 153.753 92.006C154.041 91.718 154.371 91.49 154.743 91.322C155.115 91.142 155.499 91.052 155.895 91.052ZM155.895 95.426C156.063 95.426 156.225 95.39 156.381 95.318C156.537 95.246 156.675 95.15 156.795 95.03C156.927 94.91 157.029 94.772 157.101 94.616C157.185 94.46 157.227 94.292 157.227 94.112C157.227 93.944 157.185 93.782 157.101 93.626C157.029 93.47 156.927 93.332 156.795 93.212C156.675 93.08 156.537 92.978 156.381 92.906C156.225 92.834 156.063 92.798 155.895 92.798C155.727 92.798 155.559 92.834 155.391 92.906C155.235 92.978 155.091 93.08 154.959 93.212C154.839 93.332 154.737 93.47 154.653 93.626C154.581 93.782 154.545 93.944 154.545 94.112C154.545 94.292 154.581 94.46 154.653 94.616C154.737 94.772 154.839 94.91 154.959 95.03C155.091 95.15 155.235 95.246 155.391 95.318C155.559 95.39 155.727 95.426 155.895 95.426Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M147.058 146.098V141.4C146.566 141.592 146.02 141.688 145.42 141.688C144.952 141.688 144.544 141.616 144.196 141.472C143.86 141.328 143.584 141.13 143.368 140.878C143.152 140.626 142.99 140.332 142.882 139.996C142.786 139.66 142.738 139.3 142.738 138.916C142.738 138.46 142.81 138.016 142.954 137.584C143.11 137.14 143.32 136.75 143.584 136.414C143.86 136.078 144.19 135.808 144.574 135.604C144.97 135.4 145.402 135.298 145.87 135.298C146.41 135.298 146.866 135.418 147.238 135.658C147.622 135.898 147.928 136.222 148.156 136.63C148.396 137.026 148.57 137.488 148.678 138.016C148.786 138.544 148.84 139.102 148.84 139.69V146.098H147.058ZM147.058 139.312C147.058 139.048 147.034 138.79 146.986 138.538C146.938 138.274 146.86 138.046 146.752 137.854C146.644 137.662 146.506 137.506 146.338 137.386C146.17 137.266 145.966 137.206 145.726 137.206C145.534 137.206 145.36 137.248 145.204 137.332C145.048 137.416 144.916 137.53 144.808 137.674C144.7 137.806 144.616 137.962 144.556 138.142C144.508 138.31 144.484 138.478 144.484 138.646C144.484 138.97 144.586 139.216 144.79 139.384C144.994 139.552 145.288 139.636 145.672 139.636C145.948 139.636 146.188 139.612 146.392 139.564C146.608 139.516 146.83 139.432 147.058 139.312ZM153.729 138.052C154.125 138.052 154.503 138.142 154.863 138.322C155.235 138.49 155.565 138.718 155.853 139.006C156.141 139.282 156.369 139.606 156.537 139.978C156.717 140.338 156.807 140.716 156.807 141.112C156.807 141.508 156.717 141.892 156.537 142.264C156.369 142.636 156.141 142.966 155.853 143.254C155.565 143.53 155.235 143.758 154.863 143.938C154.503 144.106 154.125 144.19 153.729 144.19C153.333 144.19 152.949 144.106 152.577 143.938C152.205 143.758 151.875 143.53 151.587 143.254C151.299 142.966 151.065 142.636 150.885 142.264C150.717 141.892 150.633 141.508 150.633 141.112C150.633 140.716 150.717 140.338 150.885 139.978C151.065 139.606 151.299 139.282 151.587 139.006C151.875 138.718 152.205 138.49 152.577 138.322C152.949 138.142 153.333 138.052 153.729 138.052ZM153.729 142.426C153.897 142.426 154.059 142.39 154.215 142.318C154.371 142.246 154.509 142.15 154.629 142.03C154.761 141.91 154.863 141.772 154.935 141.616C155.019 141.46 155.061 141.292 155.061 141.112C155.061 140.944 155.019 140.782 154.935 140.626C154.863 140.47 154.761 140.332 154.629 140.212C154.509 140.08 154.371 139.978 154.215 139.906C154.059 139.834 153.897 139.798 153.729 139.798C153.561 139.798 153.393 139.834 153.225 139.906C153.069 139.978 152.925 140.08 152.793 140.212C152.673 140.332 152.571 140.47 152.487 140.626C152.415 140.782 152.379 140.944 152.379 141.112C152.379 141.292 152.415 141.46 152.487 141.616C152.571 141.772 152.673 141.91 152.793 142.03C152.925 142.15 153.069 142.246 153.225 142.318C153.393 142.39 153.561 142.426 153.729 142.426Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M145.644 185.754C145.536 186.414 145.416 187.038 145.284 187.626C145.152 188.214 144.978 188.808 144.762 189.408C144.558 189.996 144.306 190.608 144.006 191.244C143.706 191.88 143.328 192.564 142.872 193.296L141.36 192.324C141.816 191.556 142.218 190.818 142.566 190.11C142.926 189.402 143.25 188.67 143.538 187.914C143.826 187.146 144.09 186.324 144.33 185.448C144.57 184.56 144.798 183.546 145.014 182.406H146.292C146.508 183.546 146.73 184.56 146.958 185.448C147.198 186.324 147.462 187.146 147.75 187.914C148.038 188.67 148.362 189.402 148.722 190.11C149.082 190.818 149.49 191.556 149.946 192.324L148.416 193.296C147.96 192.564 147.582 191.88 147.282 191.244C146.982 190.608 146.73 189.996 146.526 189.408C146.322 188.808 146.154 188.214 146.022 187.626C145.89 187.038 145.764 186.414 145.644 185.754ZM154.241 185.052C154.637 185.052 155.015 185.142 155.375 185.322C155.747 185.49 156.077 185.718 156.365 186.006C156.653 186.282 156.881 186.606 157.049 186.978C157.229 187.338 157.319 187.716 157.319 188.112C157.319 188.508 157.229 188.892 157.049 189.264C156.881 189.636 156.653 189.966 156.365 190.254C156.077 190.53 155.747 190.758 155.375 190.938C155.015 191.106 154.637 191.19 154.241 191.19C153.845 191.19 153.461 191.106 153.089 190.938C152.717 190.758 152.387 190.53 152.099 190.254C151.811 189.966 151.577 189.636 151.397 189.264C151.229 188.892 151.145 188.508 151.145 188.112C151.145 187.716 151.229 187.338 151.397 186.978C151.577 186.606 151.811 186.282 152.099 186.006C152.387 185.718 152.717 185.49 153.089 185.322C153.461 185.142 153.845 185.052 154.241 185.052ZM154.241 189.426C154.409 189.426 154.571 189.39 154.727 189.318C154.883 189.246 155.021 189.15 155.141 189.03C155.273 188.91 155.375 188.772 155.447 188.616C155.531 188.46 155.573 188.292 155.573 188.112C155.573 187.944 155.531 187.782 155.447 187.626C155.375 187.47 155.273 187.332 155.141 187.212C155.021 187.08 154.883 186.978 154.727 186.906C154.571 186.834 154.409 186.798 154.241 186.798C154.073 186.798 153.905 186.834 153.737 186.906C153.581 186.978 153.437 187.08 153.305 187.212C153.185 187.332 153.083 187.47 152.999 187.626C152.927 187.782 152.891 187.944 152.891 188.112C152.891 188.292 152.927 188.46 152.999 188.616C153.083 188.772 153.185 188.91 153.305 189.03C153.437 189.15 153.581 189.246 153.737 189.318C153.905 189.39 154.073 189.426 154.241 189.426Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M145.644 236.75C145.764 236.09 145.89 235.466 146.022 234.878C146.154 234.278 146.322 233.684 146.526 233.096C146.73 232.496 146.982 231.884 147.282 231.26C147.582 230.624 147.96 229.94 148.416 229.208L149.946 230.162C149.49 230.942 149.082 231.686 148.722 232.394C148.362 233.09 148.038 233.822 147.75 234.59C147.462 235.346 147.198 236.168 146.958 237.056C146.73 237.944 146.508 238.958 146.292 240.098H145.014C144.798 238.958 144.57 237.944 144.33 237.056C144.09 236.168 143.826 235.346 143.538 234.59C143.25 233.822 142.926 233.09 142.566 232.394C142.218 231.686 141.816 230.942 141.36 230.162L142.872 229.208C143.328 229.94 143.706 230.624 144.006 231.26C144.306 231.884 144.558 232.496 144.762 233.096C144.978 233.684 145.152 234.278 145.284 234.878C145.416 235.466 145.536 236.09 145.644 236.75ZM154.241 232.052C154.637 232.052 155.015 232.142 155.375 232.322C155.747 232.49 156.077 232.718 156.365 233.006C156.653 233.282 156.881 233.606 157.049 233.978C157.229 234.338 157.319 234.716 157.319 235.112C157.319 235.508 157.229 235.892 157.049 236.264C156.881 236.636 156.653 236.966 156.365 237.254C156.077 237.53 155.747 237.758 155.375 237.938C155.015 238.106 154.637 238.19 154.241 238.19C153.845 238.19 153.461 238.106 153.089 237.938C152.717 237.758 152.387 237.53 152.099 237.254C151.811 236.966 151.577 236.636 151.397 236.264C151.229 235.892 151.145 235.508 151.145 235.112C151.145 234.716 151.229 234.338 151.397 233.978C151.577 233.606 151.811 233.282 152.099 233.006C152.387 232.718 152.717 232.49 153.089 232.322C153.461 232.142 153.845 232.052 154.241 232.052ZM154.241 236.426C154.409 236.426 154.571 236.39 154.727 236.318C154.883 236.246 155.021 236.15 155.141 236.03C155.273 235.91 155.375 235.772 155.447 235.616C155.531 235.46 155.573 235.292 155.573 235.112C155.573 234.944 155.531 234.782 155.447 234.626C155.375 234.47 155.273 234.332 155.141 234.212C155.021 234.08 154.883 233.978 154.727 233.906C154.571 233.834 154.409 233.798 154.241 233.798C154.073 233.798 153.905 233.834 153.737 233.906C153.581 233.978 153.437 234.08 153.305 234.212C153.185 234.332 153.083 234.47 152.999 234.626C152.927 234.782 152.891 234.944 152.891 235.112C152.891 235.292 152.927 235.46 152.999 235.616C153.083 235.772 153.185 235.91 153.305 236.03C153.437 236.15 153.581 236.246 153.737 236.318C153.905 236.39 154.073 236.426 154.241 236.426Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M147.166 278.458C146.986 278.374 146.788 278.314 146.572 278.278C146.368 278.23 146.182 278.206 146.014 278.206C145.618 278.206 145.294 278.32 145.042 278.548C144.79 278.776 144.664 279.064 144.664 279.412C144.664 279.76 144.772 280.042 144.988 280.258C145.216 280.474 145.534 280.582 145.942 280.582C146.29 280.582 146.644 280.534 147.004 280.438C147.376 280.33 147.754 280.186 148.138 280.006L149.038 281.338C148.114 282.202 147.298 283.12 146.59 284.092C145.882 285.052 145.192 286.12 144.52 287.296L142.99 286.252C143.434 285.508 143.896 284.8 144.376 284.128C144.868 283.444 145.384 282.82 145.924 282.256C145.696 282.268 145.48 282.262 145.276 282.238C145.084 282.214 144.898 282.178 144.718 282.13C144.058 281.938 143.578 281.608 143.278 281.14C142.99 280.66 142.846 280.114 142.846 279.502C142.846 279.094 142.918 278.698 143.062 278.314C143.206 277.93 143.404 277.588 143.656 277.288C143.92 276.988 144.232 276.748 144.592 276.568C144.952 276.388 145.354 276.298 145.798 276.298C146.11 276.298 146.416 276.334 146.716 276.406C147.016 276.466 147.358 276.592 147.742 276.784L147.166 278.458ZM153.536 279.052C153.932 279.052 154.31 279.142 154.67 279.322C155.042 279.49 155.372 279.718 155.66 280.006C155.948 280.282 156.176 280.606 156.344 280.978C156.524 281.338 156.614 281.716 156.614 282.112C156.614 282.508 156.524 282.892 156.344 283.264C156.176 283.636 155.948 283.966 155.66 284.254C155.372 284.53 155.042 284.758 154.67 284.938C154.31 285.106 153.932 285.19 153.536 285.19C153.14 285.19 152.756 285.106 152.384 284.938C152.012 284.758 151.682 284.53 151.394 284.254C151.106 283.966 150.872 283.636 150.692 283.264C150.524 282.892 150.44 282.508 150.44 282.112C150.44 281.716 150.524 281.338 150.692 280.978C150.872 280.606 151.106 280.282 151.394 280.006C151.682 279.718 152.012 279.49 152.384 279.322C152.756 279.142 153.14 279.052 153.536 279.052ZM153.536 283.426C153.704 283.426 153.866 283.39 154.022 283.318C154.178 283.246 154.316 283.15 154.436 283.03C154.568 282.91 154.67 282.772 154.742 282.616C154.826 282.46 154.868 282.292 154.868 282.112C154.868 281.944 154.826 281.782 154.742 281.626C154.67 281.47 154.568 281.332 154.436 281.212C154.316 281.08 154.178 280.978 154.022 280.906C153.866 280.834 153.704 280.798 153.536 280.798C153.368 280.798 153.2 280.834 153.032 280.906C152.876 280.978 152.732 281.08 152.6 281.212C152.48 281.332 152.378 281.47 152.294 281.626C152.222 281.782 152.186 281.944 152.186 282.112C152.186 282.292 152.222 282.46 152.294 282.616C152.378 282.772 152.48 282.91 152.6 283.03C152.732 283.15 152.876 283.246 153.032 283.318C153.2 283.39 153.368 283.426 153.536 283.426Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M141.346 331.452C141.346 331.08 141.388 330.69 141.472 330.282C141.568 329.862 141.742 329.406 141.994 328.914C142.246 328.41 142.594 327.852 143.038 327.24C143.482 326.616 144.052 325.908 144.748 325.116L144.01 324.468L145.126 323.136C146.302 324.096 147.256 324.96 147.988 325.728C148.72 326.496 149.284 327.204 149.68 327.852C150.088 328.488 150.364 329.076 150.508 329.616C150.652 330.144 150.724 330.654 150.724 331.146C150.724 331.65 150.64 332.094 150.472 332.478C150.316 332.862 150.106 333.18 149.842 333.432C149.578 333.684 149.278 333.87 148.942 333.99C148.618 334.122 148.288 334.188 147.952 334.188C147.496 334.188 147.112 334.11 146.8 333.954C146.488 333.81 146.212 333.594 145.972 333.306C145.72 333.606 145.414 333.828 145.054 333.972C144.694 334.116 144.34 334.188 143.992 334.188C143.164 334.188 142.516 333.942 142.048 333.45C141.58 332.958 141.346 332.292 141.346 331.452ZM148.96 331.092C148.96 330.84 148.924 330.558 148.852 330.246C148.78 329.922 148.636 329.562 148.42 329.166C148.216 328.77 147.916 328.332 147.52 327.852C147.124 327.372 146.602 326.844 145.954 326.268C144.946 327.336 144.214 328.26 143.758 329.04C143.314 329.82 143.092 330.486 143.092 331.038C143.092 331.386 143.182 331.674 143.362 331.902C143.554 332.118 143.83 332.226 144.19 332.226C144.49 332.226 144.754 332.136 144.982 331.956C145.222 331.776 145.342 331.452 145.342 330.984V329.904H146.962V330.768C146.962 330.984 146.95 331.176 146.926 331.344C146.902 331.5 146.866 331.65 146.818 331.794C147.106 332.082 147.448 332.226 147.844 332.226C148.168 332.226 148.432 332.124 148.636 331.92C148.852 331.716 148.96 331.44 148.96 331.092ZM155.499 326.052C155.895 326.052 156.273 326.142 156.633 326.322C157.005 326.49 157.335 326.718 157.623 327.006C157.911 327.282 158.139 327.606 158.307 327.978C158.487 328.338 158.577 328.716 158.577 329.112C158.577 329.508 158.487 329.892 158.307 330.264C158.139 330.636 157.911 330.966 157.623 331.254C157.335 331.53 157.005 331.758 156.633 331.938C156.273 332.106 155.895 332.19 155.499 332.19C155.103 332.19 154.719 332.106 154.347 331.938C153.975 331.758 153.645 331.53 153.357 331.254C153.069 330.966 152.835 330.636 152.655 330.264C152.487 329.892 152.403 329.508 152.403 329.112C152.403 328.716 152.487 328.338 152.655 327.978C152.835 327.606 153.069 327.282 153.357 327.006C153.645 326.718 153.975 326.49 154.347 326.322C154.719 326.142 155.103 326.052 155.499 326.052ZM155.499 330.426C155.667 330.426 155.829 330.39 155.985 330.318C156.141 330.246 156.279 330.15 156.399 330.03C156.531 329.91 156.633 329.772 156.705 329.616C156.789 329.46 156.831 329.292 156.831 329.112C156.831 328.944 156.789 328.782 156.705 328.626C156.633 328.47 156.531 328.332 156.399 328.212C156.279 328.08 156.141 327.978 155.985 327.906C155.829 327.834 155.667 327.798 155.499 327.798C155.331 327.798 155.163 327.834 154.995 327.906C154.839 327.978 154.695 328.08 154.563 328.212C154.443 328.332 154.341 328.47 154.257 328.626C154.185 328.782 154.149 328.944 154.149 329.112C154.149 329.292 154.185 329.46 154.257 329.616C154.341 329.772 154.443 329.91 154.563 330.03C154.695 330.15 154.839 330.246 154.995 330.318C155.163 330.39 155.331 330.426 155.499 330.426Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M146.886 376.508C146.37 376.508 145.866 376.448 145.374 376.328C144.894 376.196 144.498 376.01 144.186 375.77C144.198 375.938 144.204 376.118 144.204 376.31C144.216 376.49 144.222 376.676 144.222 376.868V381.098H142.386V376.724C142.386 376.004 142.368 375.386 142.332 374.87C142.296 374.342 142.242 373.868 142.17 373.448C142.098 373.028 142.008 372.632 141.9 372.26C141.804 371.876 141.696 371.468 141.576 371.036L143.322 370.406C143.478 370.946 143.604 371.438 143.7 371.882C143.808 372.314 143.916 372.758 144.024 373.214C144.108 373.514 144.21 373.754 144.33 373.934C144.462 374.114 144.714 374.27 145.086 374.402C144.906 374.162 144.798 373.922 144.762 373.682C144.726 373.43 144.708 373.208 144.708 373.016C144.708 372.656 144.78 372.314 144.924 371.99C145.08 371.654 145.29 371.366 145.554 371.126C145.818 370.874 146.13 370.676 146.49 370.532C146.862 370.376 147.258 370.298 147.678 370.298C147.978 370.298 148.284 370.328 148.596 370.388C148.908 370.448 149.262 370.556 149.658 370.712L149.118 372.512C148.782 372.392 148.512 372.314 148.308 372.278C148.104 372.23 147.894 372.206 147.678 372.206C147.306 372.206 146.994 372.32 146.742 372.548C146.502 372.764 146.382 373.052 146.382 373.412C146.382 373.76 146.484 374.048 146.688 374.276C146.904 374.492 147.162 374.6 147.462 374.6C147.822 374.6 148.182 374.552 148.542 374.456C148.902 374.348 149.28 374.216 149.676 374.06L150.144 375.716C149.496 376.016 148.914 376.226 148.398 376.346C147.894 376.454 147.39 376.508 146.886 376.508ZM154.786 373.052C155.182 373.052 155.56 373.142 155.92 373.322C156.292 373.49 156.622 373.718 156.91 374.006C157.198 374.282 157.426 374.606 157.594 374.978C157.774 375.338 157.864 375.716 157.864 376.112C157.864 376.508 157.774 376.892 157.594 377.264C157.426 377.636 157.198 377.966 156.91 378.254C156.622 378.53 156.292 378.758 155.92 378.938C155.56 379.106 155.182 379.19 154.786 379.19C154.39 379.19 154.006 379.106 153.634 378.938C153.262 378.758 152.932 378.53 152.644 378.254C152.356 377.966 152.122 377.636 151.942 377.264C151.774 376.892 151.69 376.508 151.69 376.112C151.69 375.716 151.774 375.338 151.942 374.978C152.122 374.606 152.356 374.282 152.644 374.006C152.932 373.718 153.262 373.49 153.634 373.322C154.006 373.142 154.39 373.052 154.786 373.052ZM154.786 377.426C154.954 377.426 155.116 377.39 155.272 377.318C155.428 377.246 155.566 377.15 155.686 377.03C155.818 376.91 155.92 376.772 155.992 376.616C156.076 376.46 156.118 376.292 156.118 376.112C156.118 375.944 156.076 375.782 155.992 375.626C155.92 375.47 155.818 375.332 155.686 375.212C155.566 375.08 155.428 374.978 155.272 374.906C155.116 374.834 154.954 374.798 154.786 374.798C154.618 374.798 154.45 374.834 154.282 374.906C154.126 374.978 153.982 375.08 153.85 375.212C153.73 375.332 153.628 375.47 153.544 375.626C153.472 375.782 153.436 375.944 153.436 376.112C153.436 376.292 153.472 376.46 153.544 376.616C153.628 376.772 153.73 376.91 153.85 377.03C153.982 377.15 154.126 377.246 154.282 377.318C154.45 377.39 154.618 377.426 154.786 377.426Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M146.678 417.406C146.774 417.85 146.846 418.294 146.894 418.738C146.954 419.17 146.984 419.572 146.984 419.944C146.984 420.016 146.978 420.088 146.966 420.16C146.966 420.232 146.954 420.316 146.93 420.412C147.062 420.556 147.212 420.664 147.38 420.736C147.548 420.808 147.71 420.844 147.866 420.844C148.202 420.844 148.46 420.748 148.64 420.556C148.82 420.364 148.91 420.148 148.91 419.908C148.91 419.464 148.814 418.762 148.622 417.802L150.368 417.406C150.464 417.85 150.536 418.294 150.584 418.738C150.632 419.182 150.656 419.596 150.656 419.98C150.656 420.388 150.596 420.766 150.476 421.114C150.356 421.45 150.182 421.744 149.954 421.996C149.738 422.248 149.468 422.446 149.144 422.59C148.832 422.734 148.484 422.806 148.1 422.806C147.764 422.806 147.434 422.746 147.11 422.626C146.798 422.506 146.498 422.296 146.21 421.996C145.982 422.26 145.718 422.464 145.418 422.608C145.118 422.74 144.77 422.806 144.374 422.806C143.834 422.806 143.426 422.662 143.15 422.374C143.174 422.602 143.192 422.842 143.204 423.094C143.216 423.334 143.222 423.592 143.222 423.868V428.098H141.386V423.724C141.386 423.004 141.368 422.386 141.332 421.87C141.296 421.342 141.242 420.868 141.17 420.448C141.098 420.028 141.008 419.632 140.9 419.26C140.804 418.876 140.696 418.468 140.576 418.036L142.322 417.406C142.43 417.826 142.526 418.204 142.61 418.54C142.706 418.876 142.802 419.224 142.898 419.584C142.946 419.752 143 419.914 143.06 420.07C143.12 420.226 143.198 420.364 143.294 420.484C143.39 420.592 143.504 420.682 143.636 420.754C143.78 420.814 143.954 420.844 144.158 420.844C144.494 420.844 144.752 420.754 144.932 420.574C145.124 420.394 145.22 420.166 145.22 419.89C145.22 419.518 145.118 418.822 144.914 417.802L146.678 417.406ZM155.368 420.052C155.764 420.052 156.142 420.142 156.502 420.322C156.874 420.49 157.204 420.718 157.492 421.006C157.78 421.282 158.008 421.606 158.176 421.978C158.356 422.338 158.446 422.716 158.446 423.112C158.446 423.508 158.356 423.892 158.176 424.264C158.008 424.636 157.78 424.966 157.492 425.254C157.204 425.53 156.874 425.758 156.502 425.938C156.142 426.106 155.764 426.19 155.368 426.19C154.972 426.19 154.588 426.106 154.216 425.938C153.844 425.758 153.514 425.53 153.226 425.254C152.938 424.966 152.704 424.636 152.524 424.264C152.356 423.892 152.272 423.508 152.272 423.112C152.272 422.716 152.356 422.338 152.524 421.978C152.704 421.606 152.938 421.282 153.226 421.006C153.514 420.718 153.844 420.49 154.216 420.322C154.588 420.142 154.972 420.052 155.368 420.052ZM155.368 424.426C155.536 424.426 155.698 424.39 155.854 424.318C156.01 424.246 156.148 424.15 156.268 424.03C156.4 423.91 156.502 423.772 156.574 423.616C156.658 423.46 156.7 423.292 156.7 423.112C156.7 422.944 156.658 422.782 156.574 422.626C156.502 422.47 156.4 422.332 156.268 422.212C156.148 422.08 156.01 421.978 155.854 421.906C155.698 421.834 155.536 421.798 155.368 421.798C155.2 421.798 155.032 421.834 154.864 421.906C154.708 421.978 154.564 422.08 154.432 422.212C154.312 422.332 154.21 422.47 154.126 422.626C154.054 422.782 154.018 422.944 154.018 423.112C154.018 423.292 154.054 423.46 154.126 423.616C154.21 423.772 154.312 423.91 154.432 424.03C154.564 424.15 154.708 424.246 154.864 424.318C155.032 424.39 155.2 424.426 155.368 424.426Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M146.374 469.806C145.834 469.806 145.426 469.662 145.15 469.374C145.174 469.602 145.192 469.842 145.204 470.094C145.216 470.334 145.222 470.592 145.222 470.868V475.098H143.386V470.724C143.386 470.004 143.368 469.386 143.332 468.87C143.296 468.342 143.242 467.868 143.17 467.448C143.098 467.028 143.008 466.632 142.9 466.26C142.804 465.876 142.696 465.468 142.576 465.036L144.322 464.406C144.43 464.826 144.526 465.204 144.61 465.54C144.706 465.876 144.802 466.224 144.898 466.584C144.946 466.752 145 466.914 145.06 467.07C145.12 467.226 145.198 467.364 145.294 467.484C145.39 467.592 145.504 467.682 145.636 467.754C145.78 467.814 145.954 467.844 146.158 467.844C146.494 467.844 146.752 467.754 146.932 467.574C147.124 467.394 147.22 467.166 147.22 466.89C147.22 466.518 147.118 465.822 146.914 464.802L148.678 464.406C148.774 464.85 148.846 465.294 148.894 465.738C148.954 466.17 148.984 466.572 148.984 466.944C148.984 467.364 148.918 467.754 148.786 468.114C148.666 468.462 148.492 468.762 148.264 469.014C148.048 469.266 147.778 469.464 147.454 469.608C147.13 469.74 146.77 469.806 146.374 469.806ZM153.676 467.052C154.072 467.052 154.45 467.142 154.81 467.322C155.182 467.49 155.512 467.718 155.8 468.006C156.088 468.282 156.316 468.606 156.484 468.978C156.664 469.338 156.754 469.716 156.754 470.112C156.754 470.508 156.664 470.892 156.484 471.264C156.316 471.636 156.088 471.966 155.8 472.254C155.512 472.53 155.182 472.758 154.81 472.938C154.45 473.106 154.072 473.19 153.676 473.19C153.28 473.19 152.896 473.106 152.524 472.938C152.152 472.758 151.822 472.53 151.534 472.254C151.246 471.966 151.012 471.636 150.832 471.264C150.664 470.892 150.58 470.508 150.58 470.112C150.58 469.716 150.664 469.338 150.832 468.978C151.012 468.606 151.246 468.282 151.534 468.006C151.822 467.718 152.152 467.49 152.524 467.322C152.896 467.142 153.28 467.052 153.676 467.052ZM153.676 471.426C153.844 471.426 154.006 471.39 154.162 471.318C154.318 471.246 154.456 471.15 154.576 471.03C154.708 470.91 154.81 470.772 154.882 470.616C154.966 470.46 155.008 470.292 155.008 470.112C155.008 469.944 154.966 469.782 154.882 469.626C154.81 469.47 154.708 469.332 154.576 469.212C154.456 469.08 154.318 468.978 154.162 468.906C154.006 468.834 153.844 468.798 153.676 468.798C153.508 468.798 153.34 468.834 153.172 468.906C153.016 468.978 152.872 469.08 152.74 469.212C152.62 469.332 152.518 469.47 152.434 469.626C152.362 469.782 152.326 469.944 152.326 470.112C152.326 470.292 152.362 470.46 152.434 470.616C152.518 470.772 152.62 470.91 152.74 471.03C152.872 471.15 153.016 471.246 153.172 471.318C153.34 471.39 153.508 471.426 153.676 471.426Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M145.386 522.098V517.724C145.386 517.004 145.368 516.386 145.332 515.87C145.296 515.342 145.242 514.868 145.17 514.448C145.098 514.028 145.008 513.632 144.9 513.26C144.804 512.876 144.696 512.468 144.576 512.036L146.322 511.406C146.478 511.874 146.61 512.33 146.718 512.774C146.838 513.206 146.934 513.662 147.006 514.142C147.078 514.61 147.132 515.126 147.168 515.69C147.204 516.254 147.222 516.902 147.222 517.634V522.098H145.386ZM152.038 514.052C152.434 514.052 152.812 514.142 153.172 514.322C153.544 514.49 153.874 514.718 154.162 515.006C154.45 515.282 154.678 515.606 154.846 515.978C155.026 516.338 155.116 516.716 155.116 517.112C155.116 517.508 155.026 517.892 154.846 518.264C154.678 518.636 154.45 518.966 154.162 519.254C153.874 519.53 153.544 519.758 153.172 519.938C152.812 520.106 152.434 520.19 152.038 520.19C151.642 520.19 151.258 520.106 150.886 519.938C150.514 519.758 150.184 519.53 149.896 519.254C149.608 518.966 149.374 518.636 149.194 518.264C149.026 517.892 148.942 517.508 148.942 517.112C148.942 516.716 149.026 516.338 149.194 515.978C149.374 515.606 149.608 515.282 149.896 515.006C150.184 514.718 150.514 514.49 150.886 514.322C151.258 514.142 151.642 514.052 152.038 514.052ZM152.038 518.426C152.206 518.426 152.368 518.39 152.524 518.318C152.68 518.246 152.818 518.15 152.938 518.03C153.07 517.91 153.172 517.772 153.244 517.616C153.328 517.46 153.37 517.292 153.37 517.112C153.37 516.944 153.328 516.782 153.244 516.626C153.172 516.47 153.07 516.332 152.938 516.212C152.818 516.08 152.68 515.978 152.524 515.906C152.368 515.834 152.206 515.798 152.038 515.798C151.87 515.798 151.702 515.834 151.534 515.906C151.378 515.978 151.234 516.08 151.102 516.212C150.982 516.332 150.88 516.47 150.796 516.626C150.724 516.782 150.688 516.944 150.688 517.112C150.688 517.292 150.724 517.46 150.796 517.616C150.88 517.772 150.982 517.91 151.102 518.03C151.234 518.15 151.378 518.246 151.534 518.318C151.702 518.39 151.87 518.426 152.038 518.426Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M149.942 561.052C150.338 561.052 150.716 561.142 151.076 561.322C151.448 561.49 151.778 561.718 152.066 562.006C152.354 562.282 152.582 562.606 152.75 562.978C152.93 563.338 153.02 563.716 153.02 564.112C153.02 564.508 152.93 564.892 152.75 565.264C152.582 565.636 152.354 565.966 152.066 566.254C151.778 566.53 151.448 566.758 151.076 566.938C150.716 567.106 150.338 567.19 149.942 567.19C149.546 567.19 149.162 567.106 148.79 566.938C148.418 566.758 148.088 566.53 147.8 566.254C147.512 565.966 147.278 565.636 147.098 565.264C146.93 564.892 146.846 564.508 146.846 564.112C146.846 563.716 146.93 563.338 147.098 562.978C147.278 562.606 147.512 562.282 147.8 562.006C148.088 561.718 148.418 561.49 148.79 561.322C149.162 561.142 149.546 561.052 149.942 561.052ZM149.942 565.426C150.11 565.426 150.272 565.39 150.428 565.318C150.584 565.246 150.722 565.15 150.842 565.03C150.974 564.91 151.076 564.772 151.148 564.616C151.232 564.46 151.274 564.292 151.274 564.112C151.274 563.944 151.232 563.782 151.148 563.626C151.076 563.47 150.974 563.332 150.842 563.212C150.722 563.08 150.584 562.978 150.428 562.906C150.272 562.834 150.11 562.798 149.942 562.798C149.774 562.798 149.606 562.834 149.438 562.906C149.282 562.978 149.138 563.08 149.006 563.212C148.886 563.332 148.784 563.47 148.7 563.626C148.628 563.782 148.592 563.944 148.592 564.112C148.592 564.292 148.628 564.46 148.7 564.616C148.784 564.772 148.886 564.91 149.006 565.03C149.138 565.15 149.282 565.246 149.438 565.318C149.606 565.39 149.774 565.426 149.942 565.426Z"
                        fill="#1D252F"
                    />
                    <line
                        x1="312.997"
                        y1="409.5"
                        x2="658.003"
                        y2="409.5"
                        stroke="#FFAD63"
                        stroke-width="11"
                    />
                    <rect x="428" y="354" width="77.1076" height="44.2567" rx="8" fill="#FFAD63" />
                    <path
                        d="M444.78 381.424C445.308 381.427 445.746 381.393 446.094 381.322C446.455 381.252 446.737 381.151 446.942 381.02C447.158 380.889 447.309 380.728 447.394 380.536C447.491 380.356 447.54 380.159 447.541 379.943C447.542 379.703 447.477 379.492 447.345 379.312C447.214 379.131 446.993 379.04 446.681 379.039L444.089 379.027L444.206 377.048L450.452 377.076C450.716 377.077 450.846 377.396 450.843 378.032C450.84 378.716 450.707 379.057 450.443 379.056L448.895 379.049C449.05 379.169 449.151 379.326 449.199 379.518C449.258 379.71 449.287 379.945 449.285 380.221C449.284 380.545 449.21 380.892 449.065 381.264C448.919 381.635 448.677 381.976 448.34 382.286C448.015 382.609 447.575 382.871 447.023 383.072C446.482 383.286 445.815 383.391 445.023 383.387L443.115 383.379C441.771 383.373 440.729 382.954 439.989 382.123C439.248 381.291 438.882 380.156 438.888 378.716L438.903 375.494L440.721 375.502L440.706 378.652C440.704 379.072 440.751 379.45 440.845 379.786C440.94 380.123 441.088 380.412 441.291 380.653C441.506 380.893 441.781 381.081 442.117 381.214C442.464 381.348 442.884 381.416 443.376 381.418L444.78 381.424ZM450.874 377.078C451.69 377.081 452.099 376.693 452.103 375.913L452.139 367.903L453.975 367.912L453.939 375.921C453.937 376.341 454.062 376.642 454.313 376.823C454.576 377.004 454.888 377.096 455.248 377.097L455.536 377.099C455.8 377.1 455.93 377.418 455.927 378.054C455.924 378.738 455.791 379.08 455.527 379.079L455.167 379.077C454.723 379.075 454.309 379.001 453.926 378.855C453.542 378.698 453.214 378.39 452.94 377.933C452.662 378.388 452.342 378.692 451.982 378.847C451.633 378.989 451.261 379.059 450.865 379.058L450.451 379.056C450.295 379.055 450.193 378.977 450.146 378.82C450.087 378.652 450.058 378.412 450.059 378.1C450.061 377.752 450.092 377.494 450.153 377.326C450.201 377.159 450.304 377.075 450.46 377.076L450.874 377.078ZM460.004 377.119C460.328 377.12 460.55 377.055 460.671 376.924C460.803 376.792 460.87 376.631 460.871 376.439C460.872 376.259 460.836 376.085 460.765 375.916C460.706 375.736 460.569 375.543 460.354 375.338L456.967 371.921L456.976 369.869L462.944 367.646L463.35 369.484L458.753 371.155L461.386 373.849C461.685 374.15 461.93 374.427 462.121 374.68C462.312 374.921 462.461 375.156 462.568 375.384C462.675 375.601 462.746 375.823 462.781 376.051C462.828 376.268 462.851 376.496 462.849 376.736C462.848 377.156 462.774 377.515 462.629 377.815C462.495 378.114 462.308 378.359 462.067 378.55C461.838 378.741 461.562 378.884 461.237 378.978C460.925 379.061 460.583 379.101 460.211 379.1L455.531 379.079C455.375 379.078 455.273 379 455.226 378.843C455.167 378.675 455.138 378.435 455.139 378.123C455.141 377.775 455.172 377.517 455.233 377.349C455.281 377.182 455.384 377.098 455.54 377.099L460.004 377.119ZM470.707 377.167C471.127 377.169 471.415 377.086 471.572 376.919C471.729 376.752 471.808 376.584 471.808 376.416C471.809 376.32 471.791 376.2 471.756 376.056C471.721 375.9 471.65 375.653 471.543 375.317C471.437 374.968 471.277 374.494 471.064 373.893C470.862 373.292 470.584 372.504 470.228 371.531L471.978 370.801L473.808 375.993C473.95 376.414 474.117 376.72 474.308 376.913C474.511 377.094 474.823 377.186 475.243 377.188L475.477 377.189C475.741 377.19 475.872 377.508 475.869 378.144C475.866 378.828 475.732 379.17 475.468 379.169L475.234 379.167C474.838 379.166 474.454 379.092 474.083 378.946C473.724 378.801 473.395 378.493 473.097 378.024C472.843 378.455 472.524 378.753 472.139 378.92C471.766 379.074 471.358 379.15 470.914 379.148L467.044 379.131L466.963 377.15L470.707 377.167ZM477.129 377.196C477.933 377.2 478.337 376.811 478.34 376.031L478.35 373.907L480.186 373.916L480.176 376.166C480.171 377.162 479.916 377.917 479.41 378.43C478.903 378.932 478.194 379.181 477.282 379.177L475.464 379.169C475.308 379.168 475.207 379.089 475.159 378.933C475.1 378.765 475.071 378.525 475.073 378.213C475.074 377.865 475.105 377.607 475.166 377.439C475.215 377.271 475.317 377.188 475.473 377.189L477.129 377.196ZM479.637 371.807L477.603 371.798L477.612 369.962L479.646 369.971L479.637 371.807ZM483.706 381.6C484.162 381.602 484.552 381.538 484.876 381.407C485.213 381.288 485.49 381.122 485.707 380.907C485.924 380.692 486.093 380.434 486.214 380.135C486.335 379.848 486.409 379.542 486.434 379.218L485.21 379.212C484.586 379.21 484.077 379.141 483.681 379.008C483.286 378.874 482.975 378.68 482.748 378.427C482.521 378.162 482.36 377.844 482.266 377.471C482.184 377.099 482.144 376.679 482.146 376.211C482.148 375.743 482.216 375.305 482.35 374.898C482.484 374.478 482.677 374.113 482.931 373.802C483.196 373.491 483.521 373.247 483.906 373.069C484.291 372.878 484.735 372.784 485.239 372.787C485.647 372.788 486.031 372.856 486.39 372.99C486.762 373.123 487.085 373.335 487.36 373.624C487.634 373.913 487.849 374.286 488.002 374.743C488.168 375.2 488.25 375.758 488.247 376.418L488.236 378.938C488.233 379.55 488.128 380.138 487.922 380.701C487.715 381.264 487.419 381.754 487.033 382.173C486.659 382.603 486.195 382.943 485.642 383.192C485.089 383.442 484.471 383.565 483.787 383.562L481.969 383.554L481.87 381.591L483.706 381.6ZM483.91 376.093C483.908 376.513 483.997 376.807 484.176 376.976C484.368 377.145 484.739 377.23 485.291 377.233L486.479 377.238L486.483 376.392C486.486 375.768 486.368 375.33 486.129 375.077C485.902 374.824 485.579 374.696 485.159 374.694C484.763 374.692 484.456 374.811 484.239 375.05C484.022 375.289 483.912 375.637 483.91 376.093ZM488.531 381.621L488.801 381.623C489.305 381.625 489.737 381.549 490.098 381.395C490.458 381.252 490.747 381.055 490.964 380.804C491.194 380.553 491.363 380.266 491.472 379.943C491.582 379.619 491.637 379.289 491.639 378.953L491.661 373.967L493.497 373.976L493.475 378.962C493.472 379.61 493.355 380.215 493.125 380.778C492.906 381.341 492.598 381.832 492.2 382.25C491.814 382.668 491.351 382.996 490.809 383.234C490.28 383.471 489.71 383.589 489.098 383.586L488.63 383.584L488.531 381.621Z"
                        fill="white"
                    />
                    <path
                        d="M208.386 611.098V606.724C208.386 606.004 208.368 605.386 208.332 604.87C208.296 604.342 208.242 603.868 208.17 603.448C208.098 603.028 208.008 602.632 207.9 602.26C207.804 601.876 207.696 601.468 207.576 601.036L209.322 600.406C209.478 600.874 209.61 601.33 209.718 601.774C209.838 602.206 209.934 602.662 210.006 603.142C210.078 603.61 210.132 604.126 210.168 604.69C210.204 605.254 210.222 605.902 210.222 606.634V611.098H208.386Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M317.374 605.806C316.834 605.806 316.426 605.662 316.15 605.374C316.174 605.602 316.192 605.842 316.204 606.094C316.216 606.334 316.222 606.592 316.222 606.868V611.098H314.386V606.724C314.386 606.004 314.368 605.386 314.332 604.87C314.296 604.342 314.242 603.868 314.17 603.448C314.098 603.028 314.008 602.632 313.9 602.26C313.804 601.876 313.696 601.468 313.576 601.036L315.322 600.406C315.43 600.826 315.526 601.204 315.61 601.54C315.706 601.876 315.802 602.224 315.898 602.584C315.946 602.752 316 602.914 316.06 603.07C316.12 603.226 316.198 603.364 316.294 603.484C316.39 603.592 316.504 603.682 316.636 603.754C316.78 603.814 316.954 603.844 317.158 603.844C317.494 603.844 317.752 603.754 317.932 603.574C318.124 603.394 318.22 603.166 318.22 602.89C318.22 602.518 318.118 601.822 317.914 600.802L319.678 600.406C319.774 600.85 319.846 601.294 319.894 601.738C319.954 602.17 319.984 602.572 319.984 602.944C319.984 603.364 319.918 603.754 319.786 604.114C319.666 604.462 319.492 604.762 319.264 605.014C319.048 605.266 318.778 605.464 318.454 605.608C318.13 605.74 317.77 605.806 317.374 605.806Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M428.678 600.406C428.774 600.85 428.846 601.294 428.894 601.738C428.954 602.17 428.984 602.572 428.984 602.944C428.984 603.016 428.978 603.088 428.966 603.16C428.966 603.232 428.954 603.316 428.93 603.412C429.062 603.556 429.212 603.664 429.38 603.736C429.548 603.808 429.71 603.844 429.866 603.844C430.202 603.844 430.46 603.748 430.64 603.556C430.82 603.364 430.91 603.148 430.91 602.908C430.91 602.464 430.814 601.762 430.622 600.802L432.368 600.406C432.464 600.85 432.536 601.294 432.584 601.738C432.632 602.182 432.656 602.596 432.656 602.98C432.656 603.388 432.596 603.766 432.476 604.114C432.356 604.45 432.182 604.744 431.954 604.996C431.738 605.248 431.468 605.446 431.144 605.59C430.832 605.734 430.484 605.806 430.1 605.806C429.764 605.806 429.434 605.746 429.11 605.626C428.798 605.506 428.498 605.296 428.21 604.996C427.982 605.26 427.718 605.464 427.418 605.608C427.118 605.74 426.77 605.806 426.374 605.806C425.834 605.806 425.426 605.662 425.15 605.374C425.174 605.602 425.192 605.842 425.204 606.094C425.216 606.334 425.222 606.592 425.222 606.868V611.098H423.386V606.724C423.386 606.004 423.368 605.386 423.332 604.87C423.296 604.342 423.242 603.868 423.17 603.448C423.098 603.028 423.008 602.632 422.9 602.26C422.804 601.876 422.696 601.468 422.576 601.036L424.322 600.406C424.43 600.826 424.526 601.204 424.61 601.54C424.706 601.876 424.802 602.224 424.898 602.584C424.946 602.752 425 602.914 425.06 603.07C425.12 603.226 425.198 603.364 425.294 603.484C425.39 603.592 425.504 603.682 425.636 603.754C425.78 603.814 425.954 603.844 426.158 603.844C426.494 603.844 426.752 603.754 426.932 603.574C427.124 603.394 427.22 603.166 427.22 602.89C427.22 602.518 427.118 601.822 426.914 600.802L428.678 600.406Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M540.886 606.508C540.37 606.508 539.866 606.448 539.374 606.328C538.894 606.196 538.498 606.01 538.186 605.77C538.198 605.938 538.204 606.118 538.204 606.31C538.216 606.49 538.222 606.676 538.222 606.868V611.098H536.386V606.724C536.386 606.004 536.368 605.386 536.332 604.87C536.296 604.342 536.242 603.868 536.17 603.448C536.098 603.028 536.008 602.632 535.9 602.26C535.804 601.876 535.696 601.468 535.576 601.036L537.322 600.406C537.478 600.946 537.604 601.438 537.7 601.882C537.808 602.314 537.916 602.758 538.024 603.214C538.108 603.514 538.21 603.754 538.33 603.934C538.462 604.114 538.714 604.27 539.086 604.402C538.906 604.162 538.798 603.922 538.762 603.682C538.726 603.43 538.708 603.208 538.708 603.016C538.708 602.656 538.78 602.314 538.924 601.99C539.08 601.654 539.29 601.366 539.554 601.126C539.818 600.874 540.13 600.676 540.49 600.532C540.862 600.376 541.258 600.298 541.678 600.298C541.978 600.298 542.284 600.328 542.596 600.388C542.908 600.448 543.262 600.556 543.658 600.712L543.118 602.512C542.782 602.392 542.512 602.314 542.308 602.278C542.104 602.23 541.894 602.206 541.678 602.206C541.306 602.206 540.994 602.32 540.742 602.548C540.502 602.764 540.382 603.052 540.382 603.412C540.382 603.76 540.484 604.048 540.688 604.276C540.904 604.492 541.162 604.6 541.462 604.6C541.822 604.6 542.182 604.552 542.542 604.456C542.902 604.348 543.28 604.216 543.676 604.06L544.144 605.716C543.496 606.016 542.914 606.226 542.398 606.346C541.894 606.454 541.39 606.508 540.886 606.508Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M646.846 608.452C646.846 608.08 646.888 607.69 646.972 607.282C647.068 606.862 647.242 606.406 647.494 605.914C647.746 605.41 648.094 604.852 648.538 604.24C648.982 603.616 649.552 602.908 650.248 602.116L649.51 601.468L650.626 600.136C651.802 601.096 652.756 601.96 653.488 602.728C654.22 603.496 654.784 604.204 655.18 604.852C655.588 605.488 655.864 606.076 656.008 606.616C656.152 607.144 656.224 607.654 656.224 608.146C656.224 608.65 656.14 609.094 655.972 609.478C655.816 609.862 655.606 610.18 655.342 610.432C655.078 610.684 654.778 610.87 654.442 610.99C654.118 611.122 653.788 611.188 653.452 611.188C652.996 611.188 652.612 611.11 652.3 610.954C651.988 610.81 651.712 610.594 651.472 610.306C651.22 610.606 650.914 610.828 650.554 610.972C650.194 611.116 649.84 611.188 649.492 611.188C648.664 611.188 648.016 610.942 647.548 610.45C647.08 609.958 646.846 609.292 646.846 608.452ZM654.46 608.092C654.46 607.84 654.424 607.558 654.352 607.246C654.28 606.922 654.136 606.562 653.92 606.166C653.716 605.77 653.416 605.332 653.02 604.852C652.624 604.372 652.102 603.844 651.454 603.268C650.446 604.336 649.714 605.26 649.258 606.04C648.814 606.82 648.592 607.486 648.592 608.038C648.592 608.386 648.682 608.674 648.862 608.902C649.054 609.118 649.33 609.226 649.69 609.226C649.99 609.226 650.254 609.136 650.482 608.956C650.722 608.776 650.842 608.452 650.842 607.984V606.904H652.462V607.768C652.462 607.984 652.45 608.176 652.426 608.344C652.402 608.5 652.366 608.65 652.318 608.794C652.606 609.082 652.948 609.226 653.344 609.226C653.668 609.226 653.932 609.124 654.136 608.92C654.352 608.716 654.46 608.44 654.46 608.092Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M764.166 602.458C763.986 602.374 763.788 602.314 763.572 602.278C763.368 602.23 763.182 602.206 763.014 602.206C762.618 602.206 762.294 602.32 762.042 602.548C761.79 602.776 761.664 603.064 761.664 603.412C761.664 603.76 761.772 604.042 761.988 604.258C762.216 604.474 762.534 604.582 762.942 604.582C763.29 604.582 763.644 604.534 764.004 604.438C764.376 604.33 764.754 604.186 765.138 604.006L766.038 605.338C765.114 606.202 764.298 607.12 763.59 608.092C762.882 609.052 762.192 610.12 761.52 611.296L759.99 610.252C760.434 609.508 760.896 608.8 761.376 608.128C761.868 607.444 762.384 606.82 762.924 606.256C762.696 606.268 762.48 606.262 762.276 606.238C762.084 606.214 761.898 606.178 761.718 606.13C761.058 605.938 760.578 605.608 760.278 605.14C759.99 604.66 759.846 604.114 759.846 603.502C759.846 603.094 759.918 602.698 760.062 602.314C760.206 601.93 760.404 601.588 760.656 601.288C760.92 600.988 761.232 600.748 761.592 600.568C761.952 600.388 762.354 600.298 762.798 600.298C763.11 600.298 763.416 600.334 763.716 600.406C764.016 600.466 764.358 600.592 764.742 600.784L764.166 602.458Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M872.644 607.75C872.764 607.09 872.89 606.466 873.022 605.878C873.154 605.278 873.322 604.684 873.526 604.096C873.73 603.496 873.982 602.884 874.282 602.26C874.582 601.624 874.96 600.94 875.416 600.208L876.946 601.162C876.49 601.942 876.082 602.686 875.722 603.394C875.362 604.09 875.038 604.822 874.75 605.59C874.462 606.346 874.198 607.168 873.958 608.056C873.73 608.944 873.508 609.958 873.292 611.098H872.014C871.798 609.958 871.57 608.944 871.33 608.056C871.09 607.168 870.826 606.346 870.538 605.59C870.25 604.822 869.926 604.09 869.566 603.394C869.218 602.686 868.816 601.942 868.36 601.162L869.872 600.208C870.328 600.94 870.706 601.624 871.006 602.26C871.306 602.884 871.558 603.496 871.762 604.096C871.978 604.684 872.152 605.278 872.284 605.878C872.416 606.466 872.536 607.09 872.644 607.75Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M983.644 603.754C983.536 604.414 983.416 605.038 983.284 605.626C983.152 606.214 982.978 606.808 982.762 607.408C982.558 607.996 982.306 608.608 982.006 609.244C981.706 609.88 981.328 610.564 980.872 611.296L979.36 610.324C979.816 609.556 980.218 608.818 980.566 608.11C980.926 607.402 981.25 606.67 981.538 605.914C981.826 605.146 982.09 604.324 982.33 603.448C982.57 602.56 982.798 601.546 983.014 600.406H984.292C984.508 601.546 984.73 602.56 984.958 603.448C985.198 604.324 985.462 605.146 985.75 605.914C986.038 606.67 986.362 607.402 986.722 608.11C987.082 608.818 987.49 609.556 987.946 610.324L986.416 611.296C985.96 610.564 985.582 609.88 985.282 609.244C984.982 608.608 984.73 607.996 984.526 607.408C984.322 606.808 984.154 606.214 984.022 605.626C983.89 605.038 983.764 604.414 983.644 603.754Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M1095.06 611.098V606.4C1094.57 606.592 1094.02 606.688 1093.42 606.688C1092.95 606.688 1092.54 606.616 1092.2 606.472C1091.86 606.328 1091.58 606.13 1091.37 605.878C1091.15 605.626 1090.99 605.332 1090.88 604.996C1090.79 604.66 1090.74 604.3 1090.74 603.916C1090.74 603.46 1090.81 603.016 1090.95 602.584C1091.11 602.14 1091.32 601.75 1091.58 601.414C1091.86 601.078 1092.19 600.808 1092.57 600.604C1092.97 600.4 1093.4 600.298 1093.87 600.298C1094.41 600.298 1094.87 600.418 1095.24 600.658C1095.62 600.898 1095.93 601.222 1096.16 601.63C1096.4 602.026 1096.57 602.488 1096.68 603.016C1096.79 603.544 1096.84 604.102 1096.84 604.69V611.098H1095.06ZM1095.06 604.312C1095.06 604.048 1095.03 603.79 1094.99 603.538C1094.94 603.274 1094.86 603.046 1094.75 602.854C1094.64 602.662 1094.51 602.506 1094.34 602.386C1094.17 602.266 1093.97 602.206 1093.73 602.206C1093.53 602.206 1093.36 602.248 1093.2 602.332C1093.05 602.416 1092.92 602.53 1092.81 602.674C1092.7 602.806 1092.62 602.962 1092.56 603.142C1092.51 603.31 1092.48 603.478 1092.48 603.646C1092.48 603.97 1092.59 604.216 1092.79 604.384C1092.99 604.552 1093.29 604.636 1093.67 604.636C1093.95 604.636 1094.19 604.612 1094.39 604.564C1094.61 604.516 1094.83 604.432 1095.06 604.312Z"
                        fill="#1D252F"
                    />
                    <path
                        d="M1208.73 582.55C1208.73 583.234 1208.62 583.864 1208.4 584.44C1208.2 585.028 1207.9 585.538 1207.5 585.97C1207.12 586.402 1206.65 586.738 1206.08 586.978C1205.53 587.23 1204.91 587.356 1204.23 587.356H1203.09C1201.75 587.356 1200.71 586.942 1199.96 586.114C1199.22 585.286 1198.85 584.152 1198.85 582.712V579.49H1200.66V582.64C1200.66 583.06 1200.71 583.438 1200.81 583.774C1200.9 584.11 1201.05 584.398 1201.26 584.638C1201.47 584.878 1201.75 585.064 1202.09 585.196C1202.43 585.328 1202.85 585.394 1203.35 585.394H1204.14C1204.64 585.394 1205.07 585.316 1205.42 585.16C1205.78 585.016 1206.06 584.812 1206.28 584.548C1206.51 584.296 1206.67 583.996 1206.77 583.648C1206.86 583.312 1206.91 582.952 1206.91 582.568V577.726H1208.73V582.55ZM1204.5 577.456H1202.46V575.62H1204.5V577.456ZM1212.28 585.394C1212.74 585.394 1213.13 585.328 1213.45 585.196C1213.79 585.076 1214.06 584.908 1214.28 584.692C1214.5 584.476 1214.66 584.218 1214.78 583.918C1214.9 583.63 1214.98 583.324 1215 583H1213.78C1213.15 583 1212.64 582.934 1212.25 582.802C1211.85 582.67 1211.54 582.478 1211.31 582.226C1211.08 581.962 1210.92 581.644 1210.82 581.272C1210.74 580.9 1210.7 580.48 1210.7 580.012C1210.7 579.544 1210.76 579.106 1210.9 578.698C1211.03 578.278 1211.22 577.912 1211.47 577.6C1211.74 577.288 1212.06 577.042 1212.44 576.862C1212.83 576.67 1213.27 576.574 1213.78 576.574C1214.18 576.574 1214.57 576.64 1214.93 576.772C1215.3 576.904 1215.62 577.114 1215.9 577.402C1216.18 577.69 1216.39 578.062 1216.55 578.518C1216.72 578.974 1216.8 579.532 1216.8 580.192V581.02H1218.26C1218.52 581.02 1218.65 581.338 1218.65 581.974C1218.65 582.658 1218.52 583 1218.26 583H1216.76C1216.74 583.588 1216.62 584.146 1216.4 584.674C1216.19 585.202 1215.89 585.664 1215.5 586.06C1215.13 586.456 1214.68 586.768 1214.15 586.996C1213.63 587.236 1213.03 587.356 1212.37 587.356H1210.55L1210.45 585.394H1212.28ZM1212.46 579.886C1212.46 580.306 1212.55 580.6 1212.73 580.768C1212.92 580.936 1213.3 581.02 1213.85 581.02H1215.04V580.174C1215.04 579.55 1214.92 579.112 1214.68 578.86C1214.45 578.608 1214.12 578.482 1213.7 578.482C1213.31 578.482 1213 578.602 1212.79 578.842C1212.57 579.082 1212.46 579.43 1212.46 579.886ZM1218.41 581.02C1218.82 581.02 1219.14 580.942 1219.37 580.786C1219.59 580.618 1219.71 580.348 1219.71 579.976V579.58C1219.71 579.1 1219.77 578.656 1219.91 578.248C1220.05 577.84 1220.25 577.492 1220.52 577.204C1220.78 576.916 1221.1 576.694 1221.47 576.538C1221.86 576.37 1222.28 576.286 1222.75 576.286C1223.24 576.286 1223.67 576.37 1224.05 576.538C1224.43 576.694 1224.75 576.922 1225 577.222C1225.25 577.51 1225.44 577.858 1225.58 578.266C1225.71 578.674 1225.77 579.118 1225.77 579.598C1225.77 580.678 1225.5 581.518 1224.95 582.118C1224.41 582.706 1223.67 583 1222.73 583C1222.25 583 1221.79 582.91 1221.35 582.73C1220.91 582.538 1220.58 582.238 1220.36 581.83C1220.13 582.298 1219.83 582.61 1219.47 582.766C1219.11 582.922 1218.76 583 1218.41 583H1218.25C1218.09 583 1217.99 582.922 1217.94 582.766C1217.88 582.598 1217.85 582.358 1217.85 582.046C1217.85 581.698 1217.88 581.44 1217.94 581.272C1217.99 581.104 1218.09 581.02 1218.25 581.02H1218.41ZM1224.01 579.724C1224.01 579.316 1223.91 578.974 1223.72 578.698C1223.54 578.422 1223.21 578.284 1222.73 578.284C1222.28 578.284 1221.95 578.422 1221.74 578.698C1221.55 578.962 1221.45 579.31 1221.45 579.742C1221.45 580.162 1221.57 580.48 1221.8 580.696C1222.02 580.912 1222.34 581.02 1222.73 581.02C1223.58 581.02 1224.01 580.588 1224.01 579.724ZM1230.14 582.712C1230.14 583.36 1230.03 583.966 1229.8 584.53C1229.58 585.094 1229.28 585.586 1228.88 586.006C1228.5 586.426 1228.04 586.756 1227.5 586.996C1226.97 587.236 1226.4 587.356 1225.79 587.356H1224.65L1224.56 585.394H1225.32C1225.86 585.394 1226.32 585.316 1226.7 585.16C1227.08 585.016 1227.38 584.818 1227.62 584.566C1227.86 584.314 1228.04 584.026 1228.14 583.702C1228.25 583.378 1228.31 583.048 1228.31 582.712V577.726H1230.14V582.712ZM1230.16 575.62H1228.13V573.784H1230.16V575.62ZM1233.5 574.54H1235.34V583H1233.5V574.54ZM1233.41 572.686C1233.17 572.686 1232.98 572.71 1232.85 572.758C1232.72 572.806 1232.61 572.944 1232.51 573.172L1232.13 574.018L1230.98 573.46L1231.54 572.218C1231.65 571.978 1231.75 571.78 1231.86 571.624C1231.96 571.468 1232.07 571.342 1232.2 571.246C1232.34 571.15 1232.49 571.084 1232.67 571.048C1232.85 571.012 1233.07 570.994 1233.34 570.994H1236.97L1236.9 572.686H1233.41ZM1239.86 580.228C1239.86 579.88 1239.9 579.55 1239.98 579.238C1240.08 578.926 1240.21 578.614 1240.38 578.302C1240.56 577.99 1240.78 577.678 1241.04 577.366C1241.31 577.042 1241.61 576.694 1241.96 576.322L1241.13 575.494L1242.38 574.162C1243.12 574.894 1243.74 575.53 1244.23 576.07C1244.73 576.61 1245.14 577.102 1245.44 577.546C1245.74 577.978 1245.95 578.386 1246.07 578.77C1246.2 579.154 1246.26 579.55 1246.26 579.958C1246.26 580.402 1246.18 580.81 1246.01 581.182C1245.84 581.554 1245.62 581.878 1245.33 582.154C1245.04 582.418 1244.69 582.628 1244.28 582.784C1243.89 582.928 1243.46 583 1242.99 583C1242.52 583 1242.09 582.934 1241.71 582.802C1241.33 582.67 1241 582.484 1240.72 582.244C1240.44 581.992 1240.23 581.698 1240.07 581.362C1239.93 581.026 1239.86 580.648 1239.86 580.228ZM1244.43 579.814C1244.43 579.67 1244.41 579.532 1244.37 579.4C1244.34 579.256 1244.27 579.1 1244.18 578.932C1244.08 578.764 1243.94 578.578 1243.74 578.374C1243.56 578.158 1243.33 577.906 1243.04 577.618C1242.74 577.906 1242.5 578.164 1242.32 578.392C1242.14 578.608 1242 578.806 1241.91 578.986C1241.81 579.154 1241.75 579.31 1241.71 579.454C1241.69 579.586 1241.67 579.718 1241.67 579.85C1241.67 580.162 1241.79 580.438 1242.02 580.678C1242.24 580.906 1242.59 581.02 1243.04 581.02C1243.49 581.02 1243.83 580.9 1244.07 580.66C1244.31 580.42 1244.43 580.138 1244.43 579.814ZM1250.53 582.712C1250.53 583.36 1250.42 583.966 1250.19 584.53C1249.98 585.094 1249.67 585.586 1249.27 586.006C1248.89 586.426 1248.43 586.756 1247.89 586.996C1247.36 587.236 1246.79 587.356 1246.18 587.356H1245.04L1244.95 585.394H1245.71C1246.25 585.394 1246.71 585.316 1247.1 585.16C1247.47 585.016 1247.77 584.818 1248.01 584.566C1248.25 584.314 1248.43 584.026 1248.54 583.702C1248.64 583.378 1248.7 583.048 1248.7 582.712V577.726H1250.53V582.712ZM1255.13 583C1254.79 583 1254.47 582.958 1254.15 582.874C1253.85 582.778 1253.59 582.622 1253.36 582.406C1253.13 582.19 1252.95 581.908 1252.82 581.56C1252.69 581.2 1252.62 580.756 1252.62 580.228V571.84H1254.46V579.778C1254.46 580.162 1254.54 580.468 1254.71 580.696C1254.89 580.912 1255.16 581.02 1255.5 581.02H1255.92C1256.18 581.02 1256.31 581.338 1256.31 581.974C1256.31 582.658 1256.18 583 1255.92 583H1255.13ZM1256.08 581.02C1256.49 581.02 1256.81 580.942 1257.04 580.786C1257.26 580.618 1257.38 580.348 1257.38 579.976V579.58C1257.38 579.1 1257.44 578.656 1257.58 578.248C1257.72 577.84 1257.92 577.492 1258.19 577.204C1258.45 576.916 1258.77 576.694 1259.14 576.538C1259.53 576.37 1259.95 576.286 1260.42 576.286C1260.91 576.286 1261.34 576.37 1261.72 576.538C1262.1 576.694 1262.42 576.922 1262.67 577.222C1262.92 577.51 1263.11 577.852 1263.25 578.248C1263.38 578.644 1263.44 579.076 1263.44 579.544V579.886C1263.44 580.318 1263.57 580.618 1263.82 580.786C1264.09 580.942 1264.36 581.02 1264.65 581.02H1264.9C1265.06 581.02 1265.16 581.104 1265.21 581.272C1265.27 581.428 1265.3 581.662 1265.3 581.974C1265.3 582.322 1265.27 582.58 1265.21 582.748C1265.16 582.916 1265.06 583 1264.9 583H1264.65C1264.3 583 1263.95 582.928 1263.59 582.784C1263.23 582.628 1262.92 582.304 1262.65 581.812C1262.33 582.304 1261.96 582.628 1261.55 582.784C1261.16 582.928 1260.75 583 1260.33 583C1259.85 583 1259.4 582.91 1258.98 582.73C1258.57 582.538 1258.25 582.238 1258.03 581.83C1257.8 582.298 1257.5 582.61 1257.14 582.766C1256.78 582.922 1256.43 583 1256.08 583H1255.92C1255.76 583 1255.66 582.922 1255.61 582.766C1255.55 582.598 1255.52 582.358 1255.52 582.046C1255.52 581.698 1255.55 581.44 1255.61 581.272C1255.66 581.104 1255.76 581.02 1255.92 581.02H1256.08ZM1261.68 579.724C1261.68 579.316 1261.58 578.974 1261.39 578.698C1261.21 578.422 1260.88 578.284 1260.4 578.284C1259.95 578.284 1259.62 578.422 1259.41 578.698C1259.22 578.962 1259.12 579.31 1259.12 579.742C1259.12 580.162 1259.24 580.48 1259.47 580.696C1259.69 580.912 1260.01 581.02 1260.4 581.02C1261.25 581.02 1261.68 580.588 1261.68 579.724ZM1265.69 581.02C1266.52 581.02 1266.94 580.63 1266.94 579.85V577.726H1268.75V579.85C1268.75 580.27 1268.88 580.57 1269.13 580.75C1269.4 580.93 1269.7 581.02 1270.03 581.02C1270.93 581.02 1271.38 580.63 1271.38 579.85V577.726H1273.22V579.85C1273.22 580.27 1273.33 580.57 1273.54 580.75C1273.77 580.93 1274.03 581.02 1274.33 581.02C1274.69 581.02 1274.97 580.924 1275.16 580.732C1275.37 580.528 1275.47 580.234 1275.47 579.85V577.726H1277.3V579.976C1277.3 580.972 1277.05 581.728 1276.53 582.244C1276.03 582.748 1275.32 583 1274.41 583C1274 583 1273.61 582.928 1273.24 582.784C1272.86 582.628 1272.54 582.322 1272.26 581.866C1271.98 582.322 1271.63 582.628 1271.24 582.784C1270.85 582.928 1270.45 583 1270.03 583C1269.58 583 1269.16 582.928 1268.77 582.784C1268.4 582.628 1268.08 582.322 1267.8 581.866C1267.51 582.322 1267.19 582.628 1266.83 582.784C1266.47 582.928 1266.08 583 1265.68 583H1264.9C1264.75 583 1264.64 582.922 1264.6 582.766C1264.54 582.598 1264.51 582.358 1264.51 582.046C1264.51 581.698 1264.54 581.44 1264.6 581.272C1264.64 581.104 1264.75 581.02 1264.9 581.02H1265.69ZM1273.24 573.1H1271.33V571.354H1273.24V573.1ZM1274.5 575.62H1272.62V573.856H1274.5V575.62ZM1271.92 575.62H1270.05V573.856H1271.92V575.62Z"
                        fill="#1D252F"
                    />
                    <rect x="304" y="401" width="25" height="176" rx="8" fill="#32074F" />
                    <rect x="415" y="474" width="25" height="103" rx="8" fill="#32074F" />
                    <rect x="526" y="365" width="25" height="212" rx="8" fill="#32074F" />
                    <rect x="639" y="205" width="25" height="372" rx="8" fill="#32074F" />
                    <rect x="750" y="530" width="25" height="47" rx="8" fill="#32074F" />
                    <rect x="861" y="293" width="25" height="284" rx="8" fill="#32074F" />
                    <rect x="971" y="483" width="25" height="94" rx="8" fill="#32074F" />
                    <rect x="1081" y="205" width="25" height="372" rx="8" fill="#32074F" />
                    <rect x="199" y="309" width="25" height="268" rx="8" fill="#32074F" />
                </svg>
            </Box> */}
            <Box mt={"20px"}>
                <Table className={classes.table2} component={Paper}>
                    <TableHead>
                        <TableRow>
                            <TableCell>نوع سوال</TableCell>
                            <TableCell>حفظی</TableCell>
                            <TableCell>چالشی</TableCell>
                            <TableCell>مفهومی</TableCell>
                            <TableCell>دام دار</TableCell>
                            <TableCell>محاسباتی </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>تعداد سوالات</TableCell>
                            {getOnlineGradeLevelBasedObjectiveTest?.data && (
                                <>
                                    {getOnlineGradeLevelBasedObjectiveTest?.data[0] && (
                                        <>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.memorizationalCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.challengingCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.conceptionalCount
                                                }
                                            </TableCell>

                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.trickCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.computationalCount
                                                }
                                            </TableCell>
                                        </>
                                    )}
                                </>
                            )}
                        </TableRow>
                        <TableRow>
                            <TableCell>صحیح </TableCell>
                            {getOnlineGradeLevelBasedObjectiveTest?.data && (
                                <>
                                    {getOnlineGradeLevelBasedObjectiveTest?.data[0] && (
                                        <>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.correctMemorizationalCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.correctChallengingCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.correctConceptionalCount
                                                }
                                            </TableCell>

                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.correctTrickCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.correctComputationalCount
                                                }
                                            </TableCell>
                                        </>
                                    )}
                                </>
                            )}
                        </TableRow>
                        <TableRow>
                            <TableCell>نزده </TableCell>
                            {getOnlineGradeLevelBasedObjectiveTest?.data && (
                                <>
                                    {getOnlineGradeLevelBasedObjectiveTest?.data[0] && (
                                        <>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.unansweredMemorizationalCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.unansweredChallengingCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.unansweredConceptionalCount
                                                }
                                            </TableCell>

                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.unansweredTrickCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.unansweredComputationalCount
                                                }
                                            </TableCell>
                                        </>
                                    )}
                                </>
                            )}
                        </TableRow>
                        <TableRow>
                            <TableCell>غلط </TableCell>
                            {getOnlineGradeLevelBasedObjectiveTest?.data && (
                                <>
                                    {getOnlineGradeLevelBasedObjectiveTest?.data[0] && (
                                        <>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.incorrectMemorizationalCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.incorrectChallengingCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.incorrectConceptionalCount
                                                }
                                            </TableCell>

                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.incorrectTrickCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.incorrectComputationalCount
                                                }
                                            </TableCell>
                                        </>
                                    )}
                                </>
                            )}
                        </TableRow>
                        {/* <TableRow>
                            <TableCell>درصد کسب شده </TableCell>
                            <TableCell>۳۵</TableCell>
                            <TableCell>۳۵</TableCell>
                            <TableCell>۳۵</TableCell>
                            <TableCell>۳۵</TableCell>
                            <TableCell>۳۵ </TableCell>
                        </TableRow> */}
                    </TableBody>
                </Table>
            </Box>

            <Box mt={"20px"} display="flex" justifyContent={"center"}>
                <Table sx={{ width: "900px" }} className={classes.table2} component={Paper}>
                    <TableHead>
                        <TableRow>
                            <TableCell>نوع سوال</TableCell>
                            <TableCell>ساده</TableCell>
                            <TableCell>متوسط</TableCell>
                            <TableCell>سخت</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableBody></TableBody>
                        <TableRow>
                            <TableCell>تعداد سوالات</TableCell>

                            {getOnlineGradeLevelBasedObjectiveTest?.data && (
                                <>
                                    {getOnlineGradeLevelBasedObjectiveTest?.data[0] && (
                                        <>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.easyCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.averageCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.hardCount
                                                }
                                            </TableCell>
                                        </>
                                    )}
                                </>
                            )}
                        </TableRow>
                        <TableRow>
                            <TableCell>صحیح </TableCell>
                            {getOnlineGradeLevelBasedObjectiveTest?.data && (
                                <>
                                    {getOnlineGradeLevelBasedObjectiveTest?.data[0] && (
                                        <>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.correctEasyCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.correctAverageCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.correctHardCount
                                                }
                                            </TableCell>
                                        </>
                                    )}
                                </>
                            )}
                        </TableRow>
                        <TableRow>
                            <TableCell>نزده </TableCell>
                            {getOnlineGradeLevelBasedObjectiveTest?.data && (
                                <>
                                    {getOnlineGradeLevelBasedObjectiveTest?.data[0] && (
                                        <>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.unansweredEasyCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.unansweredAverageCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.unansweredHardCount
                                                }
                                            </TableCell>
                                        </>
                                    )}
                                </>
                            )}
                        </TableRow>
                        <TableRow>
                            <TableCell>غلط </TableCell>
                            {getOnlineGradeLevelBasedObjectiveTest?.data && (
                                <>
                                    {getOnlineGradeLevelBasedObjectiveTest?.data[0] && (
                                        <>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.incorrectEasyCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.incorrectAverageCount
                                                }
                                            </TableCell>
                                            <TableCell>
                                                {
                                                    getOnlineGradeLevelBasedObjectiveTest?.data[0]
                                                        ?.incorrectHardCount
                                                }
                                            </TableCell>
                                        </>
                                    )}
                                </>
                            )}
                        </TableRow>
                        {/* <TableRow>
                            <TableCell>درصد کسب شده </TableCell>
                            <TableCell>۳۵</TableCell>
                            <TableCell>۳۵</TableCell>
                            <TableCell>۳۵</TableCell>
                        </TableRow> */}
                    </TableBody>
                </Table>
            </Box>
        </Box>
    );
};

export default Report;
