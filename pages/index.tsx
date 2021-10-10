import { GetServerSideProps, NextApiRequest } from "next";
import { MainLayout } from "src/layouts";

import loadIdToken from "src/utils/loadIdToken";

const Home = () => {
  return <MainLayout main={<div>Home</div>} />;
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const uid = await loadIdToken(req as NextApiRequest);

  if (!uid) {
    res.setHeader("location", "/auth");
    res.statusCode = 302;
    res.end();
  }

  return { props: {} };
};

export default Home;
