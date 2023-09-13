import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";
import account from "../../images/account.svg";

function Navigation() {
  const location = useLocation();
  const [isActivePopup, setisActivePopup] = React.useState(false);
  const [isOpenBurger, setIsOpenBurger] = React.useState(false);

  function changeBurgerState() {
    setIsOpenBurger(!isOpenBurger);
    setisActivePopup(!isActivePopup);
  }

  return (
    <div className={`navigation ${isOpenBurger ? "navigation_open" : ""}`}>
      <div className={`${isOpenBurger ? "navigation__overlay" : ""}`}></div>
      <button
        onClick={changeBurgerState}
        className={`navigation__burger-btn ${isActivePopup ? "is-active" : ""}`}
      >
        <span
          className={`navigation__span ${isActivePopup ? "is-active" : ""}  ${
            location.pathname === "/" ? "navigation__span_white" : ""
          }`}
        ></span>
        <span
          className={`navigation__span ${isActivePopup ? "is-active" : ""} ${
            location.pathname === "/" ? "navigation__span_white" : ""
          }`}
        ></span>
        <span
          className={`navigation__span ${isActivePopup ? "is-active" : ""} ${
            location.pathname === "/" ? "navigation__span_white" : ""
          }`}
        ></span>
      </button>
      <div className="navigation__block">
        <div className="navigation__links">
          <NavLink to="/" className="navigation__link navigation__link_none">
            Главная
          </NavLink>

          <NavLink
            to="/movies"
            className={`navigation__link ${
              location.pathname !== "/" ? "navigation__link_dark" : ""
            }`}
          >
            Фильмы
          </NavLink>

          <NavLink
            to="/saved-movies"
            className={`navigation__link ${
              location.pathname !== "/" ? "navigation__link_dark" : ""
            }`}
          >
            Сохранённые фильмы
          </NavLink>
        </div>

        <Link to="/profile" className="navigation__button">
          <button
            className={`navigation__button-account ${
              location.pathname === "/"
                ? "navigation__button-account_green"
                : ""
            }`}
            type="button"
          >
            Аккаунт
            <img
              src={account}
              className="navigation__account-icon"
              alt="Логотип аккаунта."
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
