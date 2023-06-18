import React from "react";
import { Container, ContainerProps, Theme } from "@mui/material";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

interface IContainerProps extends ContainerProps {
    className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    layoutPadding: {
        position: "relative",
        padding: "0rem 3rem",
        // maxWidth: 1920,
        [theme.breakpoints.down("xl")]: {
            padding: "0rem 2rem",
        },
    },
}));

const CustomContainer: React.FC<IContainerProps> = (props) => {
    // const classes = useStyles();
    const { children, className, disableGutters, ...rest } = props;
    return (
        <Container
            sx={{ padding: "0rem 3rem", maxWidth: "1920px" }}
            maxWidth={false}
            className={clsx(className)}
            {...rest}
        >
            <>{children}</>
        </Container>
    );
};

export default CustomContainer;
