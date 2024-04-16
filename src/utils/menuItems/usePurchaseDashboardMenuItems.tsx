import React from "react";
import HomeWork from "@mui/icons-material/HomeWork";
import { DashboardSvg, ProfileSvg, ShoppingListSvg, TransactionSvg } from "../../assets";

export const userPurchaseDashboardMenuItems = [
  {
    title: "خانه",
    to: "/",
    startIcon: <HomeWork />,
  },

  {
    title: "خرید/تمدید اشتراک",
    to: "/dashboard/user/purchase",
    startIcon: <ProfileSvg />,
  },
  {
    title: "لیست خریدها",
    to: "/dashboard/user/shopping_list",
    startIcon: <ShoppingListSvg />,
  },
  {
    title: "تراکنش مالی",
    to: "/dashboard/user/transaction",
    startIcon: <TransactionSvg />,
  },
];
