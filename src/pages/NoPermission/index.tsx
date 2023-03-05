import React from "react";
import { Container, TextAlert, ContainerAnimation } from "./styles";
import Lottie from "lottie-react";
import notPermission from "../../lottie/noPermission.json";
interface IHome {}

const NotPermission: React.FC<IHome> = (props) => {
  const {} = props;

  return (
    <Container>
      <ContainerAnimation>
        <Lottie style={{ height: 400 }} animationData={notPermission} />
      </ContainerAnimation>
      <TextAlert>Você nao tem permissao para acessar essa pagina.</TextAlert>
    </Container>
  );
};

export default NotPermission;
