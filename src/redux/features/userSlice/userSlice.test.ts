import { mockUserInitialState } from "../../../mocks/mocksFeedbacks/mockInitialState";
import { getRandomUserLoginState } from "../../../mocks/mocksUsers/mockUserLoginState";
import { UserLoginData, UserState } from "./types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a function userSlice", () => {
  describe("When it receives an initial state and an unknown action", () => {
    test("Then it should return a copy of the initial state", () => {
      const unknownAction = {
        type: "user/unknownAction",
      };

      const newUilState = userReducer(mockUserInitialState, unknownAction);

      expect(newUilState).toStrictEqual(mockUserInitialState);
    });
  });

  describe("When it receives an inital state and a loginUser action with a user as payload", () => {
    test("Then it should return a new state with the received user and isLogged property true", () => {
      const userStateMock = getRandomUserLoginState();
      const expectedState: UserState = {
        ...userStateMock,
        isLogged: true,
      };
      const loginActionPayload: UserLoginData = {
        username: userStateMock.username,
        id: userStateMock.id,
        token: userStateMock.token,
      };

      const loginUserAction = loginUserActionCreator(loginActionPayload);
      const newState = userReducer(userStateMock, loginUserAction);

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
