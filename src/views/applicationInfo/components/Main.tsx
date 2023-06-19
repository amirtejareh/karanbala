import { Box, Grid } from "@mui/material";

const Main = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box justifyContent={"center"} display={"flex"}>
                    Main
                </Box>
            </Grid>
        </Grid>
    );
};

export { Main };
