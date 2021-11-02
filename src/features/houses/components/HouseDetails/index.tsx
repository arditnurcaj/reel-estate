import React, { FunctionComponent } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

interface HouseDetailsProps {
  editMode: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const HouseDetails: FunctionComponent<HouseDetailsProps> = ({
  editMode = false,
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{editMode ? "Edit" : "New"} House</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}></ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            {editMode ? "Save" : "Create"}
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default HouseDetails;
