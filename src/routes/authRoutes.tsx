import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthMainLayout from "../views/Auth/components/AuthBaseLayout";
import LoginView from "../views/Auth/Login";
import SignUpView from "../views/Auth/SignUp";

const PrivateRoutes = () => {
    return (
        <AuthMainLayout>
            <Routes>
                <Route path="/login" element={<LoginView />} />
                <Route path="/signup" element={<SignUpView />} />
            </Routes>
        </AuthMainLayout>
    );
};

export default PrivateRoutes;
