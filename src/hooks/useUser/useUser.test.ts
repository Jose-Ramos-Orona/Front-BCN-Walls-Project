import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import mockLoginUser from "../../mocks/mocksUsers/mockLoginUser";
import mockUser from "../../mocks/mocksUsers/mockUser";
import ProviderWrapper from "../../mocks/providerWrapper";
import { OpenModalActionPayload } from "../../redux/features/uiSlice/types";
import { openModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import { store } from "../../redux/store";
import { JwtPayload } from "../../types/types";
import useUser from "./useUser";

beforeEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

jest.mock("jwt-decode", () => {
  return () => ({ id: "PacoId", username: "Paco" } as JwtPayload);
});

describe("Given a useUser custom hook", () => {
  describe("When its method registerUser is invoked with username 'paco', password '1234' and email 'paco@pa.com'", () => {
    test("Then it should invoke dispatch with openModalActionCreator with text 'Welcome Paco!'", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const newUser = mockUser;
      const modalPayload: OpenModalActionPayload = {
        isError: false,
        message: `Welcome ${newUser.username}!`,
      };

      await act(async () => await registerUser(newUser));

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          openModalActionCreator(modalPayload)
        )
      );
    });
  });

  describe("When its method registerUser is invoked with an existent user in the databe", () => {
    test("Then it should invoke dispatch with openModalAction creator with text 'Sorry, user already in the database'", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const newUser = { ...mockUser, username: "PacoIsAlive" };
      const modalPayload: OpenModalActionPayload = {
        isError: true,
        message: "Sorry, user already in the database",
      };

      await act(async () => await registerUser(newUser));

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          openModalActionCreator(modalPayload)
        )
      );
    });
  });

  describe("When its method loginUser is invoked with a correct username 'Paco' and password '1234'", () => {
    test("Then it should invoke dispatch with openModalActionCreator with text 'Welcome back Paco!'", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const user = mockLoginUser;
      const loginActionPayload = {
        username: "Paco",
        id: "PacoId",
        token: "PacoToken",
      };
      const modalPayload: OpenModalActionPayload = {
        isError: false,
        message: `Welcome back ${user.username}!`,
      };

      await act(async () => await loginUser(user));
      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          openModalActionCreator(modalPayload)
        )
      );
      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          loginUserActionCreator(loginActionPayload)
        )
      );
    });
  });

  describe("When its method loginUser is invoked with correct username 'Paco' and incorrect password '2233'", () => {
    test("Then it should invoke dispatch with openModalActionCreator and text 'Sorry, wrong credentials'", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const user = { ...mockLoginUser, password: "2233" };
      const modalPayload: OpenModalActionPayload = {
        isError: true,
        message: "Sorry, wrong credentials",
      };

      await act(async () => await loginUser(user));

      await waitFor(() =>
        expect(dispatchSpy).toHaveBeenCalledWith(
          openModalActionCreator(modalPayload)
        )
      );
    });
  });
});
