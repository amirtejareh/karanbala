import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Theme,
  ThemeOptions,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { KaranbalaLogoTextSvg } from "../../../../../../../assets";
import { ButtonKit } from "../../../../../../../components/kit/Button";
import { useNavigate, useParams } from "react-router-dom";
import useGetStandardExamReportBasedOnExamId from "../../../../../../../hooks/standard-exam-report/useGetStandardExamReportBasedOnExamId";
import { userStore } from "../../../../../../../stores";
import { makeStyles } from "@mui/styles";

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
  const classes = useStyles();
  const navigate = useNavigate();
  const user: any = userStore((state) => state.user);
  const params = useParams();

  const getStandardExamReportBasedOnExamId = useGetStandardExamReportBasedOnExamId(
    params?.id,
    user?.username,
  );

  useEffect(() => {
    if (user?.username) {
      getStandardExamReportBasedOnExamId.refetch();
    }
  }, [user?.username]);

  const [data, setData] = useState<any>();

  useEffect(() => {
    if (getStandardExamReportBasedOnExamId.data) {
      setData(getStandardExamReportBasedOnExamId.data.data);
    }
  }, [getStandardExamReportBasedOnExamId.data]);
  const [categoryTitle, setCategoryTitle] = useState("کل");

  return (
    <Box margin={"0.75rem 3.25rem 0 3.25rem"} paddingBottom={"7.5rem"}>
      <Box display={"flex"} justifyContent={"end"}>
        <ButtonKit sx={{ padding: 0, minWidth: 0 }} onClick={() => navigate("/")}>
          {" "}
          <KaranbalaLogoTextSvg />
        </ButtonKit>
      </Box>
      <Box>
        <Typography variant="h3">کارنامه</Typography>
      </Box>

      <Box
        mt="20px"
        display="flex"
        gap="50px"
        bgcolor={theme.palette.secondary["50"]}
        padding={"1rem"}
        justifyContent={"space-between"}
      >
        <Box display="flex" gap="5px">
          <Typography variant="subtitle1">آزمون استاندارد</Typography>
        </Box>
        <Box display="flex" gap="5px">
          <Typography color={theme.palette.grey.A700}>کتاب:</Typography>
          <Typography variant="subtitle1">{data?.book[0]?.title}</Typography>
        </Box>
        <Box display="flex" gap="5px">
          <Typography color={theme.palette.grey.A700}>نوع آزمون: </Typography>
          <Typography variant="subtitle1">{data?.examType ? "تستی" : "تشریحی"}</Typography>
        </Box>
        <Box display="flex" gap="5px">
          <Typography color={theme.palette.grey.A700}> شماره آزمون: </Typography>
          <Typography variant="subtitle1">{data?.examNumber}</Typography>
        </Box>
      </Box>

      <Box mt="20px">
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>تعداد سوالات </TableCell>
              <TableCell>شماره سوالات</TableCell>
              <TableCell>صحیح</TableCell>
              <TableCell>نزده </TableCell>
              <TableCell>غلط</TableCell>
              <TableCell>درصد کسب شده</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>{data?.totalQuestions}</TableCell>
              <TableCell>{`1 تا ${data?.totalQuestions}`}</TableCell>
              <TableCell>{data?.correctCount}</TableCell>
              <TableCell>{data?.unansweredCount} </TableCell>
              <TableCell>{data?.incorrectCount}</TableCell>
              <TableCell>{(100 * data?.correctCount) / 100}%</TableCell>
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
      </TableBody> */}
        </Table>
      </Box>

      <Box mt="20px">
        <Table className={classes.table2} component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell>شماره سوال</TableCell>
              <TableCell>گزینه۱</TableCell>
              <TableCell>گزینه۲</TableCell>
              <TableCell>گزینه۳</TableCell>
              <TableCell>گزینه۴</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data && (
              <>
                {data && (
                  <>
                    {data.userAnswers
                      ?.find((item) => item.title == categoryTitle)
                      .children.map((answer, ix) => {
                        return (
                          <TableRow key={ix}>
                            <TableCell key={ix}>{answer.number}</TableCell>
                            <TableCell key={ix}>
                              {answer.userAnswer == answer.correctAnswer &&
                              1 == answer.correctAnswer ? (
                                <Typography className={classes.true}>صحیح</Typography>
                              ) : answer.userAnswer != answer.correctAnswer &&
                                answer.userAnswer != "-" &&
                                1 == answer.correctAnswer ? (
                                <Typography className={classes.false}>غلط</Typography>
                              ) : answer.userAnswer != answer.correctAnswer &&
                                answer.userAnswer == "-" &&
                                1 == answer.correctAnswer ? (
                                <Typography className={classes.undone}>نزده</Typography>
                              ) : (
                                ""
                              )}
                            </TableCell>
                            <TableCell key={ix}>
                              {answer.userAnswer == answer.correctAnswer &&
                              2 == answer.correctAnswer ? (
                                <Typography className={classes.true}>صحیح</Typography>
                              ) : answer.userAnswer != answer.correctAnswer &&
                                answer.userAnswer != "-" &&
                                2 == answer.correctAnswer ? (
                                <Typography className={classes.false}>غلط</Typography>
                              ) : answer.userAnswer != answer.correctAnswer &&
                                answer.userAnswer == "-" &&
                                2 == answer.correctAnswer ? (
                                <Typography className={classes.undone}>نزده</Typography>
                              ) : (
                                ""
                              )}
                            </TableCell>
                            <TableCell key={ix}>
                              {answer.userAnswer == answer.correctAnswer &&
                              3 == answer.correctAnswer ? (
                                <Typography className={classes.true}>صحیح</Typography>
                              ) : answer.userAnswer != answer.correctAnswer &&
                                answer.userAnswer != "-" &&
                                3 == answer.correctAnswer ? (
                                <Typography className={classes.false}>غلط</Typography>
                              ) : answer.userAnswer != answer.correctAnswer &&
                                answer.userAnswer == "-" &&
                                3 == answer.correctAnswer ? (
                                <Typography className={classes.undone}>نزده</Typography>
                              ) : (
                                ""
                              )}
                            </TableCell>
                            <TableCell key={ix}>
                              {answer.userAnswer == answer.correctAnswer &&
                              4 == answer.correctAnswer ? (
                                <Typography className={classes.true}>صحیح</Typography>
                              ) : answer.userAnswer != answer.correctAnswer &&
                                answer.userAnswer != "-" &&
                                4 == answer.correctAnswer ? (
                                <Typography className={classes.false}>غلط</Typography>
                              ) : answer.userAnswer != answer.correctAnswer &&
                                answer.userAnswer == "-" &&
                                4 == answer.correctAnswer ? (
                                <Typography className={classes.undone}>نزده</Typography>
                              ) : (
                                ""
                              )}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                  </>
                )}
              </>
            )}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default Report;
