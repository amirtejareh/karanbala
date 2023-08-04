import React from "react";
import { Box, Grid } from "@mui/material";
import { AuthBackground } from "../../../assets";

interface AuthLayoutComponentProps {
    children: React.ReactNode;
}

const AuthMainLayout = ({ children }: AuthLayoutComponentProps) => {
    return (
        <Grid
            container
            spacing={0}
            sx={{
                width: "100%",
                height: "100vh",
            }}
        >
            <Grid
                item
                xs={6}
                md={3}
                sx={{
                    width: "100%",
                }}
            >
                <Box>{children}</Box>
            </Grid>
            <Grid
                item
                xs={6}
                md={9}
                sx={{
                    width: "100%",
                    height: "100vh",
                }}
            >
                <Box display={"flex"}>
                    <img
                        src={AuthBackground}
                        alt="logo"
                        style={{
                            width: "100%",
                            height: "100vh",
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
};

export default AuthMainLayout;
