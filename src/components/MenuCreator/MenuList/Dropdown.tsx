import React from 'react';
import MenuList from './MenuList';

interface DropdownProps {
  submenus: any;
  depthLevel: number;
  index: string;
  subtitle: any;
}

const Dropdown = (props: DropdownProps) => {
  let { submenus, depthLevel, index, subtitle } = props;

  let id = subtitle.map((el: any) => el.key).lastIndexOf(index);

  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
  return (
    <ul
      data-id={index}
      className={`dropdown ${dropdownClass} ${
        subtitle[id]?.value ? `show` : ''
      }`}
    >
      {submenus.map((submenu: any, index: any) => (
        <MenuList item={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};

export default Dropdown;
