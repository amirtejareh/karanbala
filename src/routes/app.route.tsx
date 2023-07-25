import { Typography } from "@mui/material";
import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import CheckRoutes from "./checkRoutes";

const PublicRoutes = React.lazy(() => import("./publicRoutes"));
const PrivateRoutes = React.lazy(() => import("./privateRoutes"));
const Loading = () => {
    return <Typography>Loading...</Typography>;
};

const AppRoute = () => {
    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/auth/check"} element={<CheckRoutes />} />
                    <Route path={"/pub/*"} element={<PublicRoutes />} />
                    <Route path={"/pv/*"} element={<PrivateRoutes />} />
                    <Route path="/karanbala" element={<Navigate to="/pub/karanbala" />} />
                    <Route path="/" element={<Navigate to="/karanbala" />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default AppRoute;
