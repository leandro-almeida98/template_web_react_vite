import styled from "styled-components";
import background from "../../assets/background.png";
export const Container = styled.div`
  display: flex;
  width: 100vw;
  background: rgb(255, 255, 255);
`;

export const ContentAnnouncement = styled.div`
  display: flex;
  flex: 1.6;
  justify-content: center;
  overflow: hidden;
`;
export const ImageBackground = styled.div`
  display: flex;
  flex: 1;
  background-image: url(${background});
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
`;

export const ContentInfoHeader = styled.div`
  display: flex;
  border: 1px solid red;
`;
export const ContentInputsLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
  width: 60%;
`;
export const ContentRegister = styled.div`
  display: flex;
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
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
`;
