import { GetServerSideProps, NextApiRequest } from "next";

import { AuthLayout } from "src/layouts/";
import { Box } from "@chakra-ui/react";
import { LoginForm } from "./components";

import loadIdToken from "src/utils/loadIdToken";

const Auth = () => {
  return (
    <AuthLayout
      main={
        <Box py={4} px={10} h="full">
          <LoginForm />
        </Box>
      }
    />
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const uid = await loadIdToken(req as NextApiRequest);

  if (uid) {
    res.setHeader("location", "/");
    res.end();
  }

  return { props: {} };
};

export default Auth;
