import { GetServerSideProps, NextApiRequest } from "next";

import { MainLayout } from "src/layouts";
import HousesFeature from "src/features/houses";

import loadIdToken from "src/utils/loadIdToken";

const Home = () => {
  return <MainLayout main={<HousesFeature />} />;
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
