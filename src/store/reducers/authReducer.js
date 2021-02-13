import { actionTypes } from "../common/types";

const initialState = {
  user: {
    userIsLoggedIn: false,
  },
  token: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: {
          userIsLoggedIn: true,
          ...payload.result,
        },
      };

    case actionTypes.SIGNUP:
      return {
        ...state,
        user: {
          userIsLoggedIn: true,
          ...payload.result,
        },
      };

    case actionTypes.SET_WAREHOUSE_ADDRESS:
      return {
        ...state,
        user: {
          ...state.user,
          wareHouseAddress: payload.result,
        },
      };

    case actionTypes.TOKEN:
      return {
        ...state,
        token: payload.result,
      };
    default:
      return state;
  }
};
