import { Box, Tab, Tabs, Theme } from "@mui/material";
import { createStyles, makeStyles, withStyles } from "@mui/styles";
import React from "react";

interface StyledTabsProps {
    value: number;
    onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
    children?: React.ReactElement | any[];
    secondary?: boolean;
    tertiary?: boolean;
    differentBtn?: boolean;
}

const StyledTabs = withStyles((theme: Theme) => ({
    indicator: {
        display: "flex",
        justifyContent: "flex-start",
        backgroundColor: "transparent",
        height: (props) => (props.tertiary ? "2px !important" : `calc(100% - 3px) !important`),
        bottom: "2px",
        zIndex: 1,
        borderRadius: `${theme.shape.borderRadius}px`,

        "& > span": {
            borderRadius: `${theme.shape.borderRadius}px !important`,
            width: "100%",
            background: (props) =>
                props.secondary
                    ? `${theme.palette.secondary.main} !important`
                    : `linear-gradient(90deg, #22A9C0 0.96%, #03BD90 100%) !important`,
            "&.tabPanel-0": {
                backgroundColor: (props) =>
                    props.differentBtn ? `${theme.palette.secondary.main} !important` : "inherit",
            },
            "&.tabPanel-1": {
                backgroundColor: (props) =>
                    props.differentBtn ? `${theme.palette.tertiary.main} !important` : "inherit",
            },
        },
    },
    flexContainer: {
        backgroundColor: (props) =>
            props.secondary
                ? theme.palette.grey[700]
                : props.tertiary
                ? "transparent"
                : theme.palette.grey[800],
        justifyContent: (props) => (props.tertiary ? "flex-start" : "flex-start"),
        width: (props) => (props.tertiary ? "auto" : "max-content"),
        // margin: "0 auto",
        borderRadius: theme.shape.borderRadius,
        "& + .MuiTabs-indicator": {
            transition: theme.transitions.create(["all"], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.standard,
            }),
        },
        "& + .MuiTabs-indicator > span": {
            backgroundColor: () => {
                return theme.palette.common.white;
            },
            boxShadow: "0 6px 16px 0 rgba(7, 20, 44, 0.14)",
        },
    },
}))((props: StyledTabsProps) => (
    <Tabs
        {...props}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        TabIndicatorProps={{ children: <span className={`tabPanel-${props.value}`} /> }}
    />
));

interface StyledTabProps {
    label: React.ReactNode;
    secondary?: boolean;
    tertiary?: boolean;
    // icon?: boolean;
}

