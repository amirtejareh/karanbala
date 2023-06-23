import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ApplicationInfoView from "../views/ApplicationInfo";
import MajorRequirements from "../views/MajorRequirements";
import EducationDetails from "../views/EducationDetails";

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path={"/karanbala"} element={<ApplicationInfoView />} />
            <Route path={"/karanbala/major-requirements"} element={<MajorRequirements />} />
            <Route path={"/karanbala/education-details"} element={<EducationDetails />} />
            <Route path={"/"} element={<Navigate to={"/karanbala"} />} />
        </Routes>
    );
};

export default PublicRoutes;
