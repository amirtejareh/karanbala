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
            <Box
                bgcolor={theme?.palette?.primary["light"]}
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

                <ButtonKit onClick={() => redirectRoute("major-requirements")}>
                    <Typography variant="subtitle1">ریاضی دهم</Typography>
                </ButtonKit>
            </Box>
            <Box
                bgcolor={theme?.palette?.grey["50"]}
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
                <ButtonKit onClick={() => redirectRoute("major-requirements")}>
                    <Typography variant="subtitle1">تجربی دهم</Typography>
                </ButtonKit>
            </Box>

            <Box
                bgcolor={theme?.palette?.others.warning.light}
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
                <ButtonKit onClick={() => redirectRoute("major-requirements")}>
                    <Typography variant="subtitle1">انسانی دهم</Typography>
                </ButtonKit>
            </Box>

            <Box
                bgcolor={"#FCF5B2"}
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

                <ButtonKit onClick={() => redirectRoute("major-requirements")}>
                    <Typography variant="subtitle1">ریاضی یازدهم</Typography>
                </ButtonKit>
            </Box>

            <Box
                bgcolor={theme?.palette?.common.white}
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
                <ButtonKit onClick={() => redirectRoute("major-requirements")}>
                    <Typography variant="subtitle1">تجربی یازدهم</Typography>
                </ButtonKit>
            </Box>

            <Box
                bgcolor={theme?.palette?.primary["50"]}
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
                <ButtonKit onClick={() => redirectRoute("major-requirements")}>
                    <Typography variant="subtitle1">انسانی یازدهم</Typography>
                </ButtonKit>
            </Box>

            <Box
                bgcolor={theme?.palette?.others.info.light}
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
                <ButtonKit onClick={() => redirectRoute("major-requirements")}>
                    <Typography variant="subtitle1">ریاضی دوازدهم</Typography>
                </ButtonKit>
            </Box>

            <Box
                bgcolor={theme?.palette?.others.success.light}
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
                <ButtonKit onClick={() => redirectRoute("major-requirements")}>
                    <Typography variant="subtitle1">تجربی دوازدهم</Typography>
                </ButtonKit>
            </Box>

            <Box
                bgcolor={theme?.palette?.secondary["200"]}
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
                <ButtonKit onClick={() => redirectRoute("major-requirements")}>
                    <Typography variant="subtitle1">انسانی دوازدهم</Typography>
                </ButtonKit>
            </Box>

            <Box
                bgcolor={"#DBFFF6"}
                display={"flex"}
                height={"7rem"}
                alignItems={"center"}
                width={"19.125rem"}
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
                <ButtonKit onClick={() => redirectRoute("major-requirements")}>
                    <Typography variant="subtitle1"> هفتم</Typography>
                </ButtonKit>
            </Box>
            <Box
                bgcolor={"#ECECF6"}
                display={"flex"}
                height={"7rem"}
                alignItems={"center"}
                width={"19.125rem"}
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
                <ButtonKit onClick={() => redirectRoute("major-requirements")}>
                    <Typography variant="subtitle1"> هشتم</Typography>
                </ButtonKit>
            </Box>
            <Box
                bgcolor={"#FFCCD5"}
                display={"flex"}
                height={"7rem"}
                alignItems={"center"}
                width={"19.125rem"}
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
                <ButtonKit onClick={() => redirectRoute("major-requirements")}>
                    <Typography variant="subtitle1"> نهم</Typography>
                </ButtonKit>
            </Box>
            <Box
                bgcolor={"#E2E3FF"}
                display={"flex"}
                height={"7rem"}
                alignItems={"center"}
                width={"19.125rem"}
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
                <ButtonKit onClick={() => redirectRoute("major-requirements")}>
                    <Typography variant="subtitle1"> منحصرا زبان</Typography>
                </ButtonKit>
            </Box>
        </Box>
    );
};

export { MainMajorBoxes };
