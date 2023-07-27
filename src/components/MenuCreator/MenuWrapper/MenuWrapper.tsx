import styled from "@emotion/styled";
import { Box } from "@mui/material";
import React from "react";

const MenuContainer = styled(Box)(
    () => `
  :root{
    font-family:IRANSans !important;
    }
  
  .menus {
    display: flex;
    list-style: none;
    direction: ltr;
    flex-direction: column;
    
  }
  .menu-items {
    position: relative;
    text-align: left;
    
  }
  
  .menu-items a,
  .menu-items button {
    margin: 0 ;
    padding:0 10px 0  0;
    line-height: 2;
    font-family:IRANSans !important;

  }
  
  .menu-items a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
  
  .menu-items button {
    color: inherit;
    font-size: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
    width: 100%;
  }
 
  .arrow::after {
    content: '';
    display: inline-block;
    margin-left: 0.28em;
    vertical-align: 0.09em;
    border-top: 0.42em solid;
    border-right: 0.32em solid transparent;
    border-left: 0.32em solid transparent;
  }

  .arrow-left::after {
    content: '';
    display: inline-block;
    margin-left: 0.28em;
    vertical-align: 0.09em;
    border-bottom: 0.32em solid transparent;
    border-right: 0.32em solid  transparent;
    border-left: 0.42em solid ;
    border-top: 0.32em solid transparent;
  }

  .categoryTitle{
    color: #707e8d
  }
  
  .dropdown {

    box-shadow: 0 10px 15px -3px rgba(46, 41, 51, 0.08),
    0 4px 6px -2px rgba(71, 63, 79, 0.16);
    z-index: 9999;
    min-width: 100px;
    padding: 0.5rem 0;
    border-radius: 0.5rem;
    list-style-type: disc; 
    display: none;
  }
  
  .dropdown.show {
    display: block;
    padding: 0 28px;
  }
  
  .dropdown .dropdown-submenu {
    position: absolute;
    left: 10px;
    top: 15px
  }
  span{ display: inline}
  span .MuiSvgIcon-root{font-size:15px}
  `
);

type MenuWrapperProps = {
    children: React.ReactNode;
};
const MenuWrapper = (props: MenuWrapperProps) => {
    const { children } = props;

    return (
        <MenuContainer>
            <ul className="menus">{children}</ul>
        </MenuContainer>
    );
};

export default MenuWrapper;
