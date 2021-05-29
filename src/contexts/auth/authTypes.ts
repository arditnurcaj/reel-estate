import firebase from "firebase/app";

export interface IAuthContext {
  user: UserType;
  logout: () => void;
  authenticated: boolean;
}

export type UserType = null | firebase.User;