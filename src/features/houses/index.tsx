import { Box, Flex } from "@chakra-ui/react";

import { Map } from "./components";

const Houses = () => {
  return (
    <Flex>
      <Box w="50%" maxH="calc(100vh - 64px)" overflowX="scroll">
        HouseList
      </Box>
      <Box w="50%">
        <Map />
      </Box>
    </Flex>
  );
};

export default Houses;
