import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthorizedRoute from "../components/AuthorizedRoute";
import { useSelector } from "react-redux";
import { MainReducerInterface } from "../provider/reducer/main.reducer";
import FieldOfStudy from "../views/Dashboard/AdminDashboard/pages/FieldOfStudy";
import Dashboard from "../views/Dashboard/AdminDashboard/pages/Dashboard";
import Book from "../views/Dashboard/AdminDashboard/pages/Book";
import Chapter from "../views/Dashboard/AdminDashboard/pages/Chapter";
import Subject from "../views/Dashboard/AdminDashboard/pages/Subject";
import GradeLevel from "../views/Dashboard/AdminDashboard/pages/GradeLevel";
import TermOfStudy from "../views/Dashboard/AdminDashboard/pages/TermOfStudy";

const AdminDashboardRoute = () => {
    const user: any = useSelector((state: MainReducerInterface) => state.user);

    return (
        <Routes>
            <Route
                path="/field-of-study"
                element={
                    <AuthorizedRoute
                        userRole={user?.user}
                        route={{
                            requiredRoles: ["SuperAdmin"],
                            resource: "post",
                            action: "create",
                        }}
                    >
                        <FieldOfStudy />
                    </AuthorizedRoute>
                }
            />
            <Route
                path="/grade-level"
                element={
                    <AuthorizedRoute
                        userRole={user?.user}
                        route={{
                            requiredRoles: ["SuperAdmin"],
                            resource: "post",
                            action: "create",
                        }}
                    >
                        <GradeLevel />
                    </AuthorizedRoute>
                }
            />
            <Route
                path="/book"
                element={
                    <AuthorizedRoute
                        userRole={user?.user}
                        route={{
                            requiredRoles: ["SuperAdmin"],
                            resource: "post",
                            action: "create",
                        }}
                    >
                        <Book />
                    </AuthorizedRoute>
                }
            />

            <Route
                path="/term-of-study"
                element={
                    <AuthorizedRoute
                        userRole={user?.user}
                        route={{
                            requiredRoles: ["SuperAdmin"],
                            resource: "post",
                            action: "create",
                        }}
                    >
                        <TermOfStudy />
                    </AuthorizedRoute>
                }
            />
            <Route
                path="/chapter"
                element={
                    <AuthorizedRoute
                        userRole={user?.user}
                        route={{
                            requiredRoles: ["SuperAdmin"],
                            resource: "post",
                            action: "create",
                        }}
                    >
                        <Chapter />
                    </AuthorizedRoute>
                }
            />

            <Route
                path="/subject"
                element={
                    <AuthorizedRoute
                        userRole={user?.user}
                        route={{
                            requiredRoles: ["SuperAdmin"],
                            resource: "post",
                            action: "create",
                        }}
                    >
                        <Subject />
                    </AuthorizedRoute>
                }
            />
            <Route
                path="/"
                element={
                    <AuthorizedRoute
                        userRole={user?.user}
                        route={{
                            requiredRoles: ["SuperAdmin"],
                            resource: "post",
                            action: "create",
                        }}
                    >
                        <Dashboard />
                    </AuthorizedRoute>
                }
            />
        </Routes>
    );
};

export default AdminDashboardRoute;
