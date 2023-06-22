import React from "react";
import Helmet from "react-helmet";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
import defaultTheme from "../theme/default";
import withLowDensity from "../theme/lowDensity";
import { deepmerge } from "@mui/utils";
import { useMediaQuery } from "@mui/material";
import { enUS } from "@mui/material/locale";
import RTL from "./RTL";

const inputGlobalStyles = <CssBaseline enableColorScheme />;

const Noop: any = ({ children }: any) => <>{children}</>;

const MuiProvider: any = (props: any) => {
    const { mode, theme, lowDensity, localization, direction } = props;

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    React.useEffect(() => {
        document.dir = direction || "ltr";
    }, [direction]);

    const themeValue = React.useMemo(() => {
        let applyTheme = defaultTheme;

        if (theme) {
            applyTheme = deepmerge(applyTheme, theme);
        }

        if (lowDensity) {
            applyTheme = deepmerge(applyTheme, withLowDensity);
        }

        if (applyTheme?.palette) {
            applyTheme.palette.mode = "dark";
        }
        if (direction) {
            applyTheme = { ...applyTheme, direction };
        }
        let createdTheme = createTheme(applyTheme, localization || enUS);
        // @ts-ignore
        let createdResponsiveTheme = responsiveFontSizes(createdTheme, { variants: [] });

        return createdResponsiveTheme;
    }, [mode, theme, prefersDarkMode, lowDensity, localization, direction]);

    const ChangeDirection = direction === "rtl" ? RTL : Noop;

    return (
        <>
            <Helmet>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Helmet>
            <ChangeDirection>
                <ThemeProvider theme={themeValue}>
                    {inputGlobalStyles}
                    {props.children}
                </ThemeProvider>
            </ChangeDirection>
        </>
    );
};

export default MuiProvider;
