import { GetServerSideProps, NextApiRequest } from "next";

import { AuthLayout } from "src/layouts/";
import loadIdToken from "src/utils/loadIdToken";

import { LoginForm } from "./components";

const Auth = () => {
  return (
    <AuthLayout
      main={
        <div className="py-4 px-10 h-full">
          <LoginForm />
        </div>
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
