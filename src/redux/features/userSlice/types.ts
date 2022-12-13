export interface UserLoginData {
  username: string;
  id: string;
  token: string;
}

export interface UserState extends UserLoginData {
  isLogged: boolean;
}
