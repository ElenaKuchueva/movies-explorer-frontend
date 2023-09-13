import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header.js";

function Profile({ isloggedIn }) {
  const [isSubmitFormProfile, setIsSubmitFormProfile] = React.useState(true);

  function editProfileForm() {
    setIsSubmitFormProfile((click) => !click);
  }

  return (
    <>
      <Header isloggedIn={isloggedIn} />

      <div className="profile">
        <div className="profile__block">
          <h1 className="profile__title">Привет, Виталий!</h1>
          <form className="profile__form">
            <div className="profile__fields">
              <div className="profile__field">
                <label className="profile__label">Имя</label>
                <input
                  className="profile__input"
                  placeholder="Виталий"
                  minLength="2"
                  maxLength="40"
                  required
                ></input>
              </div>
              <div className="profile__field">
                <label className="profile__label">E-mail</label>
                <input
                  className="profile__input"
                  placeholder="pochta@yandex.ru"
                  minLength="2"
                  maxLength="40"
                  required
                ></input>
              </div>
            </div>

            {isSubmitFormProfile ? (
              <div className="profile__conteiner">
                <button
                  className="profile__button-edit"
                  type="button"
                  onClick={editProfileForm}
                >
                  Редактировать
                </button>
                <Link to="/" className="profile__link-exit">
                  Выйти из аккаунта
                </Link>
              </div>
            ) : (
              <div className="profile__button">
                <span className="profile__error-message">
                  При обновлении профиля произошла ошибка.
                </span>
                <button
                  className="profile__button-save profile__button-save_disabled"
                  type="submit"
                  onClick={editProfileForm}
                >
                  Сохранить
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
