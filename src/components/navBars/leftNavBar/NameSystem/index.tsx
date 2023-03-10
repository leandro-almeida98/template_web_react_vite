import React from "react";
import { Container, BackgroundImage } from "./styles";

interface INameSystem {
  style: React.CSSProperties;
}

const NameSystem: React.FC<INameSystem> = (props) => {
  const {} = props;

  return (
    <Container {...props}>
      <BackgroundImage />
    </Container>
  );
};

export default NameSystem;
