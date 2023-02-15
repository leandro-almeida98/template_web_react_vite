import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 280px;
  background: ${({ theme }) => theme.menu.background.default};
  flex-direction: column;
  gap: 5px;
  padding: 30px 20px;
  border-top-right-radius: 40px;
  /* margin: 40px 0; */
  border-end-end-radius: 40px;
  box-shadow: 2px 2px 6px #bebebe, -2px -2px 6px #ffffff;
`;
export const ContainerLogo = styled.div`
  display: flex;
`;
export const ContainerSearch = styled.div`
  display: flex;
`;
export const ContainerMenus = styled.div`
  display: flex;
`;
export const ContainerConfigs = styled.div`
  display: flex;
`;
