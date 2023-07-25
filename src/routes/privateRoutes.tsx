import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import AdminDashboard from "../views/Dashboard/AdminDashboard";
import UserDashboard from "../views/Dashboard/UserDashboard";
import { useSelector } from "react-redux";
import { MainReducerInterface } from "../provider/reducer/main.reducer";
import { useJwt } from "react-jwt";

interface AuthRouteProps {
    userRole: any;
    route: { requiredPermissions: Array<string> };
    children: React.ReactNode;
}

const AuthorizedRoute = ({ children, userRole, route, ...rest }: AuthRouteProps) => {
    const requiredPermissions = route.requiredPermissions;
    if (userRole) {
        const userRoles = userRole?.roles;
        if (!requiredPermissions.map((permission) => userRoles.includes(permission))) {
            return <Navigate to={"/"} />;
        }
        return <>{children}</>;
    } else {
        return <>{children}</>;
    }
};

const PrivateRoutes = () => {
    const auth = useSelector((state: MainReducerInterface) => state.auth);
    const navigate = useNavigate();
    const token = auth.token ?? localStorage.getItem("token");
    const data = useJwt(token ?? "");

    useEffect(() => {
        if (token == undefined) {
            navigate("/");
        }
    }, [navigate, token]);

    return (
        <Routes>
            <Route
                path="/karanbala/dashboard"
                element={
                    <AuthorizedRoute
                        userRole={data.decodedToken}
                        route={{ requiredPermissions: ["User"] }}
                    >
                        <UserDashboard />
                    </AuthorizedRoute>
                }
            />
            <Route
                path="/karanbala/admin"
                element={
                    <AuthorizedRoute
                        userRole={data.decodedToken}
                        route={{ requiredPermissions: ["SuperAdmin"] }}
                    >
                        <AdminDashboard />
                    </AuthorizedRoute>
                }
            />
        </Routes>
    );
};

export default PrivateRoutes;
