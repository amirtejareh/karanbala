import React from "react";
import { Routes, Route } from "react-router-dom";

import ApplicationInfoView from "../views/applicationInfo";

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path={"/karanbala"} element={<ApplicationInfoView />} />
        </Routes>
    );
};

export default PublicRoutes;
