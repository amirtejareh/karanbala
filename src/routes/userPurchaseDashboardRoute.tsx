import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthorizedRoute from "../components/AuthorizedRoute";
import { useSelector } from "react-redux";
import { MainReducerInterface } from "../provider/reducer/main.reducer";
import Dashboard from "../views/Dashboard/UserDashboard/pages/Dashboard";
import Purchase from "../views/Dashboard/UserPurchaseDashboard/page/Purchase";
import ShoppingList from "../views/Dashboard/UserPurchaseDashboard/page/ShoppingList";
import Transaction from "../views/Dashboard/UserPurchaseDashboard/page/Transaction";

const UserPurchaseDashboardRoute = () => {
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
    </Routes>
  );
};

export default UserPurchaseDashboardRoute;
