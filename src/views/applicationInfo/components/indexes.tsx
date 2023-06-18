// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "./styles.css";
import { Autoplay } from "swiper";
import { Box, Grid, Stack, Theme, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DecreaseArrowSvg, IncreaseArrowSvg } from "../../../assets";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

const useStyles = makeStyles((theme: Theme) => ({
    customSwiper: {
        "& .swiper-button-prev": {
            color: theme.palette.common.white,
            "&:after": {
                fontSize: "10px",
            },
        },
        "& .swiper-button-next": {
            color: theme.palette.common.white,
            "&:after": {
                fontSize: "10px",
            },
        },
    },
}));
const indexList = [
    { id: 0, name: "شاخص بورس", from: "1,311,256", to: "8,449", percent: "5", status: "increase" },
    { id: 1, name: "شاخص بورس", from: "1,311,256", to: "8,449", percent: "4", status: "decrease" },
    { id: 2, name: "شاخص بورس", from: "1,311,256", to: "8,449", percent: "5", status: "increase" },
    { id: 3, name: "شاخص بورس", from: "1,311,256", to: "8,449", percent: "4", status: "decrease" },
    { id: 4, name: "شاخص بورس", from: "1,311,256", to: "8,449", percent: "5", status: "increase" },
    { id: 5, name: "شاخص بورس", from: "1,311,256", to: "8,449", percent: "5", status: "increase" },
    { id: 6, name: "شاخص بورس", from: "1,311,256", to: "8,449", percent: "4", status: "decrease" },
    { id: 7, name: "شاخص بورس", from: "1,311,256", to: "8,449", percent: "5", status: "increase" },
    { id: 8, name: "شاخص بورس", from: "1,311,256", to: "8,449", percent: "4", status: "decrease" },
    { id: 9, name: "شاخص بورس", from: "1,311,256", to: "8,449", percent: "5", status: "increase" },
];

const Indexes = () => {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <Grid
            container
            justifyContent={"space-between"}
            mt={"1rem"}
            flexWrap="nowrap"
            sx={{ overflowX: "scroll" }}
        >
            <Swiper
                className={classes.customSwiper}
                navigation={false}
                dir="rtl"
                slidesPerView={2}
                spaceBetween={16}
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {indexList.map((item, index) => (
                    <SwiperSlide key={item.id}>
                        <Grid
                            item
                            sx={{
                                paddingX: "20px",
                                paddingY: "11px",
                                width: 210,
                                height: 100,
                                borderRadius: "10px",
                                background:
                                    "linear-gradient(258.51deg, rgba(37, 43, 61, 0.7) 2.23%, rgba(37, 43, 61, 0.1) 98.23%)",
                                backdropFilter: "blur(40px)",
                            }}
                        >
                            <Typography
                                component={"p"}
                                variant={"body2"}
                                sx={{ fontWeight: 500, marginBottom: "30px" }}
                            >
                                {item.name}
                            </Typography>
                            <Box display={"flex"} alignItems="center">
                                <Typography component={"p"} variant="caption">
                                    {item.status === "increase" ? (
                                        <Typography
                                            pr={0.5}
                                            variant="caption"
                                            color={theme.palette.success.main}
                                        >{`(${item.percent}%)`}</Typography>
                                    ) : (
                                        <Typography
                                            pr={0.5}
                                            variant="caption"
                                            color={theme.palette.error.main}
                                        >{`(${item.percent}%)`}</Typography>
                                    )}
                                    {item.to}
                                </Typography>
                                <Box px={1.5}>
                                    {item.status === "increase" ? (
                                        <IncreaseArrowSvg />
                                    ) : (
                                        <DecreaseArrowSvg />
                                    )}
                                </Box>
                                <Typography component={"p"} variant="caption">
                                    {item.from}
                                </Typography>
                            </Box>
                        </Grid>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Grid>
    );
};

export { Indexes };
