import React from "react";
import Form from "../Form/Form.js";
import "../Form/Form.css";

function Login() {
  return (
    <section className="login">
      <Form
        title="Рады видеть!"
        buttonText="Войти"
        question="Ещё не зарегистрированы?"
        link="/signup"
        linkText="Регистрация"
      >
        <div className="form__field">
          <label className="form__label">E-mail</label>
          <input
            className="form__input"
            type="email"
            name="email"
            id="email-input"
            placeholder="pochta@yandex.ru"
            minLength="2"
            maxLength="40"
            required
            //  value={formValue.email}
            tabIndex="2"
          />
          <span className="form__input-error-message">
            Что-то пошло не так...
          </span>
        </div>

        <div className="form__field">
          <label className="form__label">Пароль</label>
          <input
            className="form__input"
            type="password"
            name="password"
            id="password-input"
            //  value={formValue.password}
            minLength="2"
            maxLength="200"
            required
            tabIndex="3"
          />
          <span className="form__input-error-message">
            Что-то пошло не так...
          </span>
        </div>
      </Form>
    </section>
  );
}

export default Login;
