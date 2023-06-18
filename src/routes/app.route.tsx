import { Typography } from "@mui/material";
import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const PublicRoutes = React.lazy(() => import("./publicRoutes"));


const Loading = () => {
    return <Typography>Loading...</Typography>
}

const AppRoute = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/*"} element={<PublicRoutes />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default AppRoute;
