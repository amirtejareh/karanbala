import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: ThemeOptions) => ({
    arrow: {
        border: `solid ${theme?.palette?.primary["main"]}`,
        borderWidth: " 0 3px 3px 0",
        display: "inline-block",
        padding: "3px",
    },

    left: {
        transform: "rotate(135deg)",
    },
}));

const MainNews = () => {
    const theme: ThemeOptions = useTheme();
    const classes = useStyles();
    return (
        <Box>
            <Box
                margin={"5rem 3.25rem 2.5rem 2.5rem"}
                display={"flex"}
                justifyContent={"space-between"}
            >
                <Box>
                    <Typography fontSize={"2rem"} variant="subtitle1">
                        اخبار
                    </Typography>
                </Box>
                <Box display={"flex"}>
                    <Typography
                        color={theme?.palette?.primary["main"]}
                        fontSize={"2rem"}
                        variant="subtitle1"
                    >
                        بیشتر
                    </Typography>
                    <IconButton size={"small"} aria-label="left" onClick={() => {}}>
                        <Box className={`${classes.arrow} ${classes.left}`} />
                    </IconButton>
                </Box>
            </Box>

            <Box
                margin={"5rem 3.25rem 2.5rem 2.5rem"}
                display={"flex"}
                justifyContent={"space-around"}
                flexWrap={"wrap"}
                gap={"5rem"}
            >
                <Box width={"543px"} display={"flex"}>
                    <Box
                        bgcolor={theme?.palette?.secondary["50"]}
                        borderRadius={"2rem"}
                        height={"116px"}
                        width={"192px"}
                    ></Box>
                    <Box
                        margin={"1.5rem 2rem"}
                        display={"flex"}
                        justifyContent={"space-between"}
                        flexDirection={"column"}
                    >
                        <Box>
                            <Typography>لورم ایپسوم متن ساختگی با تولید تگی </Typography>
                        </Box>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Box>
                                <Typography>۱۴۰۲/۰۱/۳۱</Typography>
                            </Box>
                            <Box>
                                <Typography>۱۰ دقیقه مطالعه</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box width={"543px"} display={"flex"}>
                    <Box
                        bgcolor={theme?.palette?.secondary["50"]}
                        borderRadius={"2rem"}
                        height={"116px"}
                        width={"192px"}
                    ></Box>
                    <Box
                        margin={"1.5rem 2rem"}
                        display={"flex"}
                        justifyContent={"space-between"}
                        flexDirection={"column"}
                    >
                        <Box>
                            <Typography>لورم ایپسوم متن ساختگی با تولید تگی </Typography>
                        </Box>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Box>
                                <Typography>۱۴۰۲/۰۱/۳۱</Typography>
                            </Box>
                            <Box>
                                <Typography>۱۰ دقیقه مطالعه</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export { MainNews };
