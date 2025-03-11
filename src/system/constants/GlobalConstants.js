export const UserActionType = {
  Create: "create",
  Update: "update",
  Delete: "delete",
  Details: "details",
};

export const modalConstants = {
  ModalOpen: "modalOpen",
  SidebaroOpen: "sideBarOpen",
};

export const status = {
  Failed: "failed",
  Success: "success",
};
export const Url = {
  BASE_URL: process.env.REACT_APP_BASE_API_URL,
};

export const localStorageConstants = {
  CURRENT_USER: "currentUser",
};

export const LoginConstants = {
  Login: "login",
  SignUp: "signup",
  Created: "Created",
  CURRENT_USER: "LocalUser",
  LOADING: "Loading",
};

export const globalConstants = {
  SORT: {
    ASC: "asc",
    DESC: "desc",
  },
  SCREEN_BREAKPOINTS: {
    xs: 575,
    sm: 767,
    md: 991,
    lg: 1199,
    xl: 1399,
  },
};
