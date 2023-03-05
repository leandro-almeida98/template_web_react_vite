import { createActions, createReducer } from "reduxsauce";
import { persistor } from "../persistor"; // importe o persistor do seu store
import { useDispatch, useSelector } from "react-redux";

/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  addUser: ["data"],
  logoff: [],
});

/**
 * Handlers
 */
const INITIAL_STATE = {
  profile: {
    id: null,
    name: "",
  },
  permissions: ["default", "Admin"],
  roles: [],
  isAuthenticated: false,
  token: "",
};

const addUser = (state: any = INITIAL_STATE, action: any) => {
  const profile = action?.data?.profile;
  const permissions = action?.data?.permissions;
  const roles = action?.data?.roles;
  const isAuthenticated = true;
  const token = action?.data?.token;

  return (state = {
    ...state,
    profile: profile,
    permissions: permissions,
    roles: roles,
    isAuthenticated: isAuthenticated,
    token: token,
  });
};

const logoff = (state: any = INITIAL_STATE, action: any) => {
  return (state = {
    ...state,
    profile: {
      id: null,
      name: "",
    },
    permissions: [],
    roles: [],
    isAuthenticated: false,
    token: null,
  });
};
// export

/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.ADD_USER]: addUser,
  [Types.LOGOFF]: logoff,
});
