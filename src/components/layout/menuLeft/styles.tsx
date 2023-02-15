import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  gap: 20px;
`;
export const ContainerMenu = styled.div`
  display: flex;
`;
export const ContainerContent = styled.div`
  display: flex;
  flex: 1;
  background: ${({ theme }) => theme.body};
  /* border: 1px solid blue; */
  margin: 10px 10px 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 6px #bebebe, -2px -2px 6px #ffffff;
`;
