import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header.js';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { EMAIL_VALUE_VALIDATION, NAME_VALUE_VALIDATION } from '../../constants/constants';

function Profile({ isloggedIn, onClick, onSubmit, onError, isSubmitForm, setErrorValueForm, setIsSubmitForm }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, setValues, errors, handleChange, isValid } = useFormWithValidation({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [isSubmitFormProfile, setIsSubmitFormProfile] = React.useState(true);
  const validation = currentUser.name === values.name && currentUser.email === values.email;

  useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
    if (!onError) {
      editProfileForm();
    }
  }

  function handleChangeInput(e) {
    handleChange(e);
    setIsSubmitForm(false);
  }

  function editProfileForm() {
    setIsSubmitFormProfile((click) => !click);
    setErrorValueForm("");
  }

  return (
    <>
      <Header isloggedIn={!isloggedIn} />

      <main className="profile">
        <div className="profile__block">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <form id="form" className="profile__form" onSubmit={handleSubmit} noValidate>
            <div className="profile__fields">
              <div className="profile__field">
                <label className="profile__label">Имя</label>
                <input
                  className="profile__input"
                  name="name"
                  minLength="2"
                  maxLength="40"
                  value={values.name || ''}
                  required
                  onChange={handleChangeInput}
                  disabled={isSubmitFormProfile}
                  pattern={NAME_VALUE_VALIDATION}></input>
              </div>
              <span className="profile__span-error">{errors.name}</span>
              <div className="profile__field">
                <label className="profile__label">E-mail</label>
                <input
                  className="profile__input"
                  name="email"
                  minLength="2"
                  maxLength="40"
                  value={values.email || ''}
                  required
                  onChange={handleChangeInput}
                  disabled={isSubmitFormProfile}
                  pattern={EMAIL_VALUE_VALIDATION}></input>
              </div>
              <span className="profile__span-error">{errors.email}</span>
            </div>

            {isSubmitFormProfile ? (
              <div className="profile__conteiner">
                <span className="profile__error-message">{onError}</span>
                <button className="profile__button-edit" type="button" onClick={editProfileForm}>
                  Редактировать
                </button>
                <Link to="/" className="profile__link-exit" onClick={onClick}>
                  Выйти из аккаунта
                </Link>
              </div>
            ) : (
              <div className="profile__button">
                <span className="profile__error-message">{onError}</span>
                <button
                  className={
                    !isValid || validation || isSubmitForm ? 'profile__button-save profile__button-save_disabled' : 'profile__button-save'
                  }
                  disabled={!isValid || validation || isSubmitForm}
                  type="submit">
                  Сохранить
                </button>
              </div>
            )}
          </form>
        </div>
      </main>
    </>
  );
}

export default Profile;
