import {
    Box,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
    BagTickSvg,
    CallSvg,
    CardSvg,
    DeleteSvg,
    FavariteChartSvg,
    LocationSvg,
    MessageSvg,
    PercentageCircleSvg,
    SwapSvg,
} from "../../../assets";
import { IconButtonKit } from "../../../components/kit/IconButton";

const accessList = [
    {
        id: 0,
        name: "کارمزد کمتر",
        icon: <PercentageCircleSvg />,
        onClick: () => {},
        href: "#",
    },
    {
        id: 1,
        name: "راحت و آسان",
        icon: <FavariteChartSvg />,
        onClick: () => {},
        href: "#",
    },
    { id: 2, name: "سبد پیشنهادی سهام", icon: <BagTickSvg />, onClick: () => {}, href: "#" },
    {
        id: 3,
        name: "بسته های اعتباری",
        icon: <CardSvg />,
        onClick: () => {},
        href: "#",
    },
];

const Footer = () => {
    return (
        <Stack mt={"4rem"}>
            <Grid container>
                <Grid item xs={12}>
                    <Box justifyContent={"center"} display={"flex"}>
                        <Link to="/pv/dashboard">
                            <img src="/images/dorin-logo.svg" alt="logo" height={80} />
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Stack alignItems={"center"}>
                        <Typography variant="body1" mb={2} mt={2}>
                            لینک ها
                        </Typography>
                        <Box width={"100%"}>
                            <List sx={{ display: "flex" }}>
                                <ListItem sx={{ textAlign: "center" }} disablePadding>
                                    <ListItemText primary="محصولات" />
                                </ListItem>
                                <ListItem sx={{ textAlign: "center" }} disablePadding>
                                    <ListItemText primary="معرفی" />
                                </ListItem>
                            </List>
                            <List sx={{ display: "flex" }}>
                                <ListItem sx={{ textAlign: "center" }} disablePadding>
                                    <ListItemText primary="درباره ما" />
                                </ListItem>
                                <ListItem sx={{ textAlign: "center" }} disablePadding>
                                    <ListItemText primary="تماس با ما" />
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Divider sx={{ borderColor: "#252B3D" }} />
                </Grid>
                <Grid item xs={12}>
                    <Stack alignItems={"center"}>
                        <Typography variant="body1" mb={1} mt={2}>
                            اطلاعات تماس
                        </Typography>
                        <Box>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <LocationSvg height={22} width={22} />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography lineHeight={1.5} variant="body1">
                                                ساختمان مرکزی: تهران، خیابان ولیعصر، بالاتر از ظفر،
                                                خیابان بهرامی، پلاک ۹
                                            </Typography>
                                        </ListItemText>
                                        {/* <ListItemText primary="ساختمان مرکزی: تهران، خیابان ولیعصر، بالاتر از ظفر، خیابان بهرامی، پلاک ۹" /> */}
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <CallSvg height={22} width={22} />
                                        </ListItemIcon>
                                        <ListItemText primary="۰۲۱-۸۳۳۲۱۰۰۰" />
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <MessageSvg height={22} width={22} />
                                        </ListItemIcon>
                                        <ListItemText primary="info@hafezbroker.ir" />
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
            <Typography textAlign={"center"} my={4} variant="subtitle2">
                کلیه حقوق این سایت متعلق به شرکت چاوش همراه سرزمین ایرانیان می باشد
            </Typography>
        </Stack>
    );
};

export { Footer };
