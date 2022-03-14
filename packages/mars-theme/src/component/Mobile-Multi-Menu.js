import React, { createContext, useState, useContext } from "react";
import styled from "styled-components";
import Link from "@frontity/components/link";

const UL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

// const ULSub = styled.ul`
//   list-style: none;
//   margin: 0;
//   padding: 0;

// `;

const LI = styled.li``;
const Item = styled.div`
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  padding: 5px 8px;
  color: #3e485d;
  padding-left: ${(props) => `${props.dept * 8}px`};
  align-items: center;
`;
const Label = styled.span`
  width: 100%;
  display: block;
  cursor: pointer;
`;
const Arrow = styled.span`
  display: flex;
  width: 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #3e485d;

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #000;
    transform: ${(props) => (props.toggle ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;
import { DrawerToggle } from "../pages/Header";
import { connect } from "frontity";
// import Header from "../pages/Header";
// const UserContext = createContext();

const MobileMultiMenus = ({ menus, state, actions, libraries }) => {
  const [activeMenus, setActiveMenus] = useState([]);

  const toggleDrawer = useContext(DrawerToggle);
  console.log("hellodatasss", toggleDrawer);

  const handleMenuClick = (data) => {
    console.log(data);
  };

  const handleArrowClick = (menuName) => {
    let newActiveMenus = [...activeMenus];

    if (newActiveMenus.includes(menuName)) {
      var index = newActiveMenus.indexOf(menuName);
      if (index > -1) {
        newActiveMenus.splice(index, 1);
      }
    } else {
      newActiveMenus.push(menuName);
    }

    setActiveMenus(newActiveMenus);
  };

  const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex }) => (
    <LI id="mobileMenu">
      <Item dept={dept} >
        <Link link={data.href}>
          <Label
            onClick={() => {
              toggleDrawer();
              handleMenuClick(data);
            }}
          >
            {data.label}{" "}
          </Label>
        </Link>
        {hasSubMenu && (
          <Arrow
            onClick={() => handleArrowClick(menuName)}
            toggle={activeMenus.includes(menuName)}
          />
        )}
      </Item>
      {hasSubMenu && (
        <SubMenu
          dept={dept}
          data={data.submenu}
          toggle={activeMenus.includes(menuName)}
          menuIndex={menuIndex}
        />
      )}
    </LI>
  );

  const SubMenu = ({ dept, data, toggle, menuIndex }) => {
    if (!toggle) {
      return null;
    }

    dept = dept + 1;

    return (
      <UL>
        {data.map((menu, index) => {
          const menuName = `submenu-${dept}-${menuIndex}-${index}`;

          return (
            // <Link link="/okay">
            <ListMenu
              dept={dept}
              data={menu}
              hasSubMenu={menu.submenu}
              menuName={menuName}
              key={menuName}
              menuIndex={index}
            />
            // </Link>
          );
        })}
      </UL>
    );
  };

  return (
    <UL>
      {menus.map((menu, index) => {
        const dept = 1;
        const menuName = `menu-${dept}-${index}`;

        return (
          //   <Link link="/okat">
          <ListMenu
            dept={dept}
            data={menu}
            hasSubMenu={menu.submenu}
            menuName={menuName}
            key={menuName}
            menuIndex={index}
          />
          //   </Link>
        );
      })}
    </UL>
  );
};

export default connect(MobileMultiMenus);
