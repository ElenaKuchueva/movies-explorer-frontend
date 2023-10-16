import React from "react";
import { Link } from "react-router-dom";
import "./Form.css";
import logo from "../../images/logo.svg";

function Form({
  children,
  title,
  buttonText,
  question,
  linkText,
  link,
  onSubmit,
  onError,
  disabled,
  isSubmitForm
}) {
  return (
    <div className="form__container">
      <Link to="/">
        <img src={logo} className="logo" alt="Логотип." />
      </Link>

      <h2 className="form__title">{title}</h2>
      <form className="form" id="form" onSubmit={onSubmit}>
        <div className="form__fields">{children}</div>
        <div className="form__box">
          <span className="form__error">{onError}</span>
          <button
            className={
              disabled || isSubmitForm ? "form__submit form__submit_inactive" : "form__submit"
            }
            type="submit"
            aria-label="Сохранить изменения."
            disabled={disabled || isSubmitForm }
          >
            {buttonText}
          </button>
        </div>
      </form>
      <p className="form__question">
        {question}
        <Link to={link} className="form__link">
          <span>&nbsp;{linkText}</span>
        </Link>
      </p>
    </div>
  );
}

export default Form;
