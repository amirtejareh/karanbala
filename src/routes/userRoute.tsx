import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthorizedRoute from "../components/AuthorizedRoute";
import { useSelector } from "react-redux";
import { MainReducerInterface } from "../provider/reducer/main.reducer";
import Dashboard from "../views/Dashboard/UserDashboard/pages/Dashboard";
import Profile from "../views/Dashboard/UserDashboard/pages/Profile";

const UserDashboardRoute = () => {
  const user: any = useSelector((state: MainReducerInterface) => state.user);

  return (
    <Routes>
      <Route
        path="/profile"
        element={
          <AuthorizedRoute
            userRole={user?.user}
            route={{
              requiredRoles: ["User"],
              resource: "profile",
              action: "read",
            }}
          >
            <Profile />
          </AuthorizedRoute>
        }
      />
    </Routes>
  );
};

export default UserDashboardRoute;
