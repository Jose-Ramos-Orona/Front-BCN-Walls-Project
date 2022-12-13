import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  closeLoadingActionCreator,
  openModalActionCreator,
  triggerLoadingActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import { JwtPayload, UserData, UserRegisterData } from "../../types/types";
import decodeToken from "../../utils/decodeToken";

const useUser = () => {
  const apiUrl = process.env.REACT_APP_URLAPI;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const registerUser = async (userData: UserRegisterData) => {
    dispatch(triggerLoadingActionCreator());
    try {
      await axios.post(`${apiUrl}/users/register`, userData);
      dispatch(closeLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: false,
          message: `Welcome ${userData.username}!`,
        })
      );
      navigate("/login");
    } catch (error: unknown) {
      dispatch(closeLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          message: "Sorry, user already in the database",
        })
      );
    }
  };
  const loginUser = async (userLoginData: UserData) => {
    dispatch(triggerLoadingActionCreator());
    try {
      const response = await axios.post(`${apiUrl}/users/login`, userLoginData);

      const { token } = await response.data;
      const logUser: JwtPayload = decodeToken(token);

      dispatch(closeLoadingActionCreator());
      dispatch(loginUserActionCreator({ ...logUser, token }));
      localStorage.setItem("token", token);
      dispatch(
        openModalActionCreator({
          isError: false,
          message: `Welcome back ${userLoginData.username}!`,
        })
      );
      navigate("/");
    } catch (error: unknown) {
      dispatch(closeLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          message: "Sorry, wrong credentials",
        })
      );
    }
  };
  return { registerUser, loginUser };
};

export default useUser;
