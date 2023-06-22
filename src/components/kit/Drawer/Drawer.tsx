import React from "react";
import { Box, IconButton, styled, SwipeableDrawer, useTheme } from "@mui/material";
import { Global } from "@emotion/react";
import { CloseSvg } from "../../../assets";

interface IDrawerKitProps {
    opener?: React.ReactNode;
    title?: React.ReactNode;
    onClose?: () => void;
    className?: string;
    drawerState?: boolean;
    handleClose?: () => void;
    window?: () => Window;
}

const drawerBleeding = 140;

const Root = styled("div")(({ theme }) => ({
    // height: "100%",
}));

const StyledBox = styled(Box)(({ theme }) => ({}));

const DrawerKit: React.FC<IDrawerKitProps> = (props: any) => {
    const {
        className,
        onClose,
        title,
        opener,
        children,
        drawerState = false,
        handleClose,
        window,
        ...rest
    } = props;
    const [openDrawer, setOpenDrawer] = React.useState(drawerState);

    React.useEffect(() => {
        setOpenDrawer(drawerState);
    }, [drawerState]);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpenDrawer(newOpen);
        !!handleClose && handleClose();
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Root>
            {opener &&
                React.cloneElement(opener as React.ReactElement, { onClick: toggleDrawer(true) })}

            <Global
                styles={{
                    ".MuiDrawer-root > .MuiPaper-root": {
                        height: `calc(100% - ${drawerBleeding}px)`,
                        overflow: "visible",
                        borderRadius: "32px 32px 0px 0px",
                    },
                }}
            />

            <SwipeableDrawer
                container={container}
                anchor="bottom"
                className={className}
                open={openDrawer}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                // swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
                {...rest}
            >
                <StyledBox
                    sx={{
                        px: 3,
                        pt: 2,
                        height: "100%",
                        overflow: "auto",
                    }}
                >
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <IconButton
                            onClick={toggleDrawer(!openDrawer)}
                            sx={{
                                "& svg path": {
                                    fill: "#fff",
                                },
                            }}
                        >
                            <CloseSvg />
                        </IconButton>
                    </Box>
                    {children &&
                        React.cloneElement(props.children as React.ReactElement, {
                            onClose: toggleDrawer,
                        })}
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    );
};

DrawerKit.displayName = "DrawerKit";

export default DrawerKit;
