import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import {  AnalysisSvg,  FaqSvg,  LearningSvg, NewsSvg} from "../../../assets";
import { IconButtonKit } from "../../../components/kit/IconButton";

const accessList = [
    {
        id: 0,
        name: "اخبار",
        icon: <NewsSvg />,
        onClick: () => {},
        href: "#",
    },
    {
        id: 1,
        name: "تحلیل",
        icon: <AnalysisSvg />,
        onClick: () => {},
        href: "#",
    },
    { id: 2, name: "دوره آموزشی", icon: <LearningSvg />, onClick: () => {}, href: "#" },
    {
        id: 3,
        name: "سوالات متداول",
        icon: <FaqSvg/>,
        onClick: () => {},
        href: "#",
    },
];

const Options = () => {
 
 
    return (
        <Grid container justifyContent={"center"} mt={4}>
            {accessList.map((item, index) => (
                <Grid xs={12} item>
                    <Box
                        display={"flex"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        px={3}
                        mb={3}
                        sx={{
                            
                            height: 160,
                            borderRadius: "16px",
                            background:
                                "linear-gradient(106.54deg, rgba(37, 43, 61, 0.7) 0.75%, rgba(37, 43, 61, 0.1) 96.35%)",
                            backdropFilter: "blur(20px)",
                            // mr: 6.5,
                        }}
                    >
                        <Typography
                            noWrap
                            sx={{
                                fontSize: "1.6rem",
                                lineHeight: "3.8rem",
                                mt: 2,
                                fontWeight: 600,
                                color: "#fff",
                            }}
                        >
                            {item.name}
                        </Typography>
                        <IconButton
                            sx={{ height: "130px", width: "130px" }}
                            size="small"
                            children={item.icon}
                        />
                    </Box>
                </Grid>
            ))}
        </Grid>
    );
};

export { Options };
