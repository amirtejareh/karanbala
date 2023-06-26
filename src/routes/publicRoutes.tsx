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

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path={"/karanbala"} element={<ApplicationInfoView />} />
            <Route path={"/karanbala/major-requirements"} element={<MajorRequirements />} />
            <Route path={"/karanbala/education-details"} element={<EducationDetails />} />
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
            <Route path={"/"} element={<Navigate to={"/karanbala"} />} />
        </Routes>
    );
};

export default PublicRoutes;
