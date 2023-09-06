import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthorizedRoute from "../components/AuthorizedRoute";
import { useSelector } from "react-redux";
import { MainReducerInterface } from "../provider/reducer/main.reducer";
import FieldOfStudy from "../views/Dashboard/AdminDashboard/pages/content-management/FieldOfStudy";
import Dashboard from "../views/Dashboard/AdminDashboard/pages/content-management/Dashboard";
import Book from "../views/Dashboard/AdminDashboard/pages/content-management/Book";
import Chapter from "../views/Dashboard/AdminDashboard/pages/content-management/Chapter";
import Subject from "../views/Dashboard/AdminDashboard/pages/content-management/Subject";
import GradeLevel from "../views/Dashboard/AdminDashboard/pages/content-management/GradeLevel";
import Section from "../views/Dashboard/AdminDashboard/pages/content-management/Section";
import ObjectiveTest from "../views/Dashboard/AdminDashboard/pages/exam-management/ObjectiveTest";
import Question from "../views/Dashboard/AdminDashboard/pages/exam-management/Question";
import BookIntro from "../views/Dashboard/AdminDashboard/pages/educational-management/BookIntro";
import LearningMaterial from "../views/Dashboard/AdminDashboard/pages/educational-management/LearningMaterial";
import EssayQuestions from "../views/Dashboard/AdminDashboard/pages/educational-management/EssayQuestions";
import TipAndTest from "../views/Dashboard/AdminDashboard/pages/educational-management/TipAndTest";
import ObjectiveTestManagement from "../views/Dashboard/AdminDashboard/pages/exam-management/ObjectiveTestManagement";
import BookReference from "../views/Dashboard/AdminDashboard/pages/content-management/BookReference";
import Karanbala from "../views/Dashboard/AdminDashboard/pages/educational-management/Karanbala/index";

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
                path="/book-reference"
                element={
                    <AuthorizedRoute
                        userRole={user?.user}
                        route={{
                            requiredRoles: ["SuperAdmin"],
                            resource: "post",
                            action: "create",
                        }}
                    >
                        <BookReference />
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
                path="/section"
                element={
                    <AuthorizedRoute
                        userRole={user?.user}
                        route={{
                            requiredRoles: ["SuperAdmin"],
                            resource: "post",
                            action: "create",
                        }}
                    >
                        <Section />
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

            <Route
                path="/objective-test"
                element={
                    <AuthorizedRoute
                        userRole={user?.user}
                        route={{
                            requiredRoles: ["SuperAdmin"],
                            resource: "post",
                            action: "create",
                        }}
                    >
                        <ObjectiveTest />
                    </AuthorizedRoute>
                }
            />

            <Route
                path="/objective-test-management"
                element={
                    <AuthorizedRoute
                        userRole={user?.user}
                        route={{
                            requiredRoles: ["SuperAdmin"],
                            resource: "post",
                            action: "create",
                        }}
                    >
                        <ObjectiveTestManagement />
                    </AuthorizedRoute>
                }
            />

            <Route
                path="/question"
                element={
                    <AuthorizedRoute
                        userRole={user?.user}
                        route={{
                            requiredRoles: ["SuperAdmin"],
                            resource: "post",
                            action: "create",
                        }}
                    >
                        <Question />
                    </AuthorizedRoute>
                }
            />

            <Route
                path="/book-intro"
                element={
                    <AuthorizedRoute
                        userRole={user?.user}
                        route={{
                            requiredRoles: ["SuperAdmin"],
                            resource: "post",
                            action: "create",
                        }}
                    >
                        <BookIntro />
                    </AuthorizedRoute>
                }
            />

            <Route
                path="/learning-material"
                element={
                    <AuthorizedRoute
                        userRole={user?.user}
                        route={{
                            requiredRoles: ["SuperAdmin"],
                            resource: "post",
                            action: "create",
                        }}
                    >
                        <LearningMaterial />
                    </AuthorizedRoute>
                }
            />

            <Route
                path="/essay-questions"
                element={
                    <AuthorizedRoute
                        userRole={user?.user}
                        route={{
                            requiredRoles: ["SuperAdmin"],
                            resource: "post",
                            action: "create",
                        }}
                    >
                        <EssayQuestions />
                    </AuthorizedRoute>
                }
            />
            <Route
                path="/tip-test"
                element={
                    <AuthorizedRoute
                        userRole={user?.user}
                        route={{
                            requiredRoles: ["SuperAdmin"],
                            resource: "post",
                            action: "create",
                        }}
                    >
                        <TipAndTest />
                    </AuthorizedRoute>
                }
            />

            <Route
                path="/karanbala"
                element={
                    <AuthorizedRoute
                        userRole={user?.user}
                        route={{
                            requiredRoles: ["SuperAdmin"],
                            resource: "post",
                            action: "create",
                        }}
                    >
                        <Karanbala />
                    </AuthorizedRoute>
                }
            />
        </Routes>
    );
};

export default AdminDashboardRoute;
