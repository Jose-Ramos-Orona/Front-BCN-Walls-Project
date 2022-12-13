import { screen } from "@testing-library/react";
import {
  mockInitialState,
  mockUserInitialState,
} from "../../mocks/mocksFeedbacks/mockInitialState";
import mockGraffitiList from "../../mocks/mocksGraffitis/mockGraffitiList";
import renderWithProviders from "../../mocks/renderWithProviders";
import GraffitiPage from "./GraffitiPage";

describe("Given a GraffitiPage", () => {
  describe("When its rendered", () => {
    test("Then it should show a page with a text 'A walk for the wall...' in level 2", () => {
      const expectedText = "A walk for the wall...";

      renderWithProviders(<GraffitiPage />);

      const expectedTitle = screen.queryByRole("heading", {
        level: 2,
        name: expectedText,
      });

      expect(expectedTitle).toBeInTheDocument();
    });

    test("And a list of graffitis", () => {
      renderWithProviders(<GraffitiPage />, {
        preloadedState: {
          ui: mockInitialState,
          user: mockUserInitialState,
          graffiti: mockGraffitiList,
        },
      });

      const list = screen.queryByRole("list");

      expect(list).toBeInTheDocument();
    });
  });
});
