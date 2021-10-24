import { GetServerSideProps, NextApiRequest } from "next";

import { Box, Flex } from "@chakra-ui/react";
import { MainLayout } from "src/layouts";
import { Map } from "src/components";

import loadIdToken from "src/utils/loadIdToken";

const Home = () => {
  return (
    <MainLayout
      main={
        <Flex>
          <Box w="50%" maxH="calc(100vh - 64px)" overflowX="scroll">
            HouseList
          </Box>
          <Box w="50%">
            <Map />
          </Box>
        </Flex>
      }
    />
  );
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
