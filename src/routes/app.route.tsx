import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const PublicRoutes = React.lazy(() => import("./publicRoutes"));

const AppRoute = () => {
    return (
        <Suspense fallback={() => <>hellio</>}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/*"} element={<PublicRoutes />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};

export default AppRoute;
