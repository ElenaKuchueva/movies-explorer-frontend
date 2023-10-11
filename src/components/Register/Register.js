import React from "react";
import Form from "../Form/Form.js";
import "../Form/Form.css";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";
import {
  EMAIL_VALUE_VALIDATION,
  NAME_VALUE_VALIDATION,
} from "../../constants/constants";

function Register({ onRegister, onError, isSubmitForm, setErrorValueForm }) {
  const { values, errors, handleChange, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
    setErrorValueForm("");
  };

  useEffect(() => {
    setErrorValueForm("");
  }, []);

  return (
    <section className="register">
      <Form
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        question="Уже зарегистрированы?"
        link="/signin"
        linkText=" Войти"
        onError={onError}
        disabled={!isValid}
        onSubmit={handleSubmit}
        isSubmitForm={isSubmitForm}
      >
        <div className="form__field">
          <label className="form__label">Имя</label>
          <input
            className="form__input"
            type="text"
            name="name"
            id="name-input"
            value={values.name || ""}
            tabIndex="1"
            minLength="2"
            maxLength="200"
            required
            onChange={handleChange}
            pattern={NAME_VALUE_VALIDATION}
          />
          <span className="form__input-error-message">{errors.name}</span>
        </div>

        <div className="form__field">
          <label className="form__label">E-mail</label>
          <input
            className="form__input"
            type="email"
            name="email"
            id="email-input"
            value={values.email || ""}
            tabIndex="2"
            minLength="2"
            maxLength="40"
            required
            onChange={handleChange}
            pattern={EMAIL_VALUE_VALIDATION}
          />
          <span className="form__input-error-message">{errors.email}</span>
        </div>

        <div className="form__field">
          <label className="form__label">Пароль</label>
          <input
            className="form__input"
            type="password"
            name="password"
            id="password-input"
            value={values.password || ""}
            tabIndex="3"
            minLength="2"
            maxLength="200"
            required
            onChange={handleChange}
          />
          <span className="form__input-error-message">{errors.password}</span>
        </div>
      </Form>
    </section>
  );
}

export default Register;
