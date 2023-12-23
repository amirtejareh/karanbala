import { Box, Typography } from "@mui/material";
import { BookSavedSvg } from "../../../../assets";
import { useTheme } from "@mui/styles";
import { ThemeOptions } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { ButtonKit } from "../../../../components/kit/Button";
import { useNavigate } from "react-router-dom";
import useGetGradeLevels from "../../../../hooks/grade-level/useGetGradeLevels";

const useStyles = makeStyles((theme: ThemeOptions) => ({
    majorBox: {
        "& > div": {
            flexBasis: "25%",
            display: "block",
            margin: "10px",
        },
        "& button": {
            width: "100%",
        },
        "& button > div": {
            width: "100%",
        },
    },
}));

const MainMajorBoxes = () => {
    const theme: ThemeOptions = useTheme();
    const classes = useStyles();
    const navigate = useNavigate();

    const gradeLevels = useGetGradeLevels();

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
        theme?.palette?.secondary["main"],
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
        return navigate(`/${path}`);
    };
    return (
        <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            flexWrap={"wrap"}
            className={`${classes.majorBox} ${"majorBox"}`}
        >
            {!gradeLevels?.isLoading &&
                gradeLevels?.data &&
                gradeLevels?.data?.map((value, index) => {
                    return (
                        <Box key={index}>
                            <ButtonKit
                                onClick={() => {
                                    localStorage.setItem("gradeLevel", value.title);
                                    redirectRoute(path[index]);
                                }}
                            >
                                <Box
                                    bgcolor={color[index]}
                                    display={"flex"}
                                    height={"7rem"}
                                    alignItems={"center"}
                                    borderRadius={"1rem"}
                                    boxShadow={"0px 4px 8px 0px #252D370F"}
                                >
                                    <Box
                                        display={"flex"}
                                        justifyContent={"center"}
                                        alignItems={"center"}
                                        width={"5rem"}
                                        height={"5rem"}
                                        margin={"1rem"}
                                        bgcolor={theme?.palette?.common.white}
                                        padding={"1rem"}
                                        borderRadius={"1rem"}
                                    >
                                        <BookSavedSvg />
                                    </Box>

                                    <Typography margin={"0 auto"} variant="subtitle1">
                                        {value.title}
                                    </Typography>
                                </Box>
                            </ButtonKit>
                        </Box>
                    );
                })}
        </Box>
    );
};

export { MainMajorBoxes };
