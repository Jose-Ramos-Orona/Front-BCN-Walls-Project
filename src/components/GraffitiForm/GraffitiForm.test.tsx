import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockGraffitiCreation from "../../mocks/mocksGraffitis/mockGraffitiCreation";
import renderWithProviders from "../../mocks/renderWithProviders";
import GraffitiForm from "./GraffitiForm";

const mockCreationAction = jest.fn();

jest.mock("../../hooks/useGraffiti/useGraffiti", () => {
  return () => ({
    createGraffiti: mockCreationAction,
  });
});

describe("Given a GraffitiForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show 6 input elements", () => {
      const expectedTotalInputs = 5;
      const labelSelectText = "Theme:";

      renderWithProviders(<GraffitiForm />);

      const formInput = screen.queryAllByRole("textbox");
      const select = screen.queryByLabelText(labelSelectText!);

      expect(formInput).toHaveLength(expectedTotalInputs);
      expect(select).toBeInTheDocument();
    });
  });

  describe("When its button 'Create' is clicked", () => {
    test("Then the form should be submitted", async () => {
      const buttonText = "Create";
      const labelTitle = "Title:";
      const labelImage = "Image:";
      const labelAuthor = "Author:";
      const labelAdress = "Address:";
      const labelTheme = "Theme:";
      const labelDescription = "Description:";
      const graffitiDataInputs = mockGraffitiCreation;

      renderWithProviders(<GraffitiForm />);

      const titleInput = screen.queryByLabelText(labelTitle)!;
      await userEvent.type(titleInput, graffitiDataInputs.title);
      const imageInput = screen.queryByLabelText(labelImage)!;
      await userEvent.type(imageInput, graffitiDataInputs.image);
      const authorInput = screen.queryByLabelText(labelAuthor)!;
      await userEvent.type(authorInput, graffitiDataInputs.author);
      const adressInput = screen.queryByLabelText(labelAdress)!;
      await userEvent.type(adressInput, graffitiDataInputs.address);
      const classCharacterSelect = screen.getByRole("combobox", {
        name: labelTheme,
      });
      const classCharacterOption = screen.getByRole("option", {
        name: graffitiDataInputs.theme,
      });
      await userEvent.selectOptions(classCharacterSelect, classCharacterOption);
      const descriptionInput = screen.queryByLabelText(labelDescription)!;
      await userEvent.type(descriptionInput, graffitiDataInputs.description);
      const button = screen.queryByRole("button")!;
      await userEvent.click(button);

      expect(button).toHaveTextContent(buttonText);
      expect(mockCreationAction).toHaveBeenCalled();
    });
  });
});
