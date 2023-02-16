import React from "react";
import BttnDefault from "../../components/buttons/default";
import InputTextControled from "../../components/inputs/text";
import { Button, ButtonToolbar } from "rsuite";

import {
  Container,
  ContentAnnouncement,
  ContentInfoHeader,
  ContentInfoHeaderSubTitle,
  ContentInfoHeaderTitle,
  ContentInfoLogin,
  ContentInputsLogin,
  ContentRecoverPassword,
  ContentRegister,
  ImageBackground,
} from "./styles";
import InputPasswordControled from "../../components/inputs/password";

interface IHome {}

const Home: React.FC<IHome> = (props) => {
  const {} = props;

  return (
    <Container>
      <ContentAnnouncement>
        <ImageBackground />
      </ContentAnnouncement>
      <ContentInfoLogin>
        <ContentInfoHeaderTitle>Hello Again!</ContentInfoHeaderTitle>
        <ContentInfoHeaderSubTitle>
          SE CADASTRE AQUI MESMO NO YVIDEOS
        </ContentInfoHeaderSubTitle>
        <ContentInputsLogin>
          <InputTextControled
            placeholder="Email"
            style={{ width: 350, height: 49 }}
          />
          <InputPasswordControled placeholder="Senha" style={{ width: 350 }} />
          <ContentRecoverPassword>
            <BttnDefault
              text="Recuperar Senha"
              appearance="subtle"
              size="xs"
              cStyle={{ boxShadow: "none" }}
              style={{ width: 110, height: 29 }}
            />
          </ContentRecoverPassword>

          <BttnDefault
            text="Login"
            size="lg"
            style={{ width: "100%", height: 49 }}
          />
        </ContentInputsLogin>

        <ContentRegister>REGISTRE-SE AQUI</ContentRegister>
      </ContentInfoLogin>
    </Container>
  );
};

export default Home;
