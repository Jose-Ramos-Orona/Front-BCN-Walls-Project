import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Graffiti from "./types";

export interface GraffitiState {
  graffitis: Graffiti[];
  graffiti?: Graffiti;
}

export const initialGraffitiState: GraffitiState = {
  graffitis: [],
  graffiti: {} as Graffiti,
};

const graffitisSlice = createSlice({
  name: "graffiti",
  initialState: initialGraffitiState,
  reducers: {
    getAllGraffitis: (
      initialState,
      action: PayloadAction<Graffiti[]>
    ): GraffitiState => ({
      ...initialState,
      graffitis: [...action.payload],
    }),

    deleteGraffiti: (
      initialState,
      action: PayloadAction<string>
    ): GraffitiState => ({
      ...initialState,
      graffitis: [
        ...initialState.graffitis.filter(
          (graffiti) => graffiti._id !== action.payload
        ),
      ],
    }),

    createGraffiti: (initialState, action: PayloadAction<Graffiti>) => ({
      ...initialState,
      graffitis: [...initialState.graffitis, action.payload],
    }),

    getGraffitiById: (initialstate, action: PayloadAction<Graffiti>) => ({
      ...initialstate,
      graffiti: { ...action.payload },
    }),
  },
});

export const graffitiReducer = graffitisSlice.reducer;

export const {
  getAllGraffitis: getAllGraffitisActionCreator,
  deleteGraffiti: deleteGraffitiActionCreator,
  createGraffiti: createGraffitiActionCreator,
  getGraffitiById: getGraffitiByIdActionCreator,
} = graffitisSlice.actions;
