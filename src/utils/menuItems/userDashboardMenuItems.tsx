import React from "react";
import HomeWork from "@mui/icons-material/HomeWork";
import { DashboardSvg, ProfileSvg, ShoppingListSvg, TransactionSvg } from "../../assets";

export const userDashboardMenuItems = [
  {
    title: "خانه",
    to: "/",
    startIcon: <HomeWork />,
  },

  {
    title: "مشخصات کاربری",
    to: "/dashboard/user/profile",
    startIcon: <ProfileSvg />,
  },
];
