import mockGraffiti from "../../../mocks/mocksGraffitis/mockGraffiti";
import mockGraffitiDelete from "../../../mocks/mocksGraffitis/mockGraffitiDelete";
import mockGraffitiInitialstate from "../../../mocks/mocksGraffitis/mockGraffitiInitialState";
import mockGraffitiList from "../../../mocks/mocksGraffitis/mockGraffitiList";
import {
  createGraffitiActionCreator,
  deleteGraffitiActionCreator,
  getAllGraffitisActionCreator,
  getGraffitiByIdActionCreator,
  graffitiReducer,
  GraffitiState,
  initialGraffitiState,
} from "./graffitiSlice";
import Graffiti from "./types";

describe("Given a function graffitiSlice", () => {
  describe("When it receives an initial state and an unknown action", () => {
    test("Then it should return a copy of the initial state", () => {
      const unknownAction = {
        type: "graffiti/unknownAction",
      };

      const newGraffitiState = graffitiReducer(
        mockGraffitiInitialstate,
        unknownAction
      );

      expect(newGraffitiState).toStrictEqual(mockGraffitiInitialstate);
    });
  });

  describe("When it is invoked with getAllGraffitis", () => {
    test("Then it should receive a list with two graffitis", () => {
      const action = getAllGraffitisActionCreator(mockGraffiti);
      const expectedState: GraffitiState = {
        graffitis: mockGraffiti,
        graffiti: {} as Graffiti,
      };

      const newState = graffitiReducer(initialGraffitiState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with deleteGraffiti", () => {
    test("Then it should recieves a list of graffitis without graffiti with id '6385f92759fac43576020b2b'", () => {
      const mockId = "6385f92759fac43576020b2b";
      const action = deleteGraffitiActionCreator(mockId);
      const expectedState = mockGraffitiDelete;

      const newState = graffitiReducer(mockGraffitiList, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it is invoked with createGraffiti", () => {
    test("Then it should recieves list of graffitis with a new graffiti created", () => {
      const newGraffiti = {
        _id: "6385f92759fac43576020b2b",
        title: "The Boy",
        image: "https://unsplash.com/es/fotos/C269IzJhREc",
        author: "N@omi",
        address: "C/Entença nº123",
        theme: "Characters",
        description: "A boy, maybe based in the author. I like this graffiti",
      };
      const action = createGraffitiActionCreator(newGraffiti);
      const expectedNewGraffitiList = {
        ...initialGraffitiState,
        graffitis: [...initialGraffitiState.graffitis, newGraffiti],
      };

      const newState = graffitiReducer(initialGraffitiState, action);

      expect(newState).toStrictEqual(expectedNewGraffitiList);
    });
  });

  describe("When it is invoked with getGraffitiById", () => {
    test("Then it should recieves a Graffiti", () => {
      const action = getGraffitiByIdActionCreator(mockGraffiti[0]);
      const expectedState = {
        ...initialGraffitiState,
        graffitis: [],
        graffiti: mockGraffiti[0],
      };

      const newState = graffitiReducer(initialGraffitiState, action);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
