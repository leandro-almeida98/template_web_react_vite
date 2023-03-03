import React from "react";
import BttnDefault from "../../components/buttons/default";
import InputTextControled from "../../components/inputs/text";
import {
  Container,
  ContentAnnouncement,
  ContentInfoHeaderSubTitle,
  ContentInfoHeaderTitle,
  ContentInfoLogin,
  ContentInputsLogin,
  ContentRecoverPassword,
  ImageBackground,
} from "./styles";
import InputPasswordControled from "../../components/inputs/password";
import { handleMsgErrorInResponse } from "../../util/index";
import { useQuery, useMutation } from "react-query";
import { fetch_login } from "../../api/requisitions";
import { toast } from "react-toastify";

interface IHome {}

const Home: React.FC<IHome> = (props) => {
  const {} = props;
  // const query = useQuery({
  //   queryKey: ["Todo"],
  //   queryFn: () => fetchLogin,
  //   onSuccess: () => {
  //     toast.success("Sucesso na requisição", { toastId: "Todo" });
  //   },
  //   onError: (error) => {
  //     toast.error(error.message);
  //   },
  // });

  const mutation = useMutation(
    (newTodo: any) => {
      return fetch_login(newTodo);
    },
    {
      onSuccess: () => {
        toast.success("Sucesso na requisição");
      },
      onError: (error) => {
        toast.error(handleMsgErrorInResponse(error));
      },
      onSettled: () => {
        //       queryClient.invalidateQueries("create");
        console.log("onSettled");
      },
    }
  );

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
            onClick={() =>
              mutation.mutate({
                usuario: "gestorsec@sec.br",
                senha: "password",
              })
            }
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
