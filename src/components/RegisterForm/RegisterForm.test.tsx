import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../mocks/renderWithProviders";
import RegisterForm from "./RegisterForm";

const mockRegisterAction = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    registerUser: mockRegisterAction,
  });
});

describe("Given a RegisterForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show 3 input elements", () => {
      const expectedTotalInputs = 2;
      const labelPasswordText = "Password";

      renderWithProviders(<RegisterForm />);

      const formInput = screen.queryAllByRole("textbox");
      const passwordInput = screen.queryByLabelText(labelPasswordText);

      expect(formInput).toHaveLength(expectedTotalInputs);
      expect(passwordInput).toBeInTheDocument();
    });
  });

  describe("When its button 'Register' is clicked", () => {
    test("Then the form should be submitted", async () => {
      const buttonText = "Register";
      const username = "Paco";
      const password = "1234";
      const email = "paco@paquito.com";

      renderWithProviders(<RegisterForm />);

      const usernameInput = screen.queryByLabelText("Username")!;
      await userEvent.type(usernameInput, username);
      const emailInput = screen.queryByLabelText("Email")!;
      await userEvent.type(emailInput, email);
      const passwordInput = screen.queryByLabelText("Password")!;
      await userEvent.type(passwordInput, password);
      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(button).toHaveTextContent(buttonText);
      expect(mockRegisterAction).toHaveBeenCalled();
    });
  });
});
