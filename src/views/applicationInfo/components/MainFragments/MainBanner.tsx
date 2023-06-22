import { Box, Typography } from "@mui/material";
import { KaranbalaBannerSvg } from "../../../../assets";
import { makeStyles } from "@mui/styles";
import { ThemeOptions } from "@mui/system";

const useStyles = makeStyles((theme: ThemeOptions) => ({
    banner: {
        backgroundColor: theme?.palette?.secondary["50"],
    },
}));

const MainBanner = () => {
    const classes = useStyles();
    return (
        <Box
            className={`${classes.banner} ${"banner"}`}
            width={"100%"}
            minHeight={"365.48px"}
            height={"auto"}
            justifyContent={"space-between"}
            display={"flex"}
            flexWrap={"wrap"}
        >
            <Box width={"524px"} margin={"65px 80px"} className={` ${"bannerContent"}`}>
                <Box>
                    <Typography
                        margin={"40px 0"}
                        lineHeight={"52px"}
                        fontSize={"4.5rem"}
                        variant="subtitle1"
                    >
                        کران ي موفقیت در کران بالا
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="subtitle2" fontSize={"2rem"} textAlign={"justify"}>
                        ما در کران بالا بر این باوریم که با استعانت از درگاه باري تعالی، همیت و
                        اهتمام اساتید گرانقدر به مقوله آموزش صحیح، جامع، هدفمند و پرهیز از زیاده
                        گویی و با استفاده از ابزار‌ها و روش های نوین آموزشی، بستری مناسب را برای
                        یادگیری شما دانش آموزان با تکیه بر اصل مدیریت زمان فراهم نماییم. امید است با
                        همت و پشتکار خود و استفاده درست و منطقی از تمام بخش های موجود، بتوانید سطح
                        علمی خود را بالا ببرید.
                    </Typography>
                </Box>
            </Box>

            <Box width={"500px"} margin={"24px 0 0 80px"} className={`${"bannerSvg"}`}>
                <KaranbalaBannerSvg />
            </Box>
        </Box>
    );
};

export { MainBanner };
