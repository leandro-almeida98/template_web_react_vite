import React from "react";
import { Container } from "./styles";
import { Button, ButtonToolbar, ButtonProps, ButtonToolbarProps } from "rsuite";
interface IBttnDefault extends ButtonProps {
  text: string;
  cStyle?: React.CSSProperties;
}

const BttnDefault: React.FC<IBttnDefault> = (props) => {
  const { text, cStyle } = props;

  return (
    <Container style={cStyle}>
      <ButtonToolbar>
        <Button {...props}>{text}</Button>
      </ButtonToolbar>
    </Container>
  );
};

export default BttnDefault;
