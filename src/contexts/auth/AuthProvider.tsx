import { useEffect, useState, FunctionComponent } from "react";

import { useRouter } from "next/router";

import firebase from "firebase/app";
import "firebase/auth";
import initFirebase from "src/firebase/initFirebase";

import { UserType } from "./authTypes";

import { removeTokenCookie, setTokenCookie } from "src/utils/tokenCookies";

import AuthContext from "./authContext";

initFirebase();

const AuthProvider: FunctionComponent = ({ children }) => {
  const [user, setUser] = useState<UserType>(null);
  const router = useRouter();

  const logout = async () => {
    try {
      await firebase.auth().signOut();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const cancelAuthListener = firebase
      .auth()
      .onIdTokenChanged(async (user) => {
        if (user) {
          const token = await user.getIdToken();
          setTokenCookie(token);
          setUser(user);
        } else {
          removeTokenCookie();
          setUser(null);
        }
      });

    return () => {
      cancelAuthListener();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, logout, login, authenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
