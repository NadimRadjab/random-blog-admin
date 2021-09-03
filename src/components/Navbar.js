import React from "react";
import { LinkOverlay, LinkBox } from "@chakra-ui/react";
import "../styles/navbar.css";
import Logout from "./Logout";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = ({ auth }) => {
  return (
    <div className="navbar">
      <LinkBox>
        <LinkOverlay href="/">
          <h1 className="title">Random Blog</h1>
        </LinkOverlay>
        {auth.isAuthenticated === null ? "" : <Logout />}
      </LinkBox>
    </div>
  );
};
Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, null)(Navbar);
