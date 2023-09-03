import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ApplicationInfoView from "../views/ApplicationInfo";
import MajorRequirements from "../views/MajorRequirements";
import EducationDetails from "../views/EducationDetails";
import IntroductionBook from "../views/EducationDetails/pages/IntroductionBook";
import Lessons from "../views/EducationDetails/pages/Lessons";
import Questions from "../views/EducationDetails/pages/Questions";
import Quiz from "../views/EducationDetails/pages/Quiz";
import PointAndTest from "../views/EducationDetails/pages/PointAndTest";
import Example from "../views/EducationDetails/pages/Example";
import Attach from "../views/EducationDetails/pages/Attach";
import Practice from "../views/EducationDetails/pages/Practice";
import Exam from "../views/EducationDetails/pages/Exam";
import Karanbala from "../views/EducationDetails/pages/Karanbala";
import ObjectiveTest from "../views/Tests/ObjectiveTest";
import SubjectiveTest from "../views/Tests/SubjectiveTest";
import Report from "../views/Tests/ObjectiveTest/Report";
import Report2 from "../views/Tests/ObjectiveTest/Report/Report2";
import AuthorizedRoute from "../components/AuthorizedRoute";
import { userStore } from "../stores";
import PublicLayoutComponent from "../components/PublicLayoutComponent";

const PublicRoutes = () => {
    const user: any = userStore((state) => state);

    return (
        <PublicLayoutComponent>
            <Routes>
                <Route path={"/karanbala"} element={<ApplicationInfoView />} />
                <Route path={"/karanbala/major-requirements"} element={<MajorRequirements />} />
                <Route path={"/karanbala/education-details"} element={<EducationDetails />} />
                <Route
                    path="/karanbala/objective-test"
                    element={
                        <AuthorizedRoute
                            userRole={user?.user}
                            route={{
                                requiredRoles: ["SuperAdmin", "User"],
                                resource: "post",
                                action: "create",
                            }}
                        >
                            <ObjectiveTest />
                        </AuthorizedRoute>
                    }
                />

                <Route
                    path="/karanbala/objective-test/report/:examId"
                    element={
                        <AuthorizedRoute
                            userRole={user?.user}
                            route={{
                                requiredRoles: ["SuperAdmin", "User"],
                                resource: "post",
                                action: "create",
                            }}
                        >
                            <Report />
                        </AuthorizedRoute>
                    }
                />
                <Route path="/karanbala/objective-test/report2" element={<Report2 />} />
                <Route path={"/karanbala/subjective-test"} element={<SubjectiveTest />} />
                <Route
                    path={"/karanbala/education-details/introduction-book"}
                    element={<IntroductionBook />}
                />
                <Route path={"/karanbala/education-details/lessons"} element={<Lessons />} />
                <Route path={"/karanbala/education-details/questions"} element={<Questions />} />
                <Route path={"/karanbala/education-details/exam"} element={<Exam />} />
                <Route
                    path={"/karanbala/education-details/point-and-test"}
                    element={<PointAndTest />}
                />
                <Route path={"/karanbala/education-details/example"} element={<Example />} />
                <Route path={"/karanbala/education-details/attach"} element={<Attach />} />
                <Route path={"/karanbala/education-details/practice"} element={<Practice />} />
                <Route path={"/karanbala/education-details/quiz"} element={<Quiz />} />
                <Route path={"/karanbala/education-details/karanbala"} element={<Karanbala />} />
            </Routes>
        </PublicLayoutComponent>
    );
};

export default PublicRoutes;
