import styles from "../AuthNav/AuthNav.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

const AuthNav = () => (
  <div>
    <NavLink
      to={routes.register}
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Register
    </NavLink>

    <NavLink
      to={routes.login}
      exact
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