const StyledTab = withStyles((theme: Theme) =>
    createStyles({
        root: {
            zIndex: 2,
            textTransform: "none",
            fontWeight: theme.typography.fontWeightRegular,
            fontSize: "1.2rem",
            // marginRight: theme.spacing(1),
            opacity: 1,
            paddingRight: "6px !important",
            paddingLeft: "6px !important",
            "&:first-of-type": {
                margin: 0,
                // marginRight: (props) => (props.tertiary ? "1.6rem" : "0"),
            },
            transition: theme.transitions.create(["color"], {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.standard,
            }),
            color: (props) => (props.tertiary ? "#868788" : theme.palette.common.white),
            "&.MuiButtonBase-root": {
                // minHeight: (props) => props.icon ? "4rem ":"3rem",
                // minWidth: (props) => props.icon && "4rem !important",
                minHeight: "3rem ",
                minWidth: "4rem ",
                paddingTop: 0,
                paddingBottom: 0,
            },
        },
        selected: {
            color: (props) => {
                if (props.secondary) {
                    return `${theme.palette.common.white} !important`;
                } else if (props.tertiary) {
                    return "#868788 !important";
                } else {
                    return `${theme.palette.grey.A200} !important`;
                }
            },
        },
    })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface ITabsKit {
    initialValue?: number;
    tabs: {
        title: React.ReactNode;
        children: React.ReactNode;
        key?: number;
        button?: React.ReactNode;
    }[];
    secondary?: boolean;
    tertiary?: boolean;
    paddingX?: string;
    differentBtn?: boolean;
    className?: string;
    hasButton?: boolean;
    bottomTab?: boolean;
    transparentBg?: boolean;
    icon?: boolean;
    style?: any;
}
interface IUseStyles {
    bottomTab?: boolean;
    transparentBg?: boolean;
    tertiary?: boolean;
}
const useStyles = makeStyles<Theme, IUseStyles>((theme: Theme) => ({
    root: {
        flexGrow: 1,
        height: "100%",
        "& .MuiTabs-root": {
            backgroundColor: (props) =>
                props.transparentBg ? "transparent" : theme.palette.grey[800],
        },
    },
    padding: {
        padding: theme.spacing(3),
    },
    topTabPanel: {
        borderBottom: `1px dashed ${theme.palette.grey[700]}`,
        padding: "10px 22px",
        marginBottom: "2px",
    },
}));

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
    px?: string;
    style?: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            style={{ height: "inherit" }}
            {...other}
        >
            {value === index && (
                <Box style={{ height: "inherit" }}>
                    <>{children}</>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
}

const TabsKit: React.FC<ITabsKit> = (props) => {
    const {
        hasButton,
        className,
        secondary,
        tertiary,
        tabs,
        differentBtn,
        initialValue,
        bottomTab,
        transparentBg,
        icon,
        style,
    } = props;
    const [value, setValue] = React.useState(initialValue || 0);
    const classes = useStyles({ bottomTab, transparentBg });

    React.useEffect(() => {
        if (initialValue !== undefined) {
            setValue(initialValue);
        }
    }, [initialValue]);

    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box className={classes.root}>
            {bottomTab && (
                <Box className={classes.topTabPanel}>
                    {tabs.map((item, index) => {
                        return (
                            <TabPanel key={index} value={value} index={item.key || index}>
                                {item.children}
                            </TabPanel>
                        );
                    })}
                </Box>
            )}
            {hasButton ? (
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                    <StyledTabs
                        className={className}
                        value={value}
                        onChange={handleChange}
                        differentBtn={differentBtn}
                        secondary={secondary}
                        tertiary={tertiary}
                        aria-label="custom tab"
                    >
                        {tabs.map((item, index) => {
                            return (
                                <StyledTab
                                    secondary={secondary}
                                    tertiary={tertiary}
                                    key={index}
                                    label={item.title}
                                    {...a11yProps(item.key || index)}
                                />
                            );
                        })}
                    </StyledTabs>
                    {tabs.map((item, index) => {
                        return (
                            <TabPanel
                                key={index}
                                value={value}
                                index={item.key || index}
                                style={style}
                            >
                                {hasButton && (
                                    <Box
                                        mx={3}
                                        sx={{
                                            "& button": {
                                                mx: 0.5,
                                                minWidth: " 26px",
                                                height: " 26px",
                                                borderRadius: "8px",
                                                width: "26px",
                                                "& span:first-of-type": {
                                                    m: 0,
                                                },
                                            },
                                        }}
                                    >
                                        {item.button}
                                    </Box>
                                )}
                            </TabPanel>
                        );
                    })}
                </Box>
            ) : (
                <StyledTabs
                    className={className}
                    value={value}
                    onChange={handleChange}
                    differentBtn={differentBtn}
                    secondary={secondary}
                    tertiary={tertiary}
                    aria-label="custom tab"
                >
                    {tabs.map((item, index) => {
                        return (
                            <StyledTab
                                secondary={secondary}
                                tertiary={tertiary}
                                key={index}
                                label={item.title}
                                {...a11yProps(item.key || index)}
                            />
                        );
                    })}
                </StyledTabs>
            )}

            {!bottomTab &&
                tabs.map((item, index) => {
                    return (
                        <TabPanel key={index} value={value} index={item.key || index}>
                            {item.children}
                        </TabPanel>
                    );
                })}
        </Box>
    );
};

export default TabsKit;
