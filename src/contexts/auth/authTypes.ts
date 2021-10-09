import firebase from "firebase/app";

export interface IAuthContext {
  user: UserType;
  logout: () => void;
  authenticated: boolean;
  login: (email: string, password: string) => void;
}

export type UserType = null | firebase.User;