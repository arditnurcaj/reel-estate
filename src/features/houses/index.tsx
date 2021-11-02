import { Box, Flex } from "@chakra-ui/react";

import { IconButton } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

import { Map } from "./components";

const Houses = () => {
  return (
    <>
      <Flex>
        <Box w="50%" maxH="calc(100vh - 64px)" overflowX="scroll">
          HouseList
        </Box>
        <Box w="50%">
          <Map />
        </Box>
      </Flex>
      <IconButton
        colorScheme="blue"
        aria-label="Add House"
        icon={<MdAdd />}
        size="lg"
        fontSize="3xl"
        position="fixed"
        bottom="2.5rem"
        right="1.5rem"
        zIndex={1}
      />
    </>
  );
};

export default Houses;
