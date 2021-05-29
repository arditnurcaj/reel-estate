import { useContext } from "react";

import UserContext from "src/contexts/auth/authContext";

const useAuth = () => {
  return useContext(UserContext);
}

export default useAuth;