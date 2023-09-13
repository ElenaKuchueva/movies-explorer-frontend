import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header({ isloggedIn }) {
  const location = useLocation();
  return (
    <>
      {isloggedIn ? (
        <header
          className={`header  ${
            location.pathname !== "/" ? "header_white" : ""
          } open`}
        >
          <Link to="/">
            <img src={logo} className="logo" alt="Логотип." />
          </Link>

          <Navigation />
        </header>
      ) : (
        <header
          className={`header ${
            location.pathname !== "/" ? "header_white" : ""
          }`}
        >
          <Link to="/">
            <img src={logo} className="logo" alt="Логотип." />
          </Link>

          <div className="header__auth">
            <Link to="/signup">
              <p className="header__register">Регистрация</p>
            </Link>
            <Link to="signin">
              <button className="header__button-auth" type="button">
                Войти
              </button>
            </Link>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;
