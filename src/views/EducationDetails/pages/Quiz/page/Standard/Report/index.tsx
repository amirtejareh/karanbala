import { Box, ThemeOptions, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { KaranbalaLogoTextSvg } from "../../../../../../../assets";
import { ButtonKit } from "../../../../../../../components/kit/Button";
import { useNavigate, useParams } from "react-router-dom";
import useGetStandardExamReportBasedOnExamId from "../../../../../../../hooks/standard-exam-report/useGetStandardExamReportBasedOnExamId";
import { userStore } from "../../../../../../../stores";

const Report = () => {
  const theme: ThemeOptions = useTheme();
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
    </Box>
  );
};

export default Report;
