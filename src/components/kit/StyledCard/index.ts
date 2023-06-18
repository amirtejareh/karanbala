import { styled } from "@mui/styles";
import { Box, Theme } from "@mui/material";

export const StyledCard = styled(Box)(({ theme: Theme }) => ({
    background:
        "linear-gradient(90.9deg, rgba(37, 43, 61, 0.7) 0.23%, rgba(37, 43, 61, 0.1) 113.97%)",
    backdropFilter: "blur(40px)",
    borderRadius: "8px",
    padding: "10px 22px",
    position: "relative",
}));
