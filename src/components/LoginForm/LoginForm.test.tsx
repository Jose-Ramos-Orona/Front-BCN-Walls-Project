import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../mocks/renderWithProviders";
import LoginForm from "./LoginForm";

const mockLoginAction = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    loginUser: mockLoginAction,
  });
});

describe("Given a LoginForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show 2 input elements", () => {
      const expectedTotalInputs = 1;
      const labelPasswordText = "Password";

      renderWithProviders(<LoginForm />);

      const formInput = screen.queryAllByRole("textbox");
      const passwordInput = screen.queryByLabelText(labelPasswordText);

      expect(formInput).toHaveLength(expectedTotalInputs);
      expect(passwordInput).toBeInTheDocument();
    });
  });

  describe("When its button 'Login' is clicked", () => {
    test("Then the form should be submitted", async () => {
      const buttonText = "Login";
      const username = "Paco";
      const password = "1234";

      renderWithProviders(<LoginForm />);

      const usernameInput = screen.queryByLabelText("Username")!;
      await userEvent.type(usernameInput, username);
      const passwordInput = screen.queryByLabelText("Password")!;
      await userEvent.type(passwordInput, password);
      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(button).toHaveTextContent(buttonText);
      expect(mockLoginAction).toHaveBeenCalled();
    });
  });
});
