import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AdminDashboard from "../views/Dashboard/AdminDashboard";
import UserDashboard from "../views/Dashboard/UserDashboard";
import { useSelector } from "react-redux";
import { MainReducerInterface } from "../provider/reducer/main.reducer";
import MainLayoutComponent from "../components/MainLayoutComponent";
import AuthorizedRoute from "../components/AuthorizedRoute";
import { userStore } from "../stores";

const PrivateRoutes = () => {
    const user: any = userStore((state) => state);
    return (
        <MainLayoutComponent>
            <Routes>
                <Route
                    path="/karanbala/dashboard/*"
                    element={
                        <AuthorizedRoute
                            userRole={user?.user}
                            route={{
                                requiredRoles: ["User"],
                                resource: "profile",
                                action: "read",
                            }}
                        >
                            <UserDashboard />
                        </AuthorizedRoute>
                    }
                />
                <Route
                    path="/karanbala/admin/*"
                    element={
                        <AuthorizedRoute
                            userRole={user?.user}
                            route={{
                                requiredRoles: ["SuperAdmin"],
                                resource: "post",
                                action: "create",
                            }}
                        >
                            <AdminDashboard />
                        </AuthorizedRoute>
                    }
                />
            </Routes>
        </MainLayoutComponent>
    );
};

export default PrivateRoutes;
