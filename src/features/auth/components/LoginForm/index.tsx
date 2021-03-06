import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";

import authContext from "src/contexts/auth/authContext";

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const { login, isAuthenticating } = useContext(authContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: FormData) => {
    login(data.email, data.password);
  };

  return (
    <Flex alignItems="center" textColor="white" h="full">
      <Box as="form" onSubmit={handleSubmit(onSubmit)} w="full">
        <Box mb={5} maxW="md" mx="auto">
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              placeholder="Email"
              size="lg"
              {...register("email", {
                required: "Field is required",
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
        </Box>

        <Box mb={8} maxW="md" mx="auto">
          <FormControl isInvalid={!!errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              size="lg"
              {...register("password", {
                required: "Field is required",
                minLength: { value: 8, message: "Minimum length should be 8" },
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
        </Box>

        <Box w="full" mx="auto" maxW="md">
          <Button
            isLoading={isAuthenticating}
            loadingText="Logging In"
            size="lg"
            w="full"
            type="submit"
            colorScheme="blue"
            disabled={isAuthenticating}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginForm;
