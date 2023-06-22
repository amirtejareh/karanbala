import React from "react";
import MuiProvider from "./themProvider/MUI";
import AppRoute from "./routes/app.route";
import "./index.css";

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

const App = () => {
    const themeMode = localStorage.getItem("paletteMode") as "light" | "dark";
    const [mode, setMode] = React.useState<"light" | "dark">(!!themeMode ? themeMode : "dark");

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode: string) => {
                    const mode = prevMode === "light" ? "dark" : "light";
                    localStorage.setItem("paletteMode", mode);
                    return mode;
                });
            },
        }),
        []
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <MuiProvider direction={"rtl"} mode={mode}>
                <AppRoute />
            </MuiProvider>
        </ColorModeContext.Provider>
    );
};

export default App;
//

//
