import React from "react";
import { Button } from "@chakra-ui/react";
import "../styles/navbar.css";
import Logout from "./Logout";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import NewPost from "./NewPost";
import { NavLink } from "react-router-dom";

const Navbar = ({ auth }) => {
  return (
    <div className="navbar">
      <NavLink to="/home">
        <h1 className="title">Random Blog</h1>
      </NavLink>

      {auth.isAuthenticated === null ? (
        ""
      ) : (
        <div className="links">
          <NewPost />
          <Button ml="3" color="white" bg="red">
            <Logout />
          </Button>
        </div>
      )}
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
