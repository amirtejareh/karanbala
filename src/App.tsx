import React from "react";
import MuiProvider from "./themProvider/MUI";
import AppRoute from "./routes/app.route";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
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
    const queryClient = new QueryClient();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <MuiProvider direction={"rtl"} mode={mode}>
                <QueryClientProvider client={queryClient}>
                    <AppRoute />
                    <ToastContainer rtl />
                </QueryClientProvider>
            </MuiProvider>
        </ColorModeContext.Provider>
    );
};

export default App;
//

//
