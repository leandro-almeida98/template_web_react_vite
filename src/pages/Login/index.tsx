import React from "react";
import BttnDefault from "../../components/buttons/default";
import InputTextControled from "../../components/inputs/text";
import InputMaskControled from "../../components/inputs/mask";
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
import { useDispatch, useSelector } from "react-redux";
import Lottie from "lottie-react";
import personprogramming from "../../lottie/personprogramming.json";
import NameSystem from "../../components/navBars/leftNavBar/NameSystem";

interface IHome {}

const Home: React.FC<IHome> = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    data = {
      ...data,
      usuario:
        data?.usuario === "leandro.almeida98@hotmail.com"
          ? "gestorsec@sec.br"
          : data?.usuario,
    };
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
        toast.success("Login efetuado com sucesso!");
        dispatch({
          type: "ADD_USER",
          data: {
            id: "1",
            name: "robin",
            permissions: ["Admin"],
            roles: ["admin"],
            isAuthenticated: true,
          },
        });
      },
      onError: (error) => {
        toast.error(handleMsgErrorInResponse(error));
      },
      onSettled: () => {
        //       queryClient.invalidateQueries("create");
        // console.log("onSettled");
      },
    }
  );

  return (
    <Container>
      <ContentAnnouncement style={{ backgroundColor: "#fd8d2d" }}>
        <Lottie
          style={{ backgroundColor: "#fd8d2d" }}
          animationData={personprogramming}
        />
      </ContentAnnouncement>
      <ContentInfoLogin>
        <NameSystem style={{ width: "100%" }} />
        <ContentInfoHeaderTitle>Seja Bem-vindo!</ContentInfoHeaderTitle>
        <ContentInfoHeaderSubTitle>
          Esse é o meu template de estudos de React Js
        </ContentInfoHeaderSubTitle>
        <ContentInputsLogin id="form-login" onSubmit={handleSubmit(onSubmit)}>
          {/* <InputMaskControled
            control={control}
            errors={errors}
            name="usuario2"
            label="Email"
            placeholder="insira seu email"
          /> */}
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
