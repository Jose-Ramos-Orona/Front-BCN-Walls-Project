import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockUserInitialState } from "../../mocks/mocksFeedbacks/mockInitialState";
import { mockSuccessFeedback } from "../../mocks/mocksFeedbacks/mocksFeedback";
import mockGraffitiInitialstate from "../../mocks/mocksGraffitis/mockGraffitiInitialState";
import renderWithProviders from "../../mocks/renderWithProviders";
import NavigationBar from "./NavigationBar";

describe("Given a NavigationBar component", () => {
  describe("When it is rendered and the user is not Logged", () => {
    test("Then it should show trhee anchor links with the texts 'Home','Register' and 'Login'", async () => {
      const homeText = "Home";
      const registerText = "Register";
      const loginText = "Login";

      renderWithProviders(<NavigationBar />, {
        preloadedState: {
          ui: mockSuccessFeedback,
          user: mockUserInitialState,
          graffiti: mockGraffitiInitialstate,
        },
      });
      const menuLink = screen.queryByRole("button");
      await userEvent.click(menuLink!);
      const registerLink = screen.queryByRole("link", { name: registerText });
      const loginLink = screen.queryByRole("link", { name: loginText });
      const homeLink = screen.queryByRole("link", { name: homeText });

      expect(homeLink).toBeInTheDocument();
      expect(registerLink).toBeInTheDocument();
      expect(loginLink).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user is Logged", () => {
    test("Then it should show trhee anchor links with the texts 'Home' and 'Create'", async () => {
      const homeText = "Home";
      const creationText = "Create";

      renderWithProviders(<NavigationBar />, {
        preloadedState: {
          ui: mockSuccessFeedback,
          user: { ...mockUserInitialState, isLogged: true },
          graffiti: mockGraffitiInitialstate,
        },
      });
      const menuLink = screen.queryByRole("button");
      await userEvent.click(menuLink!);
      const homeLink = screen.queryByRole("link", { name: homeText });
      const createLink = screen.queryByRole("link", { name: creationText });

      expect(homeLink).toBeInTheDocument();
      expect(createLink).toBeInTheDocument();
    });
  });
});
