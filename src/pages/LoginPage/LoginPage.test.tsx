import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import LoginPage from "./LoginPage";

describe("Given  a LoginPage", () => {
  describe("When its rendered", () => {
    test("Then it should show a LoginForm component with an 'Username' input", () => {
      const expectedText = "Username";

      renderWithProviders(<LoginPage />);
      const usernameInput = screen.queryByLabelText(expectedText);

      expect(usernameInput).toBeInTheDocument();
    });
  });
});
