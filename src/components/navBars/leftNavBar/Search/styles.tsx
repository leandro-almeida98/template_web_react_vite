import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  display: flex;
  height: 40px;
  background-color: ${({ theme }) => theme.menu.search.background};
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  .inputSearch {
    background-color: transparent;
    flex: 1;
    font-weight: bold;
    color: ${({ theme }) => theme.menu.search.color.default};
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${({ theme }) => theme.menu.search.color.placeholder};
      opacity: 1; /* Firefox */
    }
  }
`;
