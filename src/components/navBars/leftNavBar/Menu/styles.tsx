import styled from "styled-components";
export const ContainerMenus = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0 20px 0;
  transition: all 0.5s;
  flex: 1;
`;
export const Container = styled.a<any>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  transition: all 0.5s;
  color: ${({ theme }) => theme.menu.text.colors.default};
  ${(props) => {
    if (props.isOpen) {
      return `background-color: ${props.theme.menu.background.hover};`;
    }
  }}
  /* isOpen && } */
  &:hover {
    background-color: ${({ theme }) => theme.menu.background.hover};
    color: ${({ theme }) => theme.menu.text.colors.default};
  }
  ${({ isActive, theme }) =>
    isActive && `color: ${theme.menu.text.colors.active};`}
`;
export const SubMenu = styled.a<any>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  ${(props) => !props.isOpen && `display:none;`}
  transition: all 0.5s;
  &:hover {
    background-color: rgb(40, 47, 59);
  }
`;
export const ContainerSubMenu = styled.div`
  display: flex;
  border-left: 2px solid rgb(45, 53, 73);
  flex-direction: column;
  padding-left: 10px;
  margin-left: 10px;
  transition: all 0.5s;
`;

export const MenuTitle = styled.div<any>`
  display: flex;
  font-size: 14px;
  color: inherit;
  flex: 1;
  font-weight: 600;
`;
