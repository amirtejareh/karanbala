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
import Shop from "../views/Shop";
import BookDescription from "../views/EducationDetails/pages/IntroductionBook/page/BookDescription";
import BookInEntranceExam from "../views/EducationDetails/pages/IntroductionBook/page/BookInEntranceExam";
import BookInFinalExam from "../views/EducationDetails/pages/IntroductionBook/page/BookInFinalExam";
import BookReview from "../views/EducationDetails/pages/IntroductionBook/page/BookReview";
import StartSrandardExam from "../views/EducationDetails/pages/Quiz/page/Standard/Start";
import StartSubjectiveExam from "../views/EducationDetails/pages/Quiz/page/Subjective/Start";

const PublicRoutes = () => {
  const user: any = userStore((state) => state);
  return (
    <PublicLayoutComponent>
      <Routes>
        <Route path={"/"} element={<ApplicationInfoView />} />
        <Route path={"/major-requirements"} element={<MajorRequirements />} />
        <Route path={"/shop"} element={<Shop />} />

        <Route path={"/education-details/*"} element={<EducationDetails />} />
        <Route
          path="/objective-test"
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
          path="/objective-test/report/:examId"
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
        <Route path="/objective-test/report2" element={<Report2 />} />
        <Route path={"/subjective-test"} element={<SubjectiveTest />} />
        <Route path={"/education-details/introduction-book"} element={<IntroductionBook />} />

        <Route
          path={"/education-details/introduction-book/book-description"}
          element={<BookDescription />}
        />

        <Route
          path={"/education-details/introduction-book/book-in-entrance-exam"}
          element={<BookInEntranceExam />}
        />

        <Route
          path={"/education-details/introduction-book/book-in-final-exam"}
          element={<BookInFinalExam />}
        />
        <Route path={"/education-details/introduction-book/book-review"} element={<BookReview />} />
        <Route path={"/education-details/lessons"} element={<Lessons />} />
        <Route path={"/education-details/questions"} element={<Questions />} />
        <Route path={"/education-details/exam"} element={<Exam />} />
        <Route path={"/education-details/point-and-test"} element={<PointAndTest />} />
        <Route path={"/education-details/example"} element={<Example />} />
        <Route path={"/education-details/attach"} element={<Attach />} />
        <Route path={"/education-details/practice"} element={<Practice />} />
        <Route path={"/education-details/quiz"} element={<Quiz />} />
        <Route path={"/education-details/quiz/standard/:id"} element={<StartSrandardExam />} />
        <Route path={"/education-details/quiz/subjective/:id"} element={<StartSubjectiveExam />} />
        <Route path={"/education-details/karanbala"} element={<Karanbala />} />
      </Routes>
    </PublicLayoutComponent>
  );
};

export default PublicRoutes;
