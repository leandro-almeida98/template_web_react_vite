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
import { handleMsgErrorInResponse } from "../../util/index";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import axios from "axios";
interface IHome {}
import { ToastContainer, toast } from "react-toastify";
const Home: React.FC<IHome> = (props) => {
  const {} = props;
  const queryClient = useQueryClient();
  const fetch_login = async (data: { usuario: string; senha: string }) => {
    const { data: response } = await axios.post(
      "http://jogosapidev.sec.ba.gov.br/api",
      data
    );
    return response.data;
  };

  const keyQuery = "Login";
  // const query = useQuery({
  //   queryKey: [keyQuery],
  //   queryFn: () => fetchLogin,
  //   onSuccess: () => {
  //     toast.success("Sucesso na requisição", { toastId: keyQuery });
  //   },
  //   onError: (error) => {
  //     toast.error(error.message);
  //   },
  // });
  // const { isLoading, isError, error, mutate } = useMutation(fetchLogin);
  // const { mutate, isLoading } = useMutation(
  //   fetchLogin({ usuario: "", senha: "" }),
  //   {
  //     onSuccess: (data) => {
  //       console.log(data);
  //       const message = "success";
  //       alert(message);
  //     },
  //     onError: () => {
  //       alert("there was an error");
  //     },
  //     onSettled: () => {
  //       queryClient.invalidateQueries("create");
  //     },
  //   }
  // );

  const mutation = useMutation(
    (newTodo) => {
      return axios.post("http://jogosapidev.sec.ba.gov.br/api/auth", newTodo);
    },
    {
      onSuccess: () => {
        toast.success("Sucesso na requisição", { toastId: keyQuery });
      },
      onError: (error) => {
        toast.error(handleMsgErrorInResponse(error));
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
