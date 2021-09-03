import React from "react";
import { Text } from "@chakra-ui/react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Text mt="2" fontSize="xl">
        &copy;Random Blog
      </Text>
    </footer>
  );
};
export default Footer;
