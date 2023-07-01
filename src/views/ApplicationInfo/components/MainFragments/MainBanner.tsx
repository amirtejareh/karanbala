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
            justifyContent={"space-around"}
            display={"flex"}
            flexWrap={"wrap"}
            borderRadius={"2rem"}
        >
            <Box margin={"65px 80px"} className={` ${"bannerContent"}`}>
                <Box>
                    <Typography
                        margin={"0 0 4rem 0"}
                        lineHeight={"52px"}
                        fontSize={"5.5rem"}
                        variant="subtitle1"
                        textAlign={"center"}
                        className="karanbalatitle"
                    >
                        کرانه‌ی موفقیت در کران بالا
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        variant="subtitle2"
                        fontSize={"2rem"}
                        textAlign={"justify"}
                        fontWeight={"400"}
                        width={"59rem"}
                        className="karanbalaDescription"
                    >
                        ما در کران بالا بر این باوریم که با استعانت از درگاه باري تعالی، همیت و
                        اهتمام اساتید گرانقدر به مقوله آموزش صحیح، جامع، هدفمند و پرهیز از زیاده
                        گویی و با استفاده از ابزار‌ها و روش های نوین آموزشی، بستری مناسب را برای
                        یادگیری شما دانش آموزان با تکیه بر اصل مدیریت زمان فراهم نماییم. امید است با
                        همت و پشتکار خود و استفاده درست و منطقی از تمام بخش های موجود، بتوانید سطح
                        علمی خود را بالا ببرید.
                    </Typography>
                </Box>
            </Box>

            <Box margin={"24px 0 0 80px"} className={`${"bannerSvg"}`}>
                <KaranbalaBannerSvg />
            </Box>
        </Box>
    );
};

export { MainBanner };
