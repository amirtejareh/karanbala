import React from "react";
import clsx from "clsx";
import { Box, BoxProps, Theme } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";

interface ICardProps extends BoxProps {
    className?: string;
    disableGutters?: boolean;
    borderRadius?: string;
    
    hasBg?: boolean;
}

const useStyles = makeStyles<Theme, ICardProps>((theme: Theme) => ({
    card: {
        borderRadius: (props) =>
            props.borderRadius ? props.borderRadius : theme.shape.borderRadius,
        background: (props) => ( props.hasBg ?theme.palette.grey[800] : 'transparent'),

        backdropFilter: "blur(40px)",

        position: "relative",
    },
}));

const Card: React.FC<ICardProps> = (props) => {
    const { children, className, disableGutters, borderRadius,hasBg, ...rest } = props;
    const classes = useStyles({ borderRadius,hasBg });
    return (
        <Box
            className={clsx(classes.card, className)}
            px={disableGutters ? 0 : 2.75}
            py={1.25}
            {...rest}
        >
            <>{children}</>
        </Box>
    );
};

export default Card;
