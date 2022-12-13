import { UiState } from "../../redux/features/uiSlice/types";
import { UserState } from "../../redux/features/userSlice/types";

export const mockInitialState: UiState = {
  isOpen: false,
  isError: false,
  message: "",
};

export const mockInitialStateLoading: UiState = {
  isOpen: false,
  isError: false,
  message: "",
  isLoading: false,
};

export const mockUserInitialState: UserState = {
  username: "",
  id: "",
  token: "",
  isLogged: false,
};
