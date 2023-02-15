import React from "react";
import { Container, BackgroundImage } from "./styles";

interface INameSystem {}

const NameSystem: React.FC<INameSystem> = (props) => {
  const {} = props;

  return (
    <Container>
      <BackgroundImage />
    </Container>
  );
};

export default NameSystem;
