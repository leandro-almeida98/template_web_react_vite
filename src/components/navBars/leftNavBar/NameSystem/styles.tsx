import styled from "styled-components";
import imgProfile from "../../../../assets/logo.png";

export const BackgroundImage = styled.div`
  background-image: url(${imgProfile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  flex: 1;
`;
export const Container = styled.div`
  display: flex;
  height: 100px;
  padding: 20px 10px;
`;
