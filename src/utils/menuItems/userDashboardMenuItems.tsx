import React from "react";
import HomeWork from "@mui/icons-material/HomeWork";
import Dashboard from "@mui/icons-material/Dashboard";
import { DashboardSvg, ProfileSvg, ShoppingListSvg, TransactionSvg } from "../../assets";

export const userDashboardMenuItems = [
    {
        title: "خانه",
        to: "/",
        startIcon: <HomeWork />,
    },
    {
        title: "داشبورد",
        to: "/dashboard/user",
        startIcon: <DashboardSvg />,
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
    {
        title: "مشخصات کاربری",
        to: "/dashboard/user/profile",
        startIcon: <ProfileSvg />,
    },
];
