import React, { useState, useEffect } from "react";
import useFormState from "../hooks/useFormState";
import { useHistory } from "react-router-dom";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  Alert,
  AlertIcon,
  Box,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../actions/authActions";
import { clearErrors } from "../actions/errorActions";

const LoginForm = ({ login, error, isAuthenticated }) => {
  const [username, setUsername] = useFormState("");
  const [password, setPasswrod] = useFormState("");
  const [msg, setMsg] = useState(null);
  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    login(user);
  };

  useEffect(() => {
    if (error.id === "LOGIN_FAIL") {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }
    if (isAuthenticated) {
      history.push("/home");
    }
  }, [isAuthenticated, error, login, history]);
  return (
    <Container mt="20" maxW="lg">
      <Box
        p="6"
        flexDirection="column"
        d="flex"
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
      >
        {msg === null ? null : (
          <Alert status="error">
            <AlertIcon />
            {msg}
          </Alert>
        )}
        <form
          style={{ width: "100%" }}
          className="form"
          onSubmit={handleSubmit}
        >
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input
              onChange={setUsername}
              name="username"
              value={username}
              type="text"
              placeholder="Username"
            />
          </FormControl>
          <FormControl mt="2" id="password">
            <FormLabel>Password</FormLabel>
            <Input
              onChange={setPasswrod}
              name="password"
              value={password}
              placeholder="Password"
              type="password"
            />
          </FormControl>
          <Button mt="5" type="submit" colorScheme="blue">
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
};
LoginForm.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});
export default connect(mapStateToProps, { login, clearErrors })(LoginForm);
