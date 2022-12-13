import { screen } from "@testing-library/react";
import mockGraffiti from "../../mocks/mocksGraffitis/mockGraffiti";
import renderWithProviders from "../../mocks/renderWithProviders";
import GraffitiDetail from "./GraffitiDetail";

describe("Given a GraffitiCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an article with text 'The Girl'", () => {
      const graffitiTitle = "The Girl";

      renderWithProviders(<GraffitiDetail graffiti={mockGraffiti[0]} />);

      const graffitiCard = screen.queryByRole("heading", {
        level: 2,
        name: graffitiTitle,
      });

      expect(graffitiCard).toHaveTextContent(graffitiTitle);
    });
  });
});
