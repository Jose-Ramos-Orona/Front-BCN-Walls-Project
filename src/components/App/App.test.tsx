import { screen, waitFor } from "@testing-library/react";
import { mockUserInitialState } from "../../mocks/mocksFeedbacks/mockInitialState";
import {
  mockErrorFeedback,
  mockSuccessFeedback,
} from "../../mocks/mocksFeedbacks/mocksFeedback";
import mockGraffitiInitialstate from "../../mocks/mocksGraffitis/mockGraffitiInitialState";
import renderWithProviders from "../../mocks/renderWithProviders";
import App from "./App";

describe("Given an App component", () => {
  describe("When is rendered and isOpen state is true and isError state is false", () => {
    test("Then it should show a Feedback component with feedback success text 'Great'", async () => {
      const feedbackSuccess = "Great";

      renderWithProviders(<App />, {
        preloadedState: {
          ui: mockSuccessFeedback,
          user: mockUserInitialState,
          graffiti: mockGraffitiInitialstate,
        },
      });
      await waitFor(() => {
        const feedback = screen.queryByText(feedbackSuccess);

        expect(feedback).toBeInTheDocument();
      });
    });
  });

  describe("When is rendered and isOpen state is true and isError state is true", () => {
    test("Then it should show a Feedback component with a feedback error text 'Error'", async () => {
      const feedbackError = "Error";

      renderWithProviders(<App />, {
        preloadedState: {
          ui: mockErrorFeedback,
          user: mockUserInitialState,
          graffiti: mockGraffitiInitialstate,
        },
      });

      await waitFor(() => {
        const feedback = screen.queryByText(feedbackError);

        expect(feedback).toBeInTheDocument();
      });
    });
  });
});
