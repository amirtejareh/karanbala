import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import AdminDashboard from "../views/Dashboard/AdminDashboard";
import UserDashboard from "../views/Dashboard/UserDashboard";
import { useSelector } from "react-redux";
import { MainReducerInterface } from "../provider/reducer/main.reducer";
import MainLayoutComponent from "../components/MainLayoutComponent";
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
    const user: any = useSelector((state: MainReducerInterface) => state.user);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        if (token == undefined) {
            navigate("/");
        }
    }, [navigate, token]);

    return (
        <MainLayoutComponent>
            <Routes>
                <Route
                    path="/karanbala/dashboard"
                    element={
                        <AuthorizedRoute
                            userRole={user?.user}
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
                            userRole={user?.user}
                            route={{ requiredPermissions: ["SuperAdmin"] }}
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
