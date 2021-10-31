import { Box } from "@chakra-ui/react";

import { LoginForm } from "./components";

const Auth = () => {
  return (
    <Box py={4} px={10} h="full">
      <LoginForm />
    </Box>
  );
};

export default Auth;
