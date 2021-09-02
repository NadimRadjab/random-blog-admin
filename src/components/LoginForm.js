import React from "react";
import useFormState from "../hooks/useFormState";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const LoginForm = () => {
  const [username, setUsername] = useFormState("");
  const [password, setPasswrod] = useFormState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <form>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input
            onChange={setUsername}
            name="username"
            value={username}
            type="text"
          />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input
            onChange={setPasswrod}
            name="password"
            value={password}
            type="password"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Button
        </Button>
      </form>
    </Container>
  );
};
export default LoginForm;
