import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthorizedRoute from "../components/AuthorizedRoute";
import { useSelector } from "react-redux";
import { MainReducerInterface } from "../provider/reducer/main.reducer";
import Dashboard from "../views/Dashboard/UserDashboard/pages/Dashboard";
import Purchase from "../views/Dashboard/UserDashboard/pages/Purchase";
import ShoppingList from "../views/Dashboard/UserDashboard/pages/ShoppingList";
import Transaction from "../views/Dashboard/UserDashboard/pages/Transaction";
import Profile from "../views/Dashboard/UserDashboard/pages/Profile";

const UserDashboardRoute = () => {
  const user: any = useSelector((state: MainReducerInterface) => state.user);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthorizedRoute
            userRole={user?.user}
            route={{
              requiredRoles: ["User"],
              resource: "profile",
              action: "read",
            }}
          >
            <Dashboard />
          </AuthorizedRoute>
        }
      />

      <Route
        path="/purchase"
        element={
          <AuthorizedRoute
            userRole={user?.user}
            route={{
              requiredRoles: ["User"],
              resource: "profile",
              action: "read",
            }}
          >
            <Purchase />
          </AuthorizedRoute>
        }
      />

      <Route
        path="/purchase/callbackurl"
        element={
          <AuthorizedRoute
            userRole={user?.user}
            route={{
              requiredRoles: ["User"],
              resource: "profile",
              action: "read",
            }}
          >
            <Purchase />
          </AuthorizedRoute>
        }
      />

      <Route
        path="/shopping_list"
        element={
          <AuthorizedRoute
            userRole={user?.user}
            route={{
              requiredRoles: ["User"],
              resource: "profile",
              action: "read",
            }}
          >
            <ShoppingList />
          </AuthorizedRoute>
        }
      />

      <Route
        path="/transaction"
        element={
          <AuthorizedRoute
            userRole={user?.user}
            route={{
              requiredRoles: ["User"],
              resource: "profile",
              action: "read",
            }}
          >
            <Transaction />
          </AuthorizedRoute>
        }
      />

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
