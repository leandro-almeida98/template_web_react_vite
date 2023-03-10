import styled from "styled-components";
import { LOGO_SYSTEM } from "../../../../system/info";
export const BackgroundImage = styled.div`
  background-image: url(${LOGO_SYSTEM});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  flex: 1;
`;
export const Container = styled.div`
  display: flex;
  height: 150px;
  padding: 0 10px;
  margin-bottom: 20px;
`;
