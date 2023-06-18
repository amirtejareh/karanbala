import {
    Box,
    Grid,
   
} from "@mui/material";
import { Link } from "react-router-dom";

import { ButtonKit } from "../../../components/kit/Button";
// import Menu from "./landingMenu";

const Header = () => {
    return (
        <Grid
            pt={5}
            
            container
            alignItems={"center"}
            flexWrap="nowrap"
            justifyContent={"space-between"}
        >
            <Grid item  container alignItems={"center"} flexWrap="nowrap" spacing={{ lg: 2, xl: 9 }}>
                <Grid item>
                    <Link to="/pv/dashboard">
                        <img
                            src="/images/hafez-logo.svg"
                            alt="logo"
                            height={75}
                            style={{ marginLeft: "5px" }}
                        />
                        <img src="/images/dorin-logo.svg" alt="logo" height={75} />
                    </Link>
                </Grid>
                <Grid item>
                    menu
                    {/* <Menu /> */}
                </Grid>
            </Grid>
            <Grid xs={2} item>
                <Box width={'100%'}>
                    <ButtonKit fullWidth variant="contained">
                        افتتاح حساب
                    </ButtonKit>
                </Box>
               
            </Grid>
        </Grid>
    );
};

export { Header };
