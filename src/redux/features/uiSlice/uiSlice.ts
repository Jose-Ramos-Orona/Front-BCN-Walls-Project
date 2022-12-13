import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UiState, OpenModalActionPayload } from "./types";

const initialState: UiState = {
  isOpen: false,
  isError: false,
  message: "",
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    openModal: (
      currentUiState,
      action: PayloadAction<OpenModalActionPayload>
    ): UiState => ({
      ...currentUiState,
      isOpen: true,
      isError: action.payload.isError,
      message: action.payload.message,
    }),

    closeModal: (currentUiState): UiState => ({
      ...currentUiState,
      isOpen: false,
    }),

    triggerLoading: (currentUiState): UiState => ({
      ...currentUiState,
      isLoading: true,
    }),

    closeLoading: (currentUiState): UiState => ({
      ...currentUiState,
      isLoading: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
  triggerLoading: triggerLoadingActionCreator,
  closeLoading: closeLoadingActionCreator,
} = uiSlice.actions;
