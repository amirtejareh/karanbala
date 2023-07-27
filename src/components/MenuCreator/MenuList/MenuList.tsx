import { Button } from "@mui/material";
import React, { Fragment, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { NavLink as RouterLink } from "react-router-dom";

interface MenuListProps {
    item: {
        category?: {
            children: {
                to: string;
                startIcon: React.ReactNode;
                submenu?: any;
                title: string;
            }[];
            title: string;
        };
        title: string;
        to: string;
        startIcon: React.ReactNode;
    };
    depthLevel: number;
    children?: React.ReactNode;
    key: number;
}

const MenuList = (props: MenuListProps) => {
    const [subtitle, setSubtitle] = useState([{ key: "", value: false }]);

    const { item, depthLevel } = props;

    let ref = useRef<any>();

    return (
        <li className="menu-items" ref={ref}>
            {item.category ? (
                <>
                    <span className="categoryTitle">{item.category.title}</span>

                    {item.category.children.map((child, index) => {
                        return (
                            <Fragment key={index}>
                                {child.submenu ? (
                                    <>
                                        <button
                                            type="button"
                                            aria-haspopup="menu"
                                            onClick={() => {
                                                setSubtitle((prev: any) => {
                                                    return [
                                                        ...prev,
                                                        {
                                                            key: child.title,
                                                            value: !prev[
                                                                prev
                                                                    .map((el: any) => el.key)
                                                                    .lastIndexOf(child.title)
                                                            ]?.value,
                                                        },
                                                    ];
                                                });
                                            }}
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            {child.title}{" "}
                                            {depthLevel > 0 ? (
                                                <span>&raquo;</span>
                                            ) : (
                                                <>
                                                    {" "}
                                                    {subtitle[
                                                        subtitle
                                                            .map((el: any) => el.key)
                                                            .lastIndexOf(child.title)
                                                    ]?.value ? (
                                                        <span className="arrow" />
                                                    ) : (
                                                        <span className="arrow-left" />
                                                    )}
                                                </>
                                            )}
                                        </button>

                                        <Dropdown
                                            depthLevel={depthLevel}
                                            submenus={child.submenu}
                                            subtitle={subtitle}
                                            index={child.title}
                                        />
                                    </>
                                ) : (
                                    <Button
                                        disableRipple
                                        component={RouterLink}
                                        to={child.to}
                                        startIcon={child.startIcon}
                                    >
                                        {child.title}
                                    </Button>
                                )}
                            </Fragment>
                        );
                    })}
                </>
            ) : (
                <>
                    <Button
                        disableRipple
                        component={RouterLink}
                        to={item.to}
                        startIcon={item.startIcon}
                    >
                        {item.title}
                    </Button>
                </>
            )}
        </li>
    );
};

export default MenuList;
