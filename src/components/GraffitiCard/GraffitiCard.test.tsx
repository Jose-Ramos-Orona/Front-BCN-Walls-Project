import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockGraffiti from "../../mocks/mocksGraffitis/mockGraffiti";
import renderWithProviders from "../../mocks/renderWithProviders";
import GraffitiCard from "./GraffitiCard";

const mockDeleteGraffiti = jest.fn();

jest.mock("../../hooks/useGraffiti/useGraffiti", () => {
  return () => ({
    deleteGraffiti: mockDeleteGraffiti,
  });
});

describe("Given a GraffitiCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an article with text 'The Girl'", () => {
      const graffitiTitle = "The Girl";

      renderWithProviders(
        <GraffitiCard
          image={mockGraffiti[0].image}
          title={mockGraffiti[0].title}
          id={mockGraffiti[0]._id}
        />
      );

      const graffitiCard = screen.queryByRole("heading", {
        level: 2,
        name: graffitiTitle,
      });

      expect(graffitiCard).toHaveTextContent(graffitiTitle);
    });
    test("And it should show a button with text 'DELETE'", async () => {
      const textButton = "DELETE";

      renderWithProviders(
        <GraffitiCard
          image={mockGraffiti[0].image}
          title={mockGraffiti[0].title}
          id={mockGraffiti[0]._id}
        />
      );

      const button = screen.queryByRole("button", { name: textButton })!;
      await userEvent.click(button!);

      expect(button).toBeInTheDocument();
      expect(mockDeleteGraffiti).toHaveBeenCalled();
    });
  });
});
