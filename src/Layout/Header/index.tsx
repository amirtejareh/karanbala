import { Box, Grid, Typography, useTheme } from "@mui/material";

const Header = () => {
    return (
        <Box py={"20px"} style={{ height: "75px" }}>
            <Grid container spacing={0.5} wrap="nowrap" alignItems={"center"}>
                <Grid item>
                    <Typography>tests</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Header;
