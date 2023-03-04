import React from "react";
import { Container } from "./styles";

interface IHome {}

const Home: React.FC<IHome> = (props) => {
  const {} = props;

  return <Container>Você nao tem permissao para acessa essa pagina</Container>;
};

export default Home;
