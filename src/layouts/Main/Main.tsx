import { FunctionComponent, ReactNode } from "react";
import NextLink from "next/link";

import { Box, Image, Flex, Button, Link } from "@chakra-ui/react";

import useAuth from "src/hooks/useAuth";

interface IProps {
  main: ReactNode;
}

const MainLayout: FunctionComponent<IProps> = ({ main }) => {
  const { logout } = useAuth();

  return (
    <Box bg="gray.900" mx="auto" textColor="white">
      <Box as="nav" bg="gray.800" h="64px">
        <Flex px={6} alignItems="center" justify="space-between" h={16}>
          <Link as={NextLink} href="/">
            <a>
              <Image
                src="/home-color.svg"
                alt="home house"
                display="inline"
                w={6}
              />
            </a>
          </Link>
          <Link as={NextLink} href="/">
            <a>Add House</a>
          </Link>
          <Button variant="unstyled" onClick={logout}>
            Logout
          </Button>
        </Flex>
      </Box>
      <Box as="main" h="calc(100vh - 64px)">
        {main}
      </Box>
    </Box>
  );
};

export default MainLayout;
