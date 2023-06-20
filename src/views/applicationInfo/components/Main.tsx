import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { KaranbalaBannerSvg } from "../../../assets";

const useStyles = makeStyles((theme: ThemeOptions) => ({
    main: {
        height: "600px",
    },
    banner: {
        backgroundColor: theme?.palette?.secondary["50"],
        width: "100%",
        minHeight: "365.48px",
        height: "auto",
    },
    bannerContent: {
        width: "524px",
        margin: "65px 80px",
    },
    bannerSvg: {
        width: "500px",
        margin: "24px 0 0 80px",
    },
    bannerContentAlign: {
        textAlign: "justify",
    },
    bannerContentTitle: {
        fontSize: "4.5rem !important",
        margin: "40px 0",
        lineHeight: "52px",
    },
    bannerContentCaption: {
        fontSize: "2rem !important",
    },
}));
const Main = () => {
    const classes = useStyles();
    return (
        <Box className={classes.main}>
            <Box className={classes.banner} justifyContent={"space-between"} display={"flex"}>
                <Box className={classes.bannerContent}>
                    <Box>
                        <Typography
                            className={` ${classes.bannerContentTitle}`}
                            variant="subtitle1"
                        >
                            کران ي موفقیت در کران بالا
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="subtitle2"
                            className={`${classes.bannerContentAlign} ${classes.bannerContentCaption}`}
                        >
                            ما در کران بالا بر این باوریم که با استعانت از درگاه باري تعالی، همیت و
                            اهتمام اساتید گرانقدر به مقوله آموزش صحیح، جامع، هدفمند و پرهیز از زیاده
                            گویی و با استفاده از ابزار‌ها و روش های نوین آموزشی، بستری مناسب را برای
                            یادگیری شما دانش آموزان با تکیه بر اصل مدیریت زمان فراهم نماییم. امید
                            است با همت و پشتکار خود و استفاده درست و منطقی از تمام بخش های موجود،
                            بتوانید سطح علمی خود را بالا ببرید.
                        </Typography>
                    </Box>
                </Box>

                <Box className={classes.bannerSvg}>
                    <KaranbalaBannerSvg />
                </Box>
            </Box>
        </Box>
    );
};

export { Main };
