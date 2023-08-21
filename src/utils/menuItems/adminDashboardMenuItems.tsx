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
                            title: "فصل",
                            to: "/pv/karanbala/admin/chapter",
                        },
                        {
                            title: "بخش",
                            to: "/pv/karanbala/admin/section",
                        },
                        {
                            title: "موضوع",
                            to: "/pv/karanbala/admin/subject",
                        },
                    ],
                },
                {
                    title: "مدیریت آزمون",
                    submenu: [
                        {
                            title: "ایجاد آزمون",
                            to: "/pv/karanbala/admin/objective-test",
                        },
                        {
                            title: "ایجاد شناسنامه سوال",
                            to: "/pv/karanbala/admin/question",
                        },
                        {
                            title: "مدیریت آزمون",
                            to: "/pv/karanbala/admin/objective-test-management",
                        },
                    ],
                },
            ],
        },
    },
];
