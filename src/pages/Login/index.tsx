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
import { useForm } from "react-hook-form";

interface IHome {}

const Home: React.FC<IHome> = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [sucessLogin, setSucessLogin] = React.useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
    mutation.mutate(data);
  };
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
        setSucessLogin(true);
        toast.success("Sucesso na requisição");
      },
      onError: (error) => {
        setSucessLogin(false);
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
      <ContentInfoLogin id={sucessLogin ? "login-sucess" : "login-error"}>
        <ContentInfoHeaderTitle>Seja Bem-vindo!</ContentInfoHeaderTitle>
        <ContentInfoHeaderSubTitle>
          Esse é o meu template de estudos de React Js
        </ContentInfoHeaderSubTitle>
        <ContentInputsLogin id="form-login" onSubmit={handleSubmit(onSubmit)}>
          <InputTextControled
            id="input-email"
            errors={errors}
            disabled={mutation.isLoading}
            control={control}
            name="usuario"
            label="Email"
            placeholder="Insira o seu e-mail"
          />

          <ContentRecoverPassword>
            <InputPasswordControled
              control={control}
              errors={errors}
              disabled={mutation.isLoading}
              label="Senha"
              id="input-password"
              name="senha"
              style={{ width: "100%" }}
              placeholder="insira sua senha"
            />
            <BttnDefault
              id="bttn-login"
              text="Recuperar Senha"
              variant="text"
              style={{ color: "#969ba3", height: "3.8vh" }}
            />
          </ContentRecoverPassword>

          <BttnDefault
            text="Login"
            disabled={mutation.isLoading}
            type="submit"
            loading={mutation.isLoading}
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
