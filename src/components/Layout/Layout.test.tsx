import { screen, waitFor } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When its rendered and receives the path '/'", () => {
    test("Then it should show a list of Graffitis", async () => {
      const expectedText = "A walk for the wall...";
      const path = "/";

      renderWithProviders(<Layout />, { initialEntries: [path] });

      await waitFor(() => {
        const heading = screen.queryByRole("heading", {
          name: expectedText,
          level: 2,
        });

        expect(heading).toBeInTheDocument();
      });
    });
  });

  describe("When its rendered and receives the path '/create'", () => {
    test("Then it should show a list of Graffitis", async () => {
      const expectedText = "Paint the wall!";
      const path = "/create";

      renderWithProviders(<Layout />, { initialEntries: [path] });

      await waitFor(() => {
        const heading = screen.queryByRole("heading", {
          name: expectedText,
          level: 2,
        });

        expect(heading).toBeInTheDocument();
      });
    });
  });

  describe("When its rendered and receives the path '/detail/:idGraffiti'", () => {
    test("Then it should show a list of Graffitis", async () => {
      const path = "/detail/:idGraffiti";

      renderWithProviders(<Layout />, { initialEntries: [path] });

      await waitFor(() => {
        const heading = screen.queryByRole("article");

        expect(heading).toBeInTheDocument();
      });
    });
  });
});
