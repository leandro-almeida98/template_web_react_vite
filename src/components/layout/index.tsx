import React from "react";
import MenuLeft from "./menuLeft";
import MenuTop from "./menuTop";

interface ILayout {
  layout: "menuTop" | "menuLeft";
  children: React.ReactElement;
}

const Layout: React.FC<ILayout> = (props) => {
  const { layout, children } = props;
  if (layout.includes("menuTop")) return <MenuTop>{children}</MenuTop>;
  if (layout.includes("menuLeft")) return <MenuLeft>{children}</MenuLeft>;
  return <></>;
};

export default Layout;
