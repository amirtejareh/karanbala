import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ApplicationInfoView from "../views/ApplicationInfo";
import MajorRequirements from "../views/MajorRequirements";
import EducationDetails from "../views/EducationDetails";
import ObjectiveTest from "../views/Tests/ObjectiveTest";
import SubjectiveTest from "../views/Tests/SubjectiveTest";
import Report from "../views/Tests/ObjectiveTest/Report";
import Report2 from "../views/Tests/ObjectiveTest/Report/Report2";
import AuthorizedRoute from "../components/AuthorizedRoute";
import { userStore } from "../stores";
import PublicLayoutComponent from "../components/PublicLayoutComponent";
import Shop from "../views/Shop";
import EducationDetailsRoutes from "./educationDetailsRoutes";

const PublicRoutes = () => {
  const user: any = userStore((state) => state);
  return (
    <PublicLayoutComponent>
      <Routes>
        <Route path={"/"} element={<ApplicationInfoView />} />
        <Route path={"/major-requirements"} element={<MajorRequirements />} />
        <Route path={"/shop"} element={<Shop />} />
        <Route path={"/education-details/*"} element={<EducationDetailsRoutes />} />
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
      </Routes>
    </PublicLayoutComponent>
  );
};

export default PublicRoutes;
