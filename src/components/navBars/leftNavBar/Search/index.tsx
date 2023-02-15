import React from "react";
import { Container } from "./styles";
import { BiSearchAlt } from "react-icons/bi";
import { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";

interface ISearch {}

const Search: React.FC<ISearch> = (props) => {
  const {} = props;
  const theme = useTheme();
  const dispatch = useDispatch();
  const [inputSearchMenu, setInputSearchMenu] = React.useState("");

  React.useEffect(() => {
    dispatch({ type: "MENU_SEARCH", menu_searched: inputSearchMenu });
  }, [inputSearchMenu]);

  return (
    <Container>
      <BiSearchAlt
        size={theme.menu.icon.size}
        style={{ minWidth: 22 }}
        color={theme.menu.icon.color.default}
      />
      <input
        className="inputSearch"
        type="text"
        placeholder="Pesquisar"
        value={inputSearchMenu}
        onChange={(v) => setInputSearchMenu(v.target.value)}
      />
    </Container>
  );
};

export default Search;
