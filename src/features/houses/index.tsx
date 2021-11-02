import { Box, Flex } from "@chakra-ui/react";

import { IconButton, useDisclosure } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";

import { Map, HouseDetails } from "./components";

const Houses = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        onClick={onOpen}
      />
      <HouseDetails isOpen={isOpen} onClose={onClose} editMode={false} />
    </>
  );
};

export default Houses;
