import "swiper/css";
import "swiper/css/navigation";
// import "./styles.css";
import { Autoplay } from "swiper";

import { Box, Grid, Stack, Theme, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { BoldArrowDownSvg, BoldArrowUpSvg } from "../../../assets";
import { TabsKit } from "../../../components/kit/Tab";
import { TableKit } from "../../../components/kit/Table";
import { DecreaseArrowSvg, IncreaseArrowSvg } from "../../../assets";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

const tableResult = [
    {
        id: 0,
        title: "کبافق",
        ChangesPercent: "3.4%",
        lastPrice: "32,432",
        count: "3,323,432",
        volume: "3,323,432",
        value: "32,432",
        isDecreased: false,
    },
    {
        id: 1,
        title: "بجهرم",
        ChangesPercent: "3.4%",
        lastPrice: "32,432",
        count: "3,323,432",
        volume: "3,323,432",
        value: "32,432",
        isDecreased: true,
    },
    {
        id: 2,
        title: "کبافق",
        ChangesPercent: "3.4%",
        lastPrice: "32,432",
        count: "3,323,432",
        volume: "3,323,432",
        value: "32,432",
        isDecreased: false,
    },
    {
        id: 3,
        title: "بجهرم",
        ChangesPercent: "3.4%",
        lastPrice: "32,432",
        count: "3,323,432",
        volume: "3,323,432",
        value: "32,432",
        isDecreased: true,
    },
    {
        id: 4,
        title: "کبافق",
        ChangesPercent: "3.4%",
        lastPrice: "32,432",
        count: "3,323,432",
        volume: "3,323,432",
        value: "32,432",
        isDecreased: false,
    },
    {
        id: 5,
        title: "بجهرم",
        ChangesPercent: "3.4%",
        lastPrice: "32,432",
        count: "3,323,432",
        volume: "3,323,432",
        value: "32,432",
        isDecreased: true,
    },
    {
        id: 6,
        title: "کبافق",
        ChangesPercent: "3.4%",
        lastPrice: "32,432",
        count: "3,323,432",
        volume: "3,323,432",
        value: "32,432",
        isDecreased: false,
    },
    {
        id: 7,
        title: "بجهرم",
        ChangesPercent: "3.4%",
        lastPrice: "32,432",
        count: "3,323,432",
        volume: "3,323,432",
        value: "32,432",
        isDecreased: true,
    },
];

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

const TheBest = () => {
    const theme = useTheme();
    const classes = useStyles();
    const [name, setName] = useState(false);
    const [last, setLast] = useState(false);

    const handleNameFilter = () => {
        setName(!name);
    };

    const handleLastFilter = () => {
        setLast(!last);
    };

    return (
        <Stack mt={"4rem"}>
            <Typography mb={2.25} variant="body1" fontWeight={700}>
                سهام های برتر
            </Typography>
            <TabsKit
                initialValue={0}
                tabs={[
                    {
                        title: " افزایش قیمت",
                        children: (
                            <>
                                <Box py={1}>
                                    <Swiper
                                        className={classes.customSwiper}
                                        navigation={false}
                                        dir="rtl"
                                        slidesPerView={1}
                                        spaceBetween={16}
                                        modules={[Autoplay]}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        loop={true}
                                    >
                                        {tableResult.map((item, index) => (
                                            <SwiperSlide key={item.id}>
                                                <Grid
                                                    item
                                                    sx={{
                                                        paddingX: "20px",
                                                        paddingY: "11px",
                                                        width: 320,
                                                        height: 124,
                                                        borderRadius: "16px",
                                                        background:
                                                            "linear-gradient(103.34deg, rgba(37, 43, 61, 0.7) 0.76%, rgba(37, 43, 61, 0.1) 100%)",
                                                    }}
                                                >
                                                    <Box
                                                        display={"flex"}
                                                        justifyContent={"space-between"}
                                                    >
                                                        <Typography
                                                            component={"p"}
                                                            variant={"body2"}
                                                            sx={{
                                                                fontWeight: 500,
                                                                marginBottom: "30px",
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                        <Box
                                                            display={"flex"}
                                                            justifyContent={"flex-end"}
                                                            width={"50%"}
                                                        >
                                                            <Stack mr={2}>
                                                                <Typography
                                                                    component={"p"}
                                                                    variant={"caption"}
                                                                    sx={{
                                                                        fontWeight: 500,
                                                                        marginBottom: "10px",
                                                                        color: "#A7B1BF",
                                                                    }}
                                                                >
                                                                    آخرین قیمت
                                                                </Typography>
                                                                <Typography
                                                                    component={"p"}
                                                                    variant={"caption"}
                                                                    sx={{
                                                                        fontWeight: 500,
                                                                        marginBottom: "10px",
                                                                    }}
                                                                >
                                                                    {item.lastPrice}
                                                                </Typography>
                                                            </Stack>
                                                            <Stack>
                                                                <Typography
                                                                    component={"p"}
                                                                    variant={"caption"}
                                                                    sx={{
                                                                        fontWeight: 500,
                                                                        marginBottom: "10px",
                                                                        color: "#A7B1BF",
                                                                    }}
                                                                >
                                                                    تغییرات
                                                                </Typography>
                                                                <Typography
                                                                    color={
                                                                        item.isDecreased
                                                                            ? theme.palette.error
                                                                                  .main
                                                                            : theme.palette.success
                                                                                  .main
                                                                    }
                                                                    component={"p"}
                                                                    variant={"caption"}
                                                                    sx={{
                                                                        fontWeight: 500,
                                                                        marginBottom: "10px",
                                                                    }}
                                                                >
                                                                    ( {item.ChangesPercent})
                                                                </Typography>
                                                            </Stack>
                                                        </Box>
                                                    </Box>

                                                    <Box
                                                        display={"flex"}
                                                        justifyContent={"space-between"}
                                                        width={"100%"}
                                                    >
                                                        <Stack>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                    color: "#A7B1BF",
                                                                }}
                                                            >
                                                                تعداد
                                                            </Typography>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                }}
                                                            >
                                                                {item.count}
                                                            </Typography>
                                                        </Stack>
                                                        <Stack>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                    color: "#A7B1BF",
                                                                }}
                                                            >
                                                                حجم
                                                            </Typography>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                }}
                                                            >
                                                                {item.volume}
                                                            </Typography>
                                                        </Stack>
                                                        <Stack>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                    color: "#A7B1BF",
                                                                }}
                                                            >
                                                                ارزش
                                                            </Typography>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                }}
                                                            >
                                                                {item.value}
                                                            </Typography>
                                                        </Stack>
                                                    </Box>
                                                </Grid>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </Box>
                            </>
                        ),
                    },
                    {
                        title: " کاهش قیمت",
                        children: (
                            <>
                                <Box py={1}>
                                    <Swiper
                                        className={classes.customSwiper}
                                        navigation={false}
                                        dir="rtl"
                                        slidesPerView={1}
                                        spaceBetween={16}
                                        modules={[Autoplay]}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        loop={true}
                                    >
                                        {tableResult.map((item, index) => (
                                            <SwiperSlide key={item.id}>
                                                <Grid
                                                    item
                                                    sx={{
                                                        paddingX: "20px",
                                                        paddingY: "11px",
                                                        width: 320,
                                                        height: 124,
                                                        borderRadius: "16px",
                                                        background:
                                                            "linear-gradient(103.34deg, rgba(37, 43, 61, 0.7) 0.76%, rgba(37, 43, 61, 0.1) 100%)",
                                                    }}
                                                >
                                                    <Box
                                                        display={"flex"}
                                                        justifyContent={"space-between"}
                                                    >
                                                        <Typography
                                                            component={"p"}
                                                            variant={"body2"}
                                                            sx={{
                                                                fontWeight: 500,
                                                                marginBottom: "30px",
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                        <Box
                                                            display={"flex"}
                                                            justifyContent={"flex-end"}
                                                            width={"50%"}
                                                        >
                                                            <Stack mr={2}>
                                                                <Typography
                                                                    component={"p"}
                                                                    variant={"caption"}
                                                                    sx={{
                                                                        fontWeight: 500,
                                                                        marginBottom: "10px",
                                                                        color: "#A7B1BF",
                                                                    }}
                                                                >
                                                                    آخرین قیمت
                                                                </Typography>
                                                                <Typography
                                                                    component={"p"}
                                                                    variant={"caption"}
                                                                    sx={{
                                                                        fontWeight: 500,
                                                                        marginBottom: "10px",
                                                                    }}
                                                                >
                                                                    {item.lastPrice}
                                                                </Typography>
                                                            </Stack>
                                                            <Stack>
                                                                <Typography
                                                                    component={"p"}
                                                                    variant={"caption"}
                                                                    sx={{
                                                                        fontWeight: 500,
                                                                        marginBottom: "10px",
                                                                        color: "#A7B1BF",
                                                                    }}
                                                                >
                                                                    تغییرات
                                                                </Typography>
                                                                <Typography
                                                                    color={
                                                                        item.isDecreased
                                                                            ? theme.palette.error
                                                                                  .main
                                                                            : theme.palette.success
                                                                                  .main
                                                                    }
                                                                    component={"p"}
                                                                    variant={"caption"}
                                                                    sx={{
                                                                        fontWeight: 500,
                                                                        marginBottom: "10px",
                                                                    }}
                                                                >
                                                                    ( {item.ChangesPercent})
                                                                </Typography>
                                                            </Stack>
                                                        </Box>
                                                    </Box>

                                                    <Box
                                                        display={"flex"}
                                                        justifyContent={"space-between"}
                                                        width={"100%"}
                                                    >
                                                        <Stack>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                    color: "#A7B1BF",
                                                                }}
                                                            >
                                                                تعداد
                                                            </Typography>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                }}
                                                            >
                                                                {item.count}
                                                            </Typography>
                                                        </Stack>
                                                        <Stack>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                    color: "#A7B1BF",
                                                                }}
                                                            >
                                                                حجم
                                                            </Typography>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                }}
                                                            >
                                                                {item.volume}
                                                            </Typography>
                                                        </Stack>
                                                        <Stack>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                    color: "#A7B1BF",
                                                                }}
                                                            >
                                                                ارزش
                                                            </Typography>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                }}
                                                            >
                                                                {item.value}
                                                            </Typography>
                                                        </Stack>
                                                    </Box>
                                                </Grid>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </Box>
                            </>
                        ),
                    },
                    {
                        title: " حجم معاملات ",
                        children: (
                            <>
                                <Box py={1}>
                                    <Swiper
                                        className={classes.customSwiper}
                                        navigation={false}
                                        dir="rtl"
                                        slidesPerView={1}
                                        spaceBetween={16}
                                        modules={[Autoplay]}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false,
                                        }}
                                        loop={true}
                                    >
                                        {tableResult.map((item, index) => (
                                            <SwiperSlide key={item.id}>
                                                <Grid
                                                    item
                                                    sx={{
                                                        paddingX: "20px",
                                                        paddingY: "11px",
                                                        width: 320,
                                                        height: 124,
                                                        borderRadius: "16px",
                                                        background:
                                                            "linear-gradient(103.34deg, rgba(37, 43, 61, 0.7) 0.76%, rgba(37, 43, 61, 0.1) 100%)",
                                                    }}
                                                >
                                                    <Box
                                                        display={"flex"}
                                                        justifyContent={"space-between"}
                                                    >
                                                        <Typography
                                                            component={"p"}
                                                            variant={"body2"}
                                                            sx={{
                                                                fontWeight: 500,
                                                                marginBottom: "30px",
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                        <Box
                                                            display={"flex"}
                                                            justifyContent={"flex-end"}
                                                            width={"50%"}
                                                        >
                                                            <Stack mr={2}>
                                                                <Typography
                                                                    component={"p"}
                                                                    variant={"caption"}
                                                                    sx={{
                                                                        fontWeight: 500,
                                                                        marginBottom: "10px",
                                                                        color: "#A7B1BF",
                                                                    }}
                                                                >
                                                                    آخرین قیمت
                                                                </Typography>
                                                                <Typography
                                                                    component={"p"}
                                                                    variant={"caption"}
                                                                    sx={{
                                                                        fontWeight: 500,
                                                                        marginBottom: "10px",
                                                                    }}
                                                                >
                                                                    {item.lastPrice}
                                                                </Typography>
                                                            </Stack>
                                                            <Stack>
                                                                <Typography
                                                                    component={"p"}
                                                                    variant={"caption"}
                                                                    sx={{
                                                                        fontWeight: 500,
                                                                        marginBottom: "10px",
                                                                        color: "#A7B1BF",
                                                                    }}
                                                                >
                                                                    تغییرات
                                                                </Typography>
                                                                <Typography
                                                                    color={
                                                                        item.isDecreased
                                                                            ? theme.palette.error
                                                                                  .main
                                                                            : theme.palette.success
                                                                                  .main
                                                                    }
                                                                    component={"p"}
                                                                    variant={"caption"}
                                                                    sx={{
                                                                        fontWeight: 500,
                                                                        marginBottom: "10px",
                                                                    }}
                                                                >
                                                                    ( {item.ChangesPercent})
                                                                </Typography>
                                                            </Stack>
                                                        </Box>
                                                    </Box>

                                                    <Box
                                                        display={"flex"}
                                                        justifyContent={"space-between"}
                                                        width={"100%"}
                                                    >
                                                        <Stack>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                    color: "#A7B1BF",
                                                                }}
                                                            >
                                                                تعداد
                                                            </Typography>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                }}
                                                            >
                                                                {item.count}
                                                            </Typography>
                                                        </Stack>
                                                        <Stack>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                    color: "#A7B1BF",
                                                                }}
                                                            >
                                                                حجم
                                                            </Typography>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                }}
                                                            >
                                                                {item.volume}
                                                            </Typography>
                                                        </Stack>
                                                        <Stack>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                    color: "#A7B1BF",
                                                                }}
                                                            >
                                                                ارزش
                                                            </Typography>
                                                            <Typography
                                                                component={"p"}
                                                                variant={"caption"}
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    marginBottom: "10px",
                                                                }}
                                                            >
                                                                {item.value}
                                                            </Typography>
                                                        </Stack>
                                                    </Box>
                                                </Grid>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </Box>
                            </>
                        ),
                    },
                ]}
            />
        </Stack>
    );
};

export { TheBest };
