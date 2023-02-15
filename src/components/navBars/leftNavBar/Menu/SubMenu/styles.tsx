import styled from "styled-components";

export const ContainerSubMenu = styled.div`
  display: flex;
  border-left: 2px solid ${({ theme }) => theme.menu.submenu.divisor};
  flex-direction: column;
  padding-left: 10px;
  margin-left: 22px;
  transition: all 0.5s;
`;

export const SubMenu = styled.a<any>`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  ${(props) => !props.isOpen && `display:none;`}
  margin-left: 10px;
  transition: all 0.5s;
  color: ${({ theme }) => theme.menu.submenu.text.default};
  &:hover {
    background-color: ${({ theme }) => theme.menu.submenu.background.hover};
    color: ${({ theme }) => theme.menu.submenu.text.active};
  }
`;

export const MenuTitle = styled.div`
  display: flex;
  font-size: 14px;
  color: inherit;
  flex: 1;
  font-weight: 600;
`;
