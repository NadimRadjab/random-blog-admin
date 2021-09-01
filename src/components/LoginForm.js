import React from "react";
import useFormState from "../hooks/useFormState";
import { Container, FormControl, FormLabel, Button } from "@chakra-ui/layout";

const LoginForm = () => {
  return (
    <Container>
      <form>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input name="username" value={username} type="text" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Email address</FormLabel>
          <Input name="password" value={password} type="password" />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Button
        </Button>
      </form>
    </Container>
  );
};
export default LoginForm;
