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
          <InputTextControled label="Email" placeholder="Insira o seu e-mail" />
          <InputPasswordControled
            label="Senha"
            placeholder="insira sua senha"
          />
          <ContentRecoverPassword>
            <BttnDefault
              text="Recuperar Senha"
              variant="text"
              style={{ height: 19, color: "#dddd" }}
            />
          </ContentRecoverPassword>

          <BttnDefault text="Login" style={{ width: "100%", height: 49 }} />
        </ContentInputsLogin>

        <ContentRegister>REGISTRE-SE AQUI</ContentRegister>
      </ContentInfoLogin>
    </Container>
  );
};

export default Home;
