import { FunctionComponent, ReactNode } from "react";

import { Box, Flex, Image } from "@chakra-ui/react";

interface IProps {
  main: ReactNode;
}

const AuthLayout: FunctionComponent<IProps> = ({ main }) => {
  return (
    <Flex color="white" h="100vh" overflowY="hidden">
      <Box display={{ base: "none", md: "block" }} flex="1">
        <Image
          src="/splash-wallpaper.jpg"
          alt="Splash"
          objectPosition="cover"
          objectFit="cover"
          w="full"
          h="full"
        />
      </Box>
      <Box flex="1">{main}</Box>
    </Flex>
  );
};

export default AuthLayout;
