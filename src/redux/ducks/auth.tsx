import { createActions, createReducer } from "reduxsauce";
import { MENU } from "../../system/menu";
/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  login: ["login", "password"],
  logoff: ["token"],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  profile: [],
  token: [],
};

const login = (state: any = INITIAL_STATE, action: any) =>
  (state = {
    ...state,
    menus: action?.menu,
  });

const logoff = (state: any = INITIAL_STATE, action: any) => {
  state = {
    ...state,
    menus_filter: state?.menus.filter((menu: any) => {
      // se o termo de pesquisa for em branco, retornar todos menu
      if (action?.menu_searched.length === 0) return menu;
      // filtro no menu
      if (
        menu?.title.toLowerCase().search(action?.menu_searched.toLowerCase()) >=
        0
      )
        return menu;

      // FAZ FILTRO NO SUBMENU
      if (menu.subMenu && menu.subMenu.length > 0) {
        const subMenuFilter = menu.subMenu.filter((submenu: any) => {
          if (
            submenu?.title
              .toLowerCase()
              .search(action?.menu_searched.toLowerCase()) >= 0
          ) {
            return menu;
          }
        });
        if (subMenuFilter.length > 0) return subMenuFilter;
      }
    }),
  };

  return state;
};

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.LOGIN]: login,
  [Types.LOGOFF]: logoff,
});
