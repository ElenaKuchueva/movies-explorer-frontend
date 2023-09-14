import React from "react";
import Form from "../Form/Form.js";
import "../Form/Form.css";

function Register() {
  return (
    <section className="register">
      <Form
        title="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        question="Уже зарегистрированы?"
        link="/signin"
        linkText=" Войти"
      >
        <div className="form__field">
          <label className="form__label">Имя</label>
          <input
            className="form__input"
            type="text"
            name="name"
            id="name-input"
            //  value={formValue.password}
            tabIndex="1"
            placeholder="Виталий"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="form__input-error-message">
            Что-то пошло не так...
          </span>
        </div>

        <div className="form__field">
          <label className="form__label">E-mail</label>
          <input
            className="form__input"
            type="email"
            name="email"
            id="email-input"
            //  value={formValue.email}
            tabIndex="2"
            placeholder="pochta@yandex.ru"
            minLength="2"
            maxLength="40"
            required
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
            tabIndex="3"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="form__input-error-message">
            Что-то пошло не так...
          </span>
        </div>
      </Form>
    </section>
  );
}

export default Register;
