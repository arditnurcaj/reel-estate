import { GetServerSideProps, NextApiRequest } from "next";

import { AuthLayout } from "src/layouts";
import AuthFeature from "src/features/Auth";

import loadIdToken from "src/utils/loadIdToken";

const Auth = () => <AuthLayout main={<AuthFeature />} />;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const uid = await loadIdToken(req as NextApiRequest);

  if (uid) {
    res.setHeader("location", "/");
    res.end();
  }

  return { props: {} };
};

export default Auth;
