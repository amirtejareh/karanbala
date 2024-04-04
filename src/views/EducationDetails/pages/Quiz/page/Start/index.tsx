import React, { useEffect, useRef, useState } from "react";
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";

import { useNavigate } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import EducationDetailStore from "../../../../../../stores/educationDetailStore";
import { ButtonKit } from "../../../../../../components/kit/Button";
import { KaranbalaLogoTextSvg, QuizSvg } from "../../../../../../assets";

const useStyles = makeStyles((theme: ThemeOptions) => ({
  QuizBox: {
    "& > button": {
      flexBasis: "15%",
    },
  },
  formField: {
    margin: "1rem",
    width: "100%",
  },
}));
const Start = () => {
  const theme: ThemeOptions = useTheme();
  const navigate = useNavigate();
  const [quizValue, setQuizValue] = useState("");
  const [, setSeasonValue] = useState(1);
  const { book } = EducationDetailStore();

  const classes = useStyles();

  return (
    <Box paddingBottom={"1rem"}>
      <Box
        margin={"0.75rem 0 0 0"}
        padding={"0.75rem 3.25rem 0.8rem 3.25rem"}
        display={"flex"}
        justifyContent={"flex-start"}
        borderBottom={"1px solid #B2BFCB"}
      >
        <ButtonKit sx={{ padding: 0, minWidth: 0 }} onClick={() => navigate("/")}>
          <KaranbalaLogoTextSvg />
        </ButtonKit>
      </Box>
      <Box margin={"4rem 5.2rem 0  5.2rem"}>
        <Box
          bgcolor={theme.palette.secondary["50"]}
          padding={"1.6rem"}
          justifyContent={"space-between"}
          display={"flex"}
          flexWrap={"wrap"}
        >
          <Box>
            <Typography>آزمون استاندارد</Typography>
          </Box>
          <Box>
            <Typography component="span">کتاب: </Typography>
            <Typography component="span" variant="h6">
              ریاضی سوم
            </Typography>
          </Box>
          <Box>
            <Typography component="span">آزمون درسی: </Typography>
            <Typography component="span" variant="h6">
              ترم اول
            </Typography>
          </Box>
          <Box>
            <Typography component="span">نوع آزمون: </Typography>
            <Typography component="span" variant="h6">
              تستی
            </Typography>
          </Box>
          <Box>
            <Typography component="span">شماره آزمون: </Typography>
            <Typography component="span" variant="h6">
              ۷
            </Typography>
          </Box>
          <Box>
            <Typography component="span">تعداد سوالات:</Typography>
            <Typography component="span" variant="h6">
              ۴۰
            </Typography>
          </Box>
        </Box>
        <Box borderBottom={"1px solid #B2BFCB"} padding={"4rem 0"}>
          <Box padding={"4rem 0"}>۱- سوال مربوط به آزمون</Box>
          <Box>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              defaultValue={0}
            >
              <FormControl>
                <FormControlLabel value={0} control={<Radio />} label={"جواب ۱"} />
              </FormControl>
              <FormControl>
                <FormControlLabel value={1} control={<Radio />} label={"جواب ۲"} />
              </FormControl>
              <FormControl>
                <FormControlLabel value={2} control={<Radio />} label={"جواب ۳"} />
              </FormControl>
              <FormControl>
                <FormControlLabel value={3} control={<Radio />} label={"جواب ۴"} />
              </FormControl>
            </RadioGroup>
          </Box>
        </Box>

        <Box padding={"4rem 0"}>
          <Typography component={"span"} variant="h6">
            زمان باقیمانده (دقیقه):{" "}
            <Typography variant="h6" component={"span"}>
              70
            </Typography>
          </Typography>
          <Box display={"flex"} justifyContent={"center"} gap={"1rem"} flexWrap={"wrap"}>
            <ButtonKit size="large" variant="contained">
              <Typography></Typography>سوال بعدی
            </ButtonKit>
            <ButtonKit onClick={() => {}} size="large" variant="outlined">
              <Typography></Typography>سوال قبلی
            </ButtonKit>
            <ButtonKit size="large" variant="outlined">
              <Typography></Typography>اتمام آزمون
            </ButtonKit>
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          sx={{ "& div": { flexBasis: "50%", padding: "2rem 0" } }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            borderRadius={"1rem"}
            bgcolor={theme?.palette?.grey[100]}
            margin={"0 1rem 0 0"}
          >
            <Typography variant="subtitle1">پاسخنامه</Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"center"}
            borderRadius={"1rem"}
            bgcolor={theme?.palette?.grey[100]}
            margin={"0 0 0 1rem"}
          >
            <Typography variant="subtitle1">کارنامه</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Start;
