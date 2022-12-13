import { screen } from "@testing-library/react";
import {
  mockInitialState,
  mockUserInitialState,
} from "../../mocks/mocksFeedbacks/mockInitialState";
import mockGraffitiList from "../../mocks/mocksGraffitis/mockGraffitiList";
import renderWithProviders from "../../mocks/renderWithProviders";
import GraffitiCardList from "./GraffitiCardList";

describe("Given a GraffitiCardList", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of Graffitis", () => {
      renderWithProviders(<GraffitiCardList />, {
        preloadedState: {
          ui: mockInitialState,
          user: mockUserInitialState,
          graffiti: mockGraffitiList,
        },
      });

      const list = screen.queryByRole("list");

      expect(list).toBeInTheDocument();
    });
    // test("And it should show a button with text 'DELETE'", async () => {
    //   const mockDeleteGraffiti = jest.fn();

    //   jest.mock("../../hooks/useGraffiti/useGraffiti", () => {
    //     return () => ({
    //       deleteGraffiti: mockDeleteGraffiti,
    //     });
    //   });
    //   const textButton = "DELETE";

    //   renderWithProviders(<GraffitiCardList />);

    //   const button = screen.queryByRole("button", { name: textButton })!;
    //   await userEvent.click(button!);

    //   // expect(button).toBeInTheDocument();
    //   expect(mockDeleteGraffiti).toHaveBeenCalled();
    // });
  });
});
