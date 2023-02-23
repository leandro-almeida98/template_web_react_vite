import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  background: rgb(255, 255, 255);
  background: linear-gradient(90deg, #ffffff 0%, #e1e59b 100%);
`;

export const ContentAnnouncement = styled.div`
  display: flex;
  /* border: 1px solid red; */
  flex: 1.6;
  padding: 50px;
`;
export const ImageBackground = styled.div`
  display: flex;
  border-radius: 50px;
  flex: 1;
  background-image: url("https://img.freepik.com/fotos-premium/ilustracao-de-rasterizacao-do-homem-trabalhando-na-mesa-no-escritorio-um-jovem-em-uma-camiseta-amarela-senta-se-em-um-pe-a-pe-em-fones-de-ouvido-com-um-telefone-e-bebida-quente-em-uma-caneca-de-cacto-3d-render-artwork_579956-2714.jpg?w=2000");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px 0px 6px #bebebe, -2px -2px 6px #ffffff;
`;
export const ContentInfoLogin = styled.div`
  display: flex;
  flex: 1;
  padding: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* border: 1px solid green; */
`;

export const ContentInfoHeader = styled.div`
  display: flex;
  border: 1px solid red;
`;
export const ContentInputsLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  /* border: 1px solid red; */
  width: 60%;
`;
export const ContentRegister = styled.div`
  display: flex;
  /* border: 1px solid red; */
  margin-top: 20px;
  font-size: 16px;
  color: #43414b;
`;
export const ContentInfoHeaderTitle = styled.div`
  font-weight: bold;
  font-size: 26px;
  color: #43414b;
  margin-bottom: 20px;
`;
export const ContentInfoHeaderSubTitle = styled.div`
  font-weight: normal;
  font-size: 16px;
  color: #43414b;
  margin-bottom: 25px;
`;

export const ContentRecoverPassword = styled.div`
  display: flex;
  font-weight: normal;
  font-size: 16px;
  color: #43414b;
  margin-bottom: 20px;
  /* border: 1px solid red; */
  justify-content: flex-end;
  align-items: flex-end;

  padding: 0 5px;
`;
