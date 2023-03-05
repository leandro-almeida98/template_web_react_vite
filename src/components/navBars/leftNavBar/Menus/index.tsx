import React from "react";
import { ContainerMenus } from "./styles";
import Menu from "../Menu";
import { useSelector } from "react-redux";

interface IMenus {}

const Menus: React.FC<IMenus> = (props) => {
  const menu = useSelector((state: any) => state.menu);
  return (
    <ContainerMenus>
      {menu?.menus_filter.map((menu: any, index: any) => {
        return <Menu menu={menu} key={menu.key} />;
      })}
    </ContainerMenus>
  );
};

export default Menus;
