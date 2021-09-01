import React from "react";
import { LinkOverlay, LinkBox } from "@chakra-ui/react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <navbar className="navbar">
      <LinkBox>
        <LinkOverlay href="/">
          <h1 className="title">Random Blog</h1>
        </LinkOverlay>
      </LinkBox>
    </navbar>
  );
};
export default Navbar;
