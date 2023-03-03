import { IMenu } from "../system/menu";
export const handleMsgErrorInResponse = (error) => {
  console.log("##### -> handleMsgErrorInResponse -> error:", error);
  return error?.response?.data?.msg
    ? error?.response?.data?.msg
    : error.message
    ? error.message
    : error.mesage
    ? error.mesage
    : "Erro Desconhecido";
};
export const generate_routes_dinamics = (MENU: IMenu[]) => {
  const routesMenu = MENU.map((menu: any) => {
    return {
      path: menu?.path,
      element: menu?.element,
    };
  });
  const routesSubMenu = () => {
    let subMenus: any = [];
    MENU.map((menu: any) => {
      if (menu?.subMenu && menu?.subMenu.length > 0)
        menu?.subMenu.map((subMenu: any) => {
          subMenus.push({
            path: subMenu?.path,
            element: subMenu?.element,
          });
        });
    });
    return subMenus;
  };

  const routes = [...routesMenu, ...routesSubMenu()];
  return routes;
};
