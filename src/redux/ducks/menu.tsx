import { createActions, createReducer } from "reduxsauce";
import { MENU } from "../../system/menu";
/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  add_menu: ["menu"],
  menu_search: ["menu_searched"],
  edit_menu_active: ["key"],
  edit_menu_is_open: ["open"],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  menus: MENU,
  menus_filter: [],
  menu_active: 1,
  menu_is_open: true,
};

const add_menu = (state: any = INITIAL_STATE, action: any) =>
  (state = {
    ...state,
    menus: action?.menu,
  });

const edit_menu_filters = (state: any = INITIAL_STATE, action: any) => {
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

const edit_menu_active = (state: any = INITIAL_STATE, action: any) => {
  state = {
    ...state,
    menu_active: action.key,
  };
  return state;
};

const edit_menu_is_open = (state: any = INITIAL_STATE, action: any) =>
  (state = {
    menu_is_open: action.open,
  });

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.ADD_MENU]: add_menu,
  [Types.MENU_SEARCH]: edit_menu_filters,
  [Types.EDIT_MENU_ACTIVE]: edit_menu_active,
  [Types.EDIT_MENU_IS_OPEN]: edit_menu_is_open,
});
