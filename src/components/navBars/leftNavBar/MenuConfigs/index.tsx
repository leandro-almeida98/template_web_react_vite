import React from "react";
import { ContainerMenus } from "./styles";
import Menu from "../Menu";
import { MENUS_CONFIGS } from "../../../../system/menu";
import { useTheme } from "styled-components";

interface IMenuConfigs {}

const MenuConfigs: React.FC<IMenuConfigs> = (props) => {
  const {} = props;
  const theme = useTheme();

  return (
    <ContainerMenus>
      {MENUS_CONFIGS.map((menu) => (
        <Menu menu={menu} key={menu.key} />
      ))}
    </ContainerMenus>
  );
};

export default MenuConfigs;
