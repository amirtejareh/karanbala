import React from "react";
import HomeWork from "@mui/icons-material/HomeWork";

export const menuItems = [
    {
        title: "خانه",
        to: "/",
        startIcon: <HomeWork />,
    },
    {
        category: {
            children: [
                {
                    title: "مدیریت محتوا",
                    submenu: [
                        {
                            title: "رشته تحصیلی",
                            to: "/",
                        },
                        {
                            title: "پایه تحصیلی",
                            to: "/",
                        },
                        {
                            title: "کتاب",
                            to: "/",
                        },
                        {
                            title: "ترم تحصیلی",
                            to: "/",
                        },
                        {
                            title: "فصل",
                            to: "/",
                        },
                        {
                            title: "موضوع",
                            to: "/",
                        },
                    ],
                },
            ],
        },
    },
];
