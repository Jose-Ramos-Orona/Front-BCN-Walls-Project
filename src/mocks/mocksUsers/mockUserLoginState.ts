import { Factory } from "fishery";
import { faker } from "@faker-js/faker";
import { UserState } from "../../redux/features/userSlice/types";

const mockUserLoginState = Factory.define<UserState>(() => ({
  username: faker.internet.userName(),
  id: faker.random.alphaNumeric(24),
  token: faker.random.alphaNumeric(10),
  isLogged: false,
}));

export const getRandomUserLoginState = () => mockUserLoginState.build();
