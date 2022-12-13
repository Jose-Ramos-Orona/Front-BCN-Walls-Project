import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import CreateGraffitiPage from "./CreateGraffitiPage";

describe("Given  a RegisterPage", () => {
  describe("When its rendered", () => {
    test("Then it should show a RegisterForm component with an 'Username' input", () => {
      const expectedText = "Title:";

      renderWithProviders(<CreateGraffitiPage />);
      const usernameInput = screen.queryByLabelText(expectedText);

      expect(usernameInput).toBeInTheDocument();
    });
  });
});
