import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./AccountButton.css";
import account from "../../images/account.svg";

function AccountButton() {
  const location = useLocation();
  return (
    <div>
      <Link to="/profile" className="button-account">
        <button
          className={`header__button-account ${
            location.pathname === "/" ? "header__button-account_green" : ""
          }`}
          type="button"
        >
          Аккаунт
          <img src={account} className="account-icon" alt="Логотип аккаунта." />
        </button>
      </Link>
    </div>
  );
}

export default AccountButton;
