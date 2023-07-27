import React, { useEffect } from "react";
import { MenuList } from "./MenuList";
import { MenuWrapper } from "./MenuWrapper";

type MenuCreatorProps = {
    items: any[];
};

const MenuCreator = (props: MenuCreatorProps) => {
    const { items } = props;

    const depthLevel = 0;

    return (
        <MenuWrapper>
            {items.map((item: any, index: any) => (
                <MenuList key={index} {...{ item, depthLevel }}>
                    {" "}
                </MenuList>
            ))}
        </MenuWrapper>
    );
};

export default MenuCreator;
