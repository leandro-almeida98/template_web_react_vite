import React from "react";
import MenuConfigs from "./MenuConfigs";
import Menus from "./Menus";
import NameSystem from "./NameSystem";
import Profile from "./Profile";
import Search from "./Search";
import { Container } from "./styles";
interface ILeftNavBar {}

const LeftNavBar: React.FC<ILeftNavBar> = (props) => {
  return (
    <Container>
      <NameSystem />
      <Search />
      <Menus />
      <MenuConfigs />
      <Profile />
    </Container>
  );
};

export default LeftNavBar;
