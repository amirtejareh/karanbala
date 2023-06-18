import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

const PublicRoutes = React.lazy(() => import("./publicRoutes"));

const AppRoute = () => {
    return (
        // <LayoutProvider.Provider value={{ backButton, setBackButton }}>
        <Suspense fallback={() => <>hellio</>}>
            <BrowserRouter>
                <Routes>
                    <Route path={"/*"} element={<PublicRoutes />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
        // </LayoutProvider.Provider>
    );
};

export default AppRoute;
