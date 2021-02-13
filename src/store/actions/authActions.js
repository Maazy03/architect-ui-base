import { actionTypes, apiCreator, actionCreator } from "../common";

export const login = (body) => (dispatch) => {
  return apiCreator(
    { method: "POST", endPoint: "/admin", body: body },
    actionTypes.LOGIN,
    dispatch
  );
};

export const signup = (body) => (dispatch) => {
  return apiCreator(
    { method: "POST", endPoint: "/admin/register", body: body },
    actionTypes.SIGNUP,
    dispatch
  );
};

export const setWareHouseAddress = (userId, body) => (dispatch) => {
  return apiCreator(
    { method: "POST", endPoint: `/vendor/update/${userId}`, body: body },
    actionTypes.SET_WAREHOUSE_ADDRESS,
    dispatch
  );
};

export const forgotPassword = (body) => (dispatch) => {
  return apiCreator(
    { method: "POST", endPoint: "/admin/sendCode", body: body },
    actionTypes.TOKEN,
    dispatch
  );
};

export const sendCode = (data) => (dispatch) => {
  return apiCreator(
    {
      method: "POST",
      endPoint: `/admin/sendCode`,
      body: { email: data.email },
    },
    null,
    dispatch
  );
};

export const verifyCode = (data) => (dispatch) => {
  return apiCreator(
    {
      method: "POST",
      endPoint: `/admin/verifyCode`,
      body: data.code,
    },
    null,
    dispatch
  );
};

export const resetPassword = (data) => (dispatch) => {
  return apiCreator(
    {
      method: "POST",
      endPoint: `/admin/passwordReset`,
      body: data.body,
    },
    null,
    dispatch
  );
};

export const logout = () => (dispatch) => {
  dispatch(actionCreator(actionTypes.LOGOUT, null));
};
