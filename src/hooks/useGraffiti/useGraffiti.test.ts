import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import mockGraffiti from "../../mocks/mocksGraffitis/mockGraffiti";
import mockGraffitiCreation from "../../mocks/mocksGraffitis/mockGraffitiCreation";
import ProviderWrapper from "../../mocks/providerWrapper";
import {
  deleteGraffitiActionCreator,
  getAllGraffitisActionCreator,
  getGraffitiByIdActionCreator,
} from "../../redux/features/graffitiSlice/graffitiSlice";
import { OpenModalActionPayload } from "../../redux/features/uiSlice/types";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { store } from "../../redux/store";
import useGraffiti from "./useGraffiti";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given the useGrffiti custom hook", () => {
  describe("When its method loadAllGraffitis is invoked and rejects it", () => {
    test("Then it should invoke dispatch with openModalActionCreator with text 'Sorry, this wall hasn't graffitis!' and isError true", async () => {
      const {
        result: {
          current: { loadAllGraffitis },
        },
      } = renderHook(() => useGraffiti(), {
        wrapper: ProviderWrapper,
      });

      const modalPayload: OpenModalActionPayload = {
        isError: true,
        message: "Sorry, this wall hasn't graffitis!",
      };
      await act(async () => await loadAllGraffitis());

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          openModalActionCreator(modalPayload)
        )
      );
    });
  });

  describe("When it's method loadAllGraffitis is invoked", () => {
    test("Then it should invoke dispatch with loadGraffitisActionCreator and a list of graffitis", async () => {
      const {
        result: {
          current: { loadAllGraffitis },
        },
      } = renderHook(() => useGraffiti(), {
        wrapper: ProviderWrapper,
      });

      await act(async () => await loadAllGraffitis());
      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          getAllGraffitisActionCreator(mockGraffiti)
        )
      );
    });
  });
  describe("When it's method deleteGraffiti is invoked", () => {
    test("Then it should invoke dispatch with deleteGraffitiActionCreator and delete one graffiti", async () => {
      const {
        result: {
          current: { deleteGraffiti },
        },
      } = renderHook(() => useGraffiti(), {
        wrapper: ProviderWrapper,
      });

      const { _id } = mockGraffiti[0];

      await act(async () => await deleteGraffiti(_id));

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          deleteGraffitiActionCreator(_id)
        )
      );
    });
  });

  describe("When it's method deleteRecipe is invoked and the request fails", () => {
    test("Then it shoould invoke dispatch with openFeedbackActionCreator with and error", async () => {
      const {
        result: {
          current: { deleteGraffiti },
        },
      } = renderHook(() => useGraffiti(), {
        wrapper: ProviderWrapper,
      });
      const { _id } = mockGraffiti[0];

      await act(async () => await deleteGraffiti(_id));

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          openModalActionCreator({
            isError: true,
            message: "Sorry, in this moment you can't delete!",
          })
        )
      );
    });
  });

  describe("When it's method createGraffiti is invoked with a correct graffiti creation", () => {
    test("Then it should invoke dispatch with openModalActionCreator with text 'Wow! Good graffiti.'", async () => {
      const {
        result: {
          current: { createGraffiti },
        },
      } = renderHook(() => useGraffiti(), {
        wrapper: ProviderWrapper,
      });
      const newGraffiti = mockGraffitiCreation;
      const modalPayload: OpenModalActionPayload = {
        isError: false,
        message: "Wow! Good graffiti.",
      };

      await act(async () => await createGraffiti(newGraffiti));

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          openModalActionCreator(modalPayload)
        )
      );
    });
  });

  describe("When it's method createGraffiti is invoked and rejects it", () => {
    test("Then it should invoke dispatch with openModalAction creator with text 'Sorry, impossible create a graffiti now'", async () => {
      const {
        result: {
          current: { createGraffiti },
        },
      } = renderHook(() => useGraffiti(), {
        wrapper: ProviderWrapper,
      });
      const newGraffiti = mockGraffitiCreation;
      const modalPayload: OpenModalActionPayload = {
        isError: true,
        message: "Sorry, impossible create a graffiti now",
      };

      await act(async () => await createGraffiti(newGraffiti));

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          openModalActionCreator(modalPayload)
        )
      );
    });
  });
  describe("When it's method getGraffitiById is invoked with a correct id", () => {
    test("Then it should invoke dispatch with getGraffitiByIdActionCreator and return a Graffiti", async () => {
      const {
        result: {
          current: { getGraffitiByid },
        },
      } = renderHook(() => useGraffiti(), {
        wrapper: ProviderWrapper,
      });

      const idMock = mockGraffiti[0]._id;
      const graffiti = mockGraffiti[0];

      await act(async () => await getGraffitiByid(idMock));

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          getGraffitiByIdActionCreator(graffiti)
        )
      );
    });
  });

  describe("When it's method getGraffitiById is invoked and rejects it", () => {
    test("Then it should invoke dispatch with openModalAction creator with text 'Sorry, impossible show the graffiti now'", async () => {
      const {
        result: {
          current: { getGraffitiByid },
        },
      } = renderHook(() => useGraffiti(), {
        wrapper: ProviderWrapper,
      });
      const idMock = mockGraffiti[0]._id;
      const modalPayload: OpenModalActionPayload = {
        isError: true,
        message: "Sorry, impossible show the graffiti now",
      };

      await act(async () => await getGraffitiByid(idMock));
      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          openModalActionCreator(modalPayload)
        )
      );
    });
  });
});
