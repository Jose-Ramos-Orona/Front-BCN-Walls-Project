import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import DetailPage from "./DetailPage";

describe("Given  a DetailPage", () => {
  describe("When its rendered", () => {
    test("Then it should show a GraffitiDetail component with an ''", () => {
      renderWithProviders(<DetailPage />);

      const usernameInput = screen.queryByRole("article");

      expect(usernameInput).toBeInTheDocument();
    });
  });
});
