import React from "react";
import HomeWork from "@mui/icons-material/HomeWork";
import Dashboard from "@mui/icons-material/Dashboard";

export const userDashboardMenuItems = [
    {
        title: "خانه",
        to: "/",
        startIcon: <HomeWork />,
    },
    {
        title: "داشبورد",
        to: "/dashboard/user",
        startIcon: <Dashboard />,
    },
    {
        category: {
            children: [
                {
                    title: "پروفایل",
                },
            ],
        },
    },
];
