import { createActions, createReducer } from "reduxsauce";
/**
 * Action types & creators
 */
export const { Types, Creators } = createActions({
  addUser: ["data"],
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

// export const handleLogout = () => {
//   persistor.purge();
//   location.reload();
// };
/**
 * Reducer
 */
export default createReducer(INITIAL_STATE, {
  [Types.ADD_USER]: addUser,
});
