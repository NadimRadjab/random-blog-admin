import React from "react";
import { Text } from "@chakra-ui/react";
import "../styles/footer.css";
import { Github } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <Text mt="2" fontSize="xl">
        &copy;Random Blog
      </Text>
      <a href="https://github.com/NadimRadjab">
        <Github />
      </a>
    </footer>
  );
};
export default Footer;
