import { screen } from "@testing-library/react";
import renderWithProviders from "../../mocks/renderWithProviders";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an ice-cream animation with aria label text 'An image of a colored ice cream waiting while the data isbeing loaded'", () => {
      const expectedText =
        "An image of a colored ice cream waiting while the data is being loaded";

      renderWithProviders(<Loader />);

      const loader = screen.queryByLabelText(expectedText);

      expect(loader).toBeInTheDocument();
    });
  });
});
