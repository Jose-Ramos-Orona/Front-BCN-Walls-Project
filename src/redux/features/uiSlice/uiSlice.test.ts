import {
  mockInitialState,
  mockInitialStateLoading,
} from "../../../mocks/mocksFeedbacks/mockInitialState";
import { OpenModalActionPayload, UiState } from "./types";
import {
  closeLoadingActionCreator,
  closeModalActionCreator,
  openModalActionCreator,
  triggerLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a function uiSlice", () => {
  describe("When it receives an initial state and an unknown action", () => {
    test("Then it should return a copy of the initial state", () => {
      const unknownAction = {
        type: "ui/unknownAction",
      };

      const newUilState = uiReducer(mockInitialState, unknownAction);

      expect(newUilState).toStrictEqual(mockInitialState);
    });
  });

  describe("When it receives an initial state and a isOpen true, action with text 'Fatal Error' and isError true", () => {
    test("Then it should return a new state with the received text and isError true", () => {
      const currentUiState: UiState = mockInitialState;

      const actionPayload: OpenModalActionPayload = {
        isError: true,
        message: "Fatal Error",
      };
      const openModalAction = openModalActionCreator(actionPayload);
      const newUiState = uiReducer(currentUiState, openModalAction);
      const expectedUiState: UiState = {
        isError: true,
        isOpen: true,
        message: "Fatal Error",
      };

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it recieves an initial state with isOpen true and a closeModalActionCreator'", () => {
    test("Then it should return a new state with with showModal false", () => {
      const currentUiState: UiState = {
        ...mockInitialState,
        isOpen: true,
      };

      const closeModalAction = closeModalActionCreator();
      const newUiState = uiReducer(currentUiState, closeModalAction);
      const expectedUiState: UiState = {
        ...currentUiState,
        isOpen: false,
      };

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an initial state with isLoading false and triggerLoading action", () => {
    test("Then it should return a new state with isLoading true", () => {
      const currentUiState: UiState = mockInitialStateLoading;
      const expectedUiState: UiState = {
        ...currentUiState,
        isLoading: true,
      };

      const triggerLoadingAction = triggerLoadingActionCreator();
      const newUiState = uiReducer(currentUiState, triggerLoadingAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives an initial state with isLoading true and closeLoading action", () => {
    test("Then it should return a new state with isLoading false", () => {
      const currentUiState: UiState = mockInitialStateLoading;
      const expectedUiState: UiState = {
        ...currentUiState,
        isLoading: false,
      };

      const closeLoadingAction = closeLoadingActionCreator();
      const newUiState = uiReducer(currentUiState, closeLoadingAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
