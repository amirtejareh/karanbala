import React from "react";
import HomeWork from "@mui/icons-material/HomeWork";
import Dashboard from "@mui/icons-material/Dashboard";

export const adminDashboardMenuItems = [
    {
        title: "خانه",
        to: "/",
        startIcon: <HomeWork />,
    },
    {
        title: "داشبورد",
        to: "/pv/karanbala/admin",
        startIcon: <Dashboard />,
    },
    {
        category: {
            children: [
                {
                    title: "مدیریت محتوا",
                    submenu: [
                        {
                            title: "رشته تحصیلی",
                            to: "/pv/karanbala/admin/field-of-study",
                        },
                        {
                            title: "پایه تحصیلی",
                            to: "/pv/karanbala/admin/grade-level",
                        },
                        {
                            title: "کتاب",
                            to: "/pv/karanbala/admin/book",
                        },
                        {
                            title: "ترم تحصیلی",
                            to: "/pv/karanbala/admin/term-of-study",
                        },
                        {
                            title: "فصل",
                            to: "/pv/karanbala/admin/chapter",
                        },
                        {
                            title: "موضوع",
                            to: "/pv/karanbala/admin/subject",
                        },
                    ],
                },
            ],
        },
    },
];
