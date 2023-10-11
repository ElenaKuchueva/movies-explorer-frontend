import React from "react";
import Form from "../Form/Form.js";
import "../Form/Form.css";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";
import { EMAIL_VALUE_VALIDATION } from "../../constants/constants";

function Login({ onAuthorize, onError, isSubmitForm, setErrorValueForm }) {
  const { values, errors, handleChange, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuthorize(values);
    setErrorValueForm("");
  };

  useEffect(() => {
    setErrorValueForm("");
  }, []);

  return (
    <section className="login">
      <Form
        title="Рады видеть!"
        buttonText="Войти"
        question="Ещё не зарегистрированы?"
        link="/signup"
        linkText="Регистрация"
        onSubmit={handleSubmit}
        onError={onError}
        disabled={!isValid}
        isSubmitForm={isSubmitForm}
      >
        <div className="form__field">
          <label className="form__label">E-mail</label>
          <input
            className="form__input"
            type="email"
            name="email"
            id="email-input"
            minLength="2"
            maxLength="40"
            required
            value={values.email || ""}
            tabIndex="2"
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
            minLength="2"
            maxLength="200"
            required
            tabIndex="3"
            onChange={handleChange}
          />
          <span className="form__input-error-message">{errors.password}</span>
        </div>
      </Form>
    </section>
  );
}

export default Login;
