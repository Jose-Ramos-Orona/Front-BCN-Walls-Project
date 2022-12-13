export interface UserData {
  username: string;
  password: string;
}

export interface UserRegisterData extends UserData {
  email: string;
}

export interface JwtPayload {
  id: string;
  username: string;
}
