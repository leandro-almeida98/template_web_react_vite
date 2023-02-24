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
        <ContentInfoHeaderTitle>Seja Bem-vindo!</ContentInfoHeaderTitle>
        <ContentInfoHeaderSubTitle>
          Esse é o meu template de estudos de React Js
        </ContentInfoHeaderSubTitle>
        <ContentInputsLogin>
          <InputTextControled
            id="input-email"
            label="Email"
            placeholder="Insira o seu e-mail"
            style={{ width: "100%", height: "5.1vh" }}
          />
          <InputPasswordControled
            label="Senha"
            id="input-password"
            placeholder="insira sua senha"
            style={{ width: "100%", height: "5.1vh" }}
          />
          <ContentRecoverPassword>
            <BttnDefault
              id="bttn-login"
              text="Recuperar Senha"
              variant="text"
              style={{ color: "#969ba3", height: "3.8vh" }}
            />
          </ContentRecoverPassword>

          <BttnDefault
            text="Login"
            style={{ width: "100%", height: "5.1vh" }}
          />
        </ContentInputsLogin>

        <BttnDefault
          text="REGISTRE-SE AQUI"
          variant="text"
          style={{ marginTop: 25, color: "#969ba3" }}
        />
      </ContentInfoLogin>
    </Container>
  );
};

export default Home;
