import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

export const login =
  (creds = { email: "sg@gmail.com", password: "123456" }) =>
  async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      let res = await axios.post(
        "https://sample-backend-cvar.onrender.com/user/login",
        creds
      );
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      return res.data;
    } catch (error) {
      dispatch({ type: LOGIN_ERROR, payload: error.message });
    }
  };

export const logout = () => ({ type: LOGOUT });
