import { createContext } from "react";

import { IAuthContext } from "./authTypes";

const AuthContext = createContext<IAuthContext>({
  user: null,
  logout: () => null,
  authenticated: false,
});

export default AuthContext;