import { UiState } from "../../redux/features/uiSlice/types";

export const mockSuccessFeedback: UiState = {
  isOpen: true,
  isError: false,
  message: "Great",
};

export const mockErrorFeedback: UiState = {
  isOpen: true,
  isError: true,
  message: "Error",
};
