import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading with level 1 and text 'BCN WALLS'", () => {
      const expectedText = "BCN WALLS";

      renderWithProviders(<Header />);
      const heading = screen.queryByRole("heading", {
        name: expectedText,
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
