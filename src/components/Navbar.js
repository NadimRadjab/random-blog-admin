import React from "react";
import { LinkOverlay, LinkBox } from "@chakra-ui/react";
import "../styles/navbar.css";
import Logout from "./Logout";

const Navbar = () => {
  return (
    <div className="navbar">
      <LinkBox>
        <LinkOverlay href="/">
          <h1 className="title">Random Blog</h1>
        </LinkOverlay>
        <Logout />
      </LinkBox>
    </div>
  );
};
export default Navbar;
