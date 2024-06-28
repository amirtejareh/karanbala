import { Route, Routes } from "react-router-dom";
import EducationLayoutComponent from "../components/EducationLayoutComponent";
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
import BookDescription from "../views/EducationDetails/pages/IntroductionBook/page/BookDescription";
import BookInEntranceExam from "../views/EducationDetails/pages/IntroductionBook/page/BookInEntranceExam";
import BookInFinalExam from "../views/EducationDetails/pages/IntroductionBook/page/BookInFinalExam";
import BookReview from "../views/EducationDetails/pages/IntroductionBook/page/BookReview";
import StartSrandardExam from "../views/EducationDetails/pages/Quiz/page/Standard/Start";
import StartSubjectiveExam from "../views/EducationDetails/pages/Quiz/page/Subjective/Start";
import EducationDetails from "../views/EducationDetails";
import { useEffect } from "react";
import EducationDetailStore from "../stores/educationDetailStore";
import StandardReport from "../views/EducationDetails/pages/Quiz/page/Standard/Report";
import SubjectiveReport from "../views/EducationDetails/pages/Quiz/page/Subjective/Report";
import AuthorizedRoute from "../components/AuthorizedRoute";
import { userStore } from "../stores";

const EducationDetailsRoutes = () => {
  const { setBook, book } = EducationDetailStore((state) => state);
  const user: any = userStore((state) => state);

  useEffect(() => {
    return () => {
      setBook(null);
    };
  }, []);

  console.log("ComprehensiveTest" + book);

  return (
    <EducationLayoutComponent>
      <Routes>
        <Route path={"/*"} element={<EducationDetails />} />
        <Route path={"/introduction-book"} element={<IntroductionBook />} />
        <Route path={"/introduction-book/book-description"} element={<BookDescription />} />
        <Route path={"/introduction-book/book-in-entrance-exam"} element={<BookInEntranceExam />} />
        <Route path={"/introduction-book/book-in-final-exam"} element={<BookInFinalExam />} />
        <Route path={"/introduction-book/book-review"} element={<BookReview />} />
        <Route path={"/lessons"} element={<Lessons />} />
        <Route path={"/questions"} element={<Questions />} />
        <Route
          path="/exam"
          element={
            <AuthorizedRoute
              userRole={user?.user}
              route={{
                requiredRoles: ["ComprehensiveTest" + book],
                resource: "ComprehensiveTest" + book,
                action: "read",
              }}
            >
              <Exam />
            </AuthorizedRoute>
          }
        />

        <Route
          path="/quiz"
          element={
            <AuthorizedRoute
              userRole={user?.user}
              route={{
                requiredRoles: ["Quiz" + book],
                resource: "Quiz" + book,
                action: "read",
              }}
            >
              <Quiz />
            </AuthorizedRoute>
          }
        />

        <Route
          path="/quiz/standard/:id"
          element={
            <AuthorizedRoute
              userRole={user?.user}
              route={{
                requiredRoles: ["Quiz" + book],
                resource: "Quiz" + book,
                action: "read",
              }}
            >
              <StartSrandardExam />
            </AuthorizedRoute>
          }
        />

        <Route
          path="/quiz/standard/:id/report"
          element={
            <AuthorizedRoute
              userRole={user?.user}
              route={{
                requiredRoles: ["Quiz" + book],
                resource: "Quiz" + book,
                action: "read",
              }}
            >
              <StandardReport />
            </AuthorizedRoute>
          }
        />

        <Route path={"/point-and-test"} element={<PointAndTest />} />
        <Route path={"/example"} element={<Example />} />
        <Route path={"/attach"} element={<Attach />} />
        <Route path={"/practice"} element={<Practice />} />

        <Route path={"/quiz/subjective/:id"} element={<StartSubjectiveExam />} />
        <Route path={"/quiz/subjective/:id/report"} element={<SubjectiveReport />} />

        <Route path={"/karanbala"} element={<Karanbala />} />
      </Routes>
    </EducationLayoutComponent>
  );
};
export default EducationDetailsRoutes;
