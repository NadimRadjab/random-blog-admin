import React, { Fragment } from "react";
import { logout } from "../actions/authActions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PorpTypes from "prop-types";

function Logout({ logout }) {
  return (
    <Fragment>
      <NavLink to="#" onClick={logout}>
        Logout
      </NavLink>
    </Fragment>
  );
}
Logout.propTypes = {
  logout: PorpTypes.func.isRequired,
};
export default connect(null, { logout })(Logout);
