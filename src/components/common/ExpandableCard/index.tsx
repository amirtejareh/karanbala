import React from "react";
import clsx from "clsx";
import { Box, BoxProps, Collapse, Divider, Theme } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import { ArrowDownSvg, ThinArrowDownSvg, ThinArrowUpSvg } from "../../../assets";

interface IExpandableCardProps extends BoxProps {
    className?: string;
    disableGutters?: boolean;
    borderRadius?: string;
    action?: React.ReactElement;
    header?: React.ReactNode;
    expandable?: boolean;
    open?: boolean;
    children?: React.ReactElement;
    moreItem?: React.ReactElement;
    minHeight?: string;
}

interface IUseStyles {
    expandable?: boolean;
    header?: boolean;
    borderRadius?: string;
}

const useStyles = makeStyles<Theme, IUseStyles>((theme: Theme) => ({
    card: {
        borderRadius: (props) =>
            props.borderRadius ? props.borderRadius : theme.shape.borderRadius,
        background:
            "linear-gradient(90.9deg, rgba(37, 43, 61, 0.7) 0.23%, rgba(37, 43, 61, 0.1) 113.97%)",
        backdropFilter: "blur(40px)",
    },
    labels: {
        fontWeight: 600,
        userSelect: "none",
        "& p": {
            fontWeight: 600,
            userSelect: "none",
        },
    },
    delete: {
        cursor: "pointer",
    },
    headerContent: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        cursor: (props) => (props.expandable ? "pointer" : "auto"),
        "& > svg": {
            color: theme.palette.grey.A700,
        },
    },
}));

const ExpandableCard: React.FC<IExpandableCardProps> = (props) => {
    const [expanded, setExpanded] = React.useState(false);

    const {
        children,
        className,
        disableGutters,
        borderRadius,
        action,
        header,
        expandable,
        open: openProp,
        moreItem,
        minHeight,
        ...rest
    } = props;
    const classes = useStyles({ borderRadius, expandable, header: !!header });
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const content = children && (
        <>
            <Box>{children}</Box>
        </>
    );
    const headerProps = header
        ? {
              onClick: () => setExpanded(!expanded),
              className: classes.headerContent,
          }
        : {};
    return (
        <Box className={clsx(classes.card, className)} p={1.25} overflow={"hidden"} {...rest}>
            <Box minHeight={"3.6rem"} component={header ? "div" : React.Fragment} {...headerProps}>
                {header &&
                    React.cloneElement(
                        <>
                            {header}
                            {expanded && moreItem}
                        </>,
                        { className: clsx(classes.labels) }
                    )}
                {expandable ? (
                    <>{expanded ? <ThinArrowUpSvg /> : <ThinArrowDownSvg />}</>
                ) : (
                    action &&
                    React.cloneElement(action, { className: clsx(classes.labels, classes.delete) })
                )}
            </Box>
            {expandable ? (
                <Collapse unmountOnExit in={expanded}>
                    <>{content}</>
                </Collapse>
            ) : (
                content
            )}
        </Box>
    );
};

export default ExpandableCard;
