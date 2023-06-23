import { Box, Typography } from "@mui/material";
import { BookSavedSvg } from "../../../../assets";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { ButtonKit } from "../../../../components/kit/Button";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme: ThemeOptions) => ({
    majorBox: {
        "& > div": {
            boxShadow: "0px 4px 8px 0px #252D370F",
            flexBasis: "25%",
        },
        "& button": {
            margin: "auto",
        },
    },
}));

const MainMajorBoxes = () => {
    const theme: ThemeOptions = useTheme();
    const classes = useStyles();
    const navigate = useNavigate();

    const text = [
        "ریاضی دهم",
        "تجربی دهم",
        "انسانی دهم",
        "ریاضی یازدهم",
        "تجربی یازدهم",
        "انسانی یازدهم",
        "ریاضی دوازدهم",
        "تجربی دوازدهم",
        "انسانی دوازدهم",
        "هفتم",
        "هشتم",
        "نهم",
        "منحصرا زبان",
    ];
    const path = [
        "major-requirements",
        "major-requirements",
        "major-requirements",
        "major-requirements",
        "major-requirements",
        "major-requirements",
        "major-requirements",
        "major-requirements",
        "major-requirements",
        "major-requirements",
        "major-requirements",
        "major-requirements",
        "major-requirements",
    ];

    const color = [
        theme?.palette?.primary["light"],
        theme?.palette?.grey["50"],
        theme?.palette?.others.warning.light,
        "#FCF5B2",
        theme?.palette?.common.white,
        theme?.palette?.primary["50"],
        theme?.palette?.others.info.light,
        theme?.palette?.others.success.light,
        theme?.palette?.secondary["200"],
        "#DBFFF6",
        "#ECECF6",
        "#FFCCD5",
        "#E2E3FF",
    ];

    const redirectRoute = (path: string) => {
        return navigate(`/karanbala/${path}`);
    };
    return (
        <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
            className={classes.majorBox}
        >
            {text.map((value, index) => {
                return (
                    <Box
                        bgcolor={color[index]}
                        display={"flex"}
                        height={"7rem"}
                        alignItems={"center"}
                        borderRadius={"1.6rem"}
                        margin={"2.5rem 3.25rem 2.5rem 2.5rem"}
                    >
                        <Box
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                            width={"5rem"}
                            height={"5rem"}
                            margin={"1rem"}
                            bgcolor={theme?.palette?.common.white}
                            borderRadius={"1rem"}
                            padding={"1rem"}
                        >
                            <BookSavedSvg />
                        </Box>

                        <ButtonKit onClick={() => redirectRoute(path[index])}>
                            <Typography variant="subtitle1">{value}</Typography>
                        </ButtonKit>
                    </Box>
                );
            })}
        </Box>
    );
};

export { MainMajorBoxes };
