import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import RegisterPage from "./RegisterPage";

describe("Given  a RegisterPage", () => {
  describe("When its rendered", () => {
    test("Then it should show a RegisterForm component with an 'Username' input", () => {
      const expectedText = "Username";

      renderWithProviders(<RegisterPage />);
      const usernameInput = screen.queryByLabelText(expectedText);

      expect(usernameInput).toBeInTheDocument();
    });
  });
});
