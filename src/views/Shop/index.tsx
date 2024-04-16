import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  AccountSvg,
  BasketSvg,
  KaranbalaLogoSvg,
  KaranbalaLogoTextSvg,
  QuizSvg,
  TelevisionSvg,
} from "../../assets";

import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { ButtonKit } from "../../components/kit/Button";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { userStore } from "../../stores";
import { toast } from "react-toastify";
import AssessmentImage from "../../assets/images/assessment.png";
import TutorialImage from "../../assets/images/tutorial.png";

const useStyles = makeStyles((theme: ThemeOptions) => ({
  parentEducationBoxes: {
    "& > div": {
      flexBasis: "25%",
    },
    "& > div > div > img": {
      flexBasis: "100%",
    },
  },
  major: {
    borderBottom: "3px solid #22A9C0",
    padding: "0 30px",
  },
}));

const EducationDetails = () => {
  const theme: ThemeOptions = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();
  const user: any = userStore((state) => state);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const ModalExam = () => {
    const theme: ThemeOptions = useTheme();

    return (
      <Box display={"flex"} justifyContent={"space-between"} gap={"1rem"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          width={"17.35rem"}
          bgcolor={theme?.palette?.others.warning.light}
          padding={"1rem"}
          borderRadius={"1rem"}
          onClick={() => {
            if (user.user === null) {
              toast.error(
                "کاربر گرامی ابتدا می بایست در سایت ثبت نام کنید و آزمون مد نظر خود را مطابق با پایه خود خریداری نمایید",
              );
            } else {
              navigate("/objective-test");
            }
          }}
          sx={{ cursor: "pointer" }}
        >
          <Box
            bgcolor={theme?.palette?.common.white}
            padding={"1rem"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"1rem"}
          >
            <QuizSvg />
          </Box>
          <Box margin={"1rem"}>
            <Typography variant="subtitle1">آزمون تستی</Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          width={"17.35rem"}
          bgcolor={theme?.palette?.others.warning.light}
          padding={"1rem"}
          borderRadius={"1rem"}
          onClick={() => {
            navigate("/subjective-test");
          }}
          sx={{ cursor: "pointer" }}
        >
          <Box
            bgcolor={theme?.palette?.common.white}
            padding={"1rem"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={"1rem"}
          >
            <QuizSvg />
          </Box>
          <Box margin={"1rem"}>
            <Typography variant="subtitle1">آزمون تشریحی</Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  interface IGenerateSubscriptionBoxes {
    imageLink: string;
    bgColor: string;
    type: "Assessment" | "Tutorial";
  }
  const GenerateSubscriptionBoxes = ({ imageLink, bgColor, type }: IGenerateSubscriptionBoxes) => {
    return (
      <Box
        boxSizing={"content-box"}
        gap={"3.2rem"}
        padding={"1.6rem"}
        flexBasis={"429px"}
        sx={{
          backgroundColor: "#FBFDFF",
          boxShadow: " 0px 8px 16px 0px rgba(37, 45, 55, 0.16)",
        }}
      >
        <Box
          sx={{ backgroundColor: bgColor }}
          marginBottom={"3.2rem"}
          display={"flex"}
          padding={"1.6rem"}
          justifyContent={"space-between"}
        >
          <Box display={"flex"} flexDirection={"column"}>
            <Box marginBottom={"1.6rem"} justifyContent={"space-around"}>
              {" "}
              <Typography fontSize={"2.4rem"} fontWeight={"700"}>
                {type === "Assessment" ? "آزمون" : "آموزش"}
              </Typography>{" "}
            </Box>
            <Box>
              {" "}
              <Typography fontSize={"1.4rem"}>
                {" "}
                {type === "Assessment" ? "تستی، تشریحی" : "ترم اول، ترم دوم، سالیانه"}
              </Typography>{" "}
            </Box>
          </Box>
          <Box paddingBottom={`${type === "Assessment" ? "0" : "1.1rem"}`}>
            <Box component={"img"} src={`${imageLink}`} />
          </Box>
        </Box>
        <Box marginBottom={"3.2rem"}> </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <ButtonKit
            onClick={() => navigate("/dashboard/user/purchase")}
            sx={{ padding: "1.6rem" }}
            fullWidth
            variant="contained"
          >
            <Typography fontSize="1.4rem"> خرید اشتراک</Typography>
          </ButtonKit>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Box margin={"1.2rem 5.2rem 6rem 5.2rem"} paddingBottom={"7.5rem"}>
        <Box
          className={"slogan"}
          display={"flex"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <Box display={"flex"} justifyContent={"flex-end"} gap={"0.8rem"}>
            <ButtonKit sx={{ padding: 0, minWidth: 0 }} onClick={() => navigate("/")}>
              {" "}
              <KaranbalaLogoSvg />
            </ButtonKit>
            <ButtonKit sx={{ padding: 0, minWidth: 0 }} onClick={() => navigate("/")}>
              {" "}
              <KaranbalaLogoTextSvg />
            </ButtonKit>
          </Box>
          <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box display={"flex"} gap={"0.8rem"}>
              <Box marginTop={"0.8rem"}>
                <Typography>یکشنبه ۱۰ اردیبهشت ۱۴۰۲ - ۱۸:۳۷</Typography>
              </Box>
              <Box
                bgcolor={theme?.palette?.grey["50"]}
                padding={"1rem"}
                borderRadius={".5rem"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <TelevisionSvg />
              </Box>
              <Box
                bgcolor={theme?.palette?.grey["50"]}
                padding={"1rem"}
                borderRadius={".5rem"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <AccountSvg />
              </Box>

              <ButtonKit
                onClick={() => {
                  navigate("/shop");
                }}
                sx={{
                  padding: "0px",
                  minWidth: "0px",
                }}
              >
                <Box
                  bgcolor={theme?.palette?.grey["50"]}
                  padding={"1rem"}
                  borderRadius={".5rem"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <BasketSvg />
                </Box>
              </ButtonKit>
            </Box>
          </Box>
        </Box>
        <Box
          fontSize={"2.4rem"}
          padding={"7.9rem 0"}
          display={"flex"}
          justifyContent={"center"}
          fontWeight={"700"}
          color={"#1D252F"}
        >
          برای دسترسی به آموزش‌ها و آزمون‌ها لطفا اشتراک تهیه کنید.{" "}
        </Box>

        <Box display={"flex"} justifyContent={"center"}>
          <GenerateSubscriptionBoxes
            type="Tutorial"
            bgColor={theme.palette.others.info.light}
            imageLink={TutorialImage}
          />
          <GenerateSubscriptionBoxes
            type="Assessment"
            bgColor={theme.palette.secondary["200"]}
            imageLink={AssessmentImage}
          />
        </Box>
      </Box>
    </>
  );
};

export default EducationDetails;
