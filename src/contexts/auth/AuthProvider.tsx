import { useEffect, useState, FunctionComponent } from "react";
import { useToast } from "@chakra-ui/react";
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
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const logout = async () => {
    try {
      await firebase.auth().signOut();
      router.push("/auth");
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (email: string, password: string) => {
    setIsAuthenticating(true);

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setIsAuthenticating(false);
      router.push("/");
    } catch (error) {
      setIsAuthenticating(false);
      toast({
        title: "Error",
        description:
          "There was an error during authentication, please try again or check the credentials",
        status: "error",
        duration: 5000,
        isClosable: true,
        variant: "solid",
        position: "top",
      });
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
      value={{ user, logout, login, authenticated: !!user, isAuthenticating }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
