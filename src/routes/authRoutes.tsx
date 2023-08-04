import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginView from "../views/Auth/Login";
import AuthMainLayout from "../views/Auth/components/AuthBaseLayout";

const PrivateRoutes = () => {
    return (
        <AuthMainLayout>
            <Routes>
                <Route path="/login" element={<LoginView />} />
            </Routes>
        </AuthMainLayout>
    );
};

export default PrivateRoutes;
