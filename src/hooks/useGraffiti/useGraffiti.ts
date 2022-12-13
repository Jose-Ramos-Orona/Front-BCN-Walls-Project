import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteGraffitiActionCreator,
  getAllGraffitisActionCreator,
  getGraffitiByIdActionCreator,
} from "../../redux/features/graffitiSlice/graffitiSlice";
import Graffiti from "../../redux/features/graffitiSlice/types";
import {
  closeLoadingActionCreator,
  openModalActionCreator,
  triggerLoadingActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../../redux/hooks";

const useGraffiti = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_URLAPI;
  const navigate = useNavigate();

  const loadAllGraffitis = useCallback(async () => {
    dispatch(triggerLoadingActionCreator());
    try {
      const response = await axios.get(`${apiUrl}/graffitis/list`);

      const apiResponse = response.data;

      const { graffitis } = apiResponse;

      dispatch(closeLoadingActionCreator());
      dispatch(getAllGraffitisActionCreator(graffitis));
    } catch (error: unknown) {
      dispatch(closeLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          message: "Sorry, this wall hasn't graffitis!",
        })
      );
    }
  }, [dispatch, apiUrl]);

  const deleteGraffiti = async (idGraffiti: string) => {
    dispatch(triggerLoadingActionCreator());
    try {
      await axios.delete(`${apiUrl}/graffitis/delete/${idGraffiti}`);
      dispatch(closeLoadingActionCreator());
      dispatch(deleteGraffitiActionCreator(idGraffiti));
      dispatch(
        openModalActionCreator({
          isError: false,
          message: "Say goodbye to graffiti!",
        })
      );
    } catch (error: unknown) {
      dispatch(closeLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          message: "Sorry, in this moment you can't delete!",
        })
      );
    }
  };
  const createGraffiti = async (graffitiData: Graffiti) => {
    dispatch(triggerLoadingActionCreator());
    try {
      await axios.post(`${apiUrl}/graffitis/create`, graffitiData);
      dispatch(closeLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: false,
          message: "Wow! Good graffiti.",
        })
      );
      navigate("/");
    } catch (error: unknown) {
      dispatch(closeLoadingActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          message: "Sorry, impossible create a graffiti now",
        })
      );
    }
  };

  const getGraffitiByid = useCallback(
    async (idGraffiti: string) => {
      dispatch(triggerLoadingActionCreator());
      try {
        const response = await axios.get(
          `${apiUrl}/graffitis/detail/${idGraffiti}`
        );

        const apiResponse = response.data;

        const { graffiti } = apiResponse;

        dispatch(closeLoadingActionCreator());
        dispatch(getGraffitiByIdActionCreator(graffiti));
      } catch (error: unknown) {
        dispatch(closeLoadingActionCreator());
        dispatch(
          openModalActionCreator({
            isError: true,
            message: "Sorry, impossible show the graffiti now",
          })
        );
      }
    },
    [dispatch, apiUrl]
  );

  return { loadAllGraffitis, deleteGraffiti, createGraffiti, getGraffitiByid };
};

export default useGraffiti;
