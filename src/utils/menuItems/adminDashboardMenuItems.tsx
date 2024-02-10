import React from "react";
import HomeWork from "@mui/icons-material/HomeWork";
import { DashboardSvg } from "../../assets";

export const adminDashboardMenuItems = [
    {
        title: "خانه",
        to: "/",
        startIcon: <HomeWork />,
    },
    {
        title: "داشبورد",
        to: "/dashboard/admin",
        startIcon: <DashboardSvg />,
    },
    {
        category: {
            children: [
                {
                    title: "مدیریت محتوا",
                    submenu: [
                        {
                            title: "رشته تحصیلی",
                            to: "/dashboard/admin/field-of-study",
                        },
                        {
                            title: "پایه تحصیلی",
                            to: "/dashboard/admin/grade-level",
                        },
                        {
                            title: "کتاب مرجع",
                            to: "/dashboard/admin/book-reference",
                        },

                        {
                            title: "کتاب",
                            to: "/dashboard/admin/book",
                        },

                        {
                            title: "فصل",
                            to: "/dashboard/admin/chapter",
                        },
                        {
                            title: "بخش",
                            to: "/dashboard/admin/section",
                        },
                        {
                            title: "موضوع",
                            to: "/dashboard/admin/subject",
                        },
                    ],
                },
                {
                    title: "مدیریت آموزش",
                    submenu: [
                        {
                            title: "معرفی کتاب",
                            to: "/dashboard/admin/book-intro",
                        },
                        {
                            title: "درس نامه",
                            to: "/dashboard/admin/learning-material",
                        },
                        {
                            title: "سوالات تشریحی",
                            to: "/dashboard/admin/essay-questions",
                        },
                        {
                            title: "نکته و تست",
                            to: "/dashboard/admin/tip-test",
                        },
                        {
                            title: "کران بالا",
                            to: "/dashboard/admin/karanbala",
                        },
                        {
                            title: "تمارین داخل کتاب",
                            to: "/dashboard/admin/practice",
                        },
                    ],
                },
                {
                    title: "مدیریت آزمون",
                    submenu: [
                        {
                            title: "ایجاد آزمون",
                            to: "/dashboard/admin/objective-test",
                        },
                        {
                            title: "ایجاد شناسنامه سوال",
                            to: "/dashboard/admin/question",
                        },
                        {
                            title: "مدیریت آزمون",
                            to: "/dashboard/admin/objective-test-management",
                        },
                        {
                            title: "مدیریت پاسخنامه",
                            to: "/dashboard/admin/answersheet-management",
                        },
                    ],
                },
            ],
        },
    },
];
