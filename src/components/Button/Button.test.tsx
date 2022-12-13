import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../mocks/renderWithProviders";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When its rendered with the text 'Register'", () => {
    test("Then it should show 'Register' on it", () => {
      const expectedText = "Register";
      const buttonType = "big";

      renderWithProviders(
        <Button buttonType={buttonType} action={() => {}} text="Register" />
      );

      const button = screen.queryByRole("button");

      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(expectedText);
    });
  });

  describe("When it receives an action", () => {
    test("Then it should call an action on click", async () => {
      const buttonAction = jest.fn();
      const buttonType = "small";

      renderWithProviders(
        <Button buttonType={buttonType} action={buttonAction} text="" />
      );

      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(buttonAction).toHaveBeenCalled();
    });
  });
});
