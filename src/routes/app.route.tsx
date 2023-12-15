import { Typography } from "@mui/material";
import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import CheckRoutes from "./checkRoutes";

const PublicRoutes = React.lazy(() => import("./publicRoutes"));
const PrivateRoutes = React.lazy(() => import("./privateRoutes"));
const AuthRoutes = React.lazy(() => import("./authRoutes"));
const Loading = () => {
    return <Typography>Loading...</Typography>;
};

const AppRoute = () => {
    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/auth/check"} element={<CheckRoutes />} />
                    <Route path={"/auth/*"} element={<AuthRoutes />} />
                    <Route path={"/*"} element={<PublicRoutes />} />
                    <Route path={"/dashboard/*"} element={<PrivateRoutes />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default AppRoute;
