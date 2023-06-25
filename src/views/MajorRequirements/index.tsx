import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import {
    AccountSvg,
    ArrowLeftSvg,
    ArrowRightSvg,
    BasketSvg,
    KaranbalaLogoSvg,
    KaranbalaLogoTextSvg,
    TelevisionSvg,
} from "../../assets";
import ProfilePicture from "../../assets/images/profilePicture.png";
import AlirezaPicture from "../../assets/images/alireza.png";
import AnaPicture from "../../assets/images/ana.png";
import SaraPicture from "../../assets/images/sara.png";
import DrSamiee from "../../assets/images/drsamiee.png";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { ButtonKit } from "../../components/kit/Button";
import Education from "../../assets/images/education.png";
import Exam from "../../assets/images/exam.png";
import Communication from "../../assets/images/communication.png";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { ModalKit } from "../../components/kit/Modal";

const useStyles = makeStyles((theme: ThemeOptions) => ({
    parentEducationBoxes: {
        "& > div": {
            flexBasis: "25%",
        },
        "& > div > div > img": {
            flexBasis: "100%",
        },
    },
}));

const EducationDetails = () => {
    const theme: ThemeOptions = useTheme();
    const classes = useStyles();
    const navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const ModalExam = () => {
        return <>test</>;
    };

    return (
        <>
            <ModalKit
                onClose={() => {
                    setModalOpen(false);
                }}
                modalState={modalOpen}
                title={<>آزمون مورد نظر را انتخاب کنید</>}
                maxWidth={"xs"}
            >
                {({ handleApproved }: any) => <ModalExam />}
            </ModalKit>
            <Box margin={"0.75rem 3.25rem 6rem 3.25rem"} paddingBottom={"7.5rem"}>
                <Box display={"flex"} justifyContent={"flex-end"} gap={"2rem"}>
                    <KaranbalaLogoSvg />
                    <KaranbalaLogoTextSvg />
                </Box>
                <Box
                    className={"slogan"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                >
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
                        <Box component={"img"} src={ProfilePicture}></Box>
                        <Box display={"flex"} margin={"2rem"} flexDirection={"column"}>
                            <Box display={"flex"}>
                                <Typography marginRight={"1rem"} variant="subtitle2">
                                    نام و نام خانوادگی:{" "}
                                </Typography>
                                <Typography variant="subtitle1">امیر بهادری</Typography>
                            </Box>
                            <Box display={"flex"}>
                                <Typography marginRight={"1rem"} variant="subtitle2">
                                    شعار من:{" "}
                                </Typography>
                                <Typography variant="subtitle1">
                                    من اهل جنگیدنم، از پای نمی‌افتم
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        margin={"4rem"}
                    >
                        <Box display={"flex"} gap={"2.8rem"}>
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
                        </Box>
                        <Box marginTop={"2rem"}>
                            <Typography>یکشنبه ۱۰ اردیبهشت ۱۴۰۲ - ۱۸:۳۷</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box
                        className={`drSamieeBox`}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Box>
                            <Typography variant="subtitle1" fontSize="2.5rem" marginBottom={"2rem"}>
                                پروفسور سمیعی
                            </Typography>
                            <Typography lineHeight={"3.5rem"}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی
                                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک لورم ایپسوم متن
                                ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                                چاپ و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید
                                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم
                                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
                                طراحان گرافیک وم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی
                                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم
                                متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                گرافیک گی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک وم متن
                                ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
                                گرافیک لورم ایپسوم متن ساختگی با تولید
                            </Typography>
                        </Box>
                        <img
                            src={`${DrSamiee}`}
                            alt="dr samieee"
                            width={"273rem"}
                            height={"271rem"}
                        />
                    </Box>
                </Box>
                <Box
                    display={"flex"}
                    marginTop={"9rem"}
                    gap={"5rem"}
                    justifyContent={"space-between"}
                    className={`${classes.parentEducationBoxes} ${"parentEducationBoxes"}`}
                    flexWrap={"wrap"}
                >
                    <Box
                        boxShadow={"0px 6px 12px 4px #252D371A"}
                        padding={"2rem"}
                        borderRadius={"2rem"}
                        flexWrap={"wrap"}
                    >
                        <Box display={"flex"} justifyContent={"center"}>
                            <Box borderRadius={"1rem"} component={"img"} src={Education}></Box>
                        </Box>
                        <Box marginTop={"1rem"} display={"flex"} justifyContent={"space-between"}>
                            <Box>
                                <Typography variant="subtitle1">آموزش</Typography>
                            </Box>
                            <Box>
                                <ButtonKit
                                    variant="contained"
                                    onClick={() => navigate("/karanbala/education-details")}
                                >
                                    شروع
                                </ButtonKit>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        boxShadow={"0px 6px 12px 4px #252D371A"}
                        padding={"2rem"}
                        borderRadius={"2rem"}
                        flexWrap={"wrap"}
                    >
                        <Box display={"flex"} justifyContent={"center"}>
                            <Box borderRadius={"1rem"} component={"img"} src={Exam}></Box>
                        </Box>
                        <Box marginTop={"1rem"} display={"flex"} justifyContent={"space-between"}>
                            <Box>
                                <Typography variant="subtitle1">آزمون</Typography>
                            </Box>
                            <Box>
                                <ButtonKit
                                    variant="contained"
                                    onClick={() => {
                                        setModalOpen(!modalOpen);
                                    }}
                                >
                                    شروع
                                </ButtonKit>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        boxShadow={"0px 6px 12px 4px #252D371A"}
                        padding={"2rem"}
                        borderRadius={"2rem"}
                        flexWrap={"wrap"}
                    >
                        <Box display={"flex"} justifyContent={"center"}>
                            <Box borderRadius={"1rem"} component={"img"} src={Communication}></Box>
                        </Box>
                        <Box marginTop={"1rem"} display={"flex"} justifyContent={"space-between"}>
                            <Box>
                                <Typography variant="subtitle1">ارتباط آنلاین</Typography>
                            </Box>
                            <Box>
                                <ButtonKit variant="contained" onClick={() => {}}>
                                    شروع
                                </ButtonKit>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box
                    marginTop={"8rem"}
                    marginBottom={"8rem"}
                    display={"flex"}
                    justifyContent={"space-between"}
                >
                    <Typography variant="subtitle1" fontSize="2.5rem">
                        لیست اساتید کران بالا
                    </Typography>
                    <Box>
                        <IconButton>
                            <ArrowRightSvg />
                        </IconButton>
                        <IconButton>
                            <ArrowLeftSvg />
                        </IconButton>
                    </Box>
                </Box>
                <Box
                    className={"teacherPicture"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                    gap={"10rem"}
                >
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        width={"28rem"}
                    >
                        <Box
                            width={"20rem"}
                            height={"20rem"}
                            component={"img"}
                            borderRadius={"50%"}
                            src={AlirezaPicture}
                        ></Box>
                        <Box margin={"1rem 0"}>
                            <Typography variant="subtitle1" fontSize={"2rem"}>
                                آنا جاوید
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2">فیزیک</Typography>
                        </Box>
                        <Box margin={"1rem 0"} textAlign={"center"}>
                            <Typography variant="subtitle1">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی
                                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک{" "}
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        width={"28rem"}
                    >
                        <Box
                            width={"20rem"}
                            height={"20rem"}
                            component={"img"}
                            borderRadius={"50%"}
                            src={SaraPicture}
                        ></Box>
                        <Box margin={"1rem 0"}>
                            <Typography variant="subtitle1" fontSize={"2rem"}>
                                سارا محمدی
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2">فیزیک</Typography>
                        </Box>
                        <Box margin={"1rem 0"} textAlign={"center"}>
                            <Typography variant="subtitle1">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی
                                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک{" "}
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        width={"28rem"}
                    >
                        <Box
                            width={"20rem"}
                            height={"20rem"}
                            component={"img"}
                            borderRadius={"50%"}
                            src={AnaPicture}
                        ></Box>
                        <Box margin={"1rem 0"}>
                            <Typography variant="subtitle1" fontSize={"2rem"}>
                                علیرضا سام
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2">فیزیک</Typography>
                        </Box>
                        <Box margin={"1rem 0"} textAlign={"center"}>
                            <Typography variant="subtitle1">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                                استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی
                                نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک{" "}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default EducationDetails;
