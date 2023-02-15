import React from "react";
import { useTheme } from "styled-components";
import Globe from "../../../../assets/svg/globe";
import { Icon } from "@iconify/react";
interface IMenuIcon {
  iconProps: any;
  isMenuActive?: boolean;
}

const MenuIcon: React.FC<IMenuIcon> = (props) => {
  const { iconProps, isMenuActive } = props;
  const theme = useTheme();
  return (
    <Icon
      color={
        isMenuActive
          ? theme.menu.icon.color.active
          : theme.menu.icon.color.default
      }
      width={theme?.menu?.icon?.size}
      height={theme?.menu?.icon?.size}
      {...iconProps}
    />
  );
};

export default MenuIcon;
