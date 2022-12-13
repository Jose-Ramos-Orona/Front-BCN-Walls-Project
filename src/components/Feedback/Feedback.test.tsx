import { screen } from "@testing-library/react";
import { mockUserInitialState } from "../../mocks/mocksFeedbacks/mockInitialState";
import {
  mockErrorFeedback,
  mockSuccessFeedback,
} from "../../mocks/mocksFeedbacks/mocksFeedback";
import mockGraffitiInitialstate from "../../mocks/mocksGraffitis/mockGraffitiInitialState";
import renderWithProviders from "../../mocks/renderWithProviders";
import { closeModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import Feedback from "./Feedback";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

jest.useFakeTimers();

describe("Given a Feedback component", () => {
  describe("When its rendered with text 'Great' and isError is false", () => {
    test("Then it should show the received text and close after 2300 seconds", () => {
      const expectedMessage = "Great";

      renderWithProviders(<Feedback />, {
        preloadedState: {
          ui: mockSuccessFeedback,
          user: mockUserInitialState,
          graffiti: mockGraffitiInitialstate,
        },
      });
      jest.advanceTimersByTime(2350);

      const feedback = screen.queryByText(expectedMessage);
      expect(feedback).toBeInTheDocument();
      expect(mockDispatch).toHaveBeenCalledWith(closeModalActionCreator());
    });
  });
  describe("When its rendered with text 'Error' and isError is true", () => {
    test("Then it should show the received text and close after 2300 seconds", () => {
      const expectedMessage = "Error";

      renderWithProviders(<Feedback />, {
        preloadedState: {
          ui: mockErrorFeedback,
          user: mockUserInitialState,
          graffiti: mockGraffitiInitialstate,
        },
      });
      jest.advanceTimersByTime(2350);

      const feedback = screen.queryByText(expectedMessage);
      expect(feedback).toBeInTheDocument();
      expect(mockDispatch).toHaveBeenCalledWith(closeModalActionCreator());
    });
  });
});
