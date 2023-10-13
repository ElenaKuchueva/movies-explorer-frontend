import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import * as api from "../../utils/MainApi.js";
import * as apiMovie from "../../utils/MoviesApi.js";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Profile from "../Profile/Profile.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  const location = useLocation();
  const [currentUser, setCurrentUser] = React.useState({});
  const navigate = useNavigate();
  const [isloggedIn, loggedIn] = React.useState(false);
  const [isShowMovies, setIsShowMovies] = React.useState([]);
  //для поиска всех фильмов
  const [isAllMovies, setIsAllMovies] = React.useState([]);
  const [errorValueForm, setErrorValueForm] = React.useState("");
  const [isPreload, setIsPreload] = React.useState(false);
  const [isNotFoundMovie, setisNotFoundMovie] = React.useState("");
  //для сохранненых фильмов
  const [isSaveFilms, setIsSaveFilms] = React.useState([]);
  const [isSubmitForm, setIsSubmitForm] = React.useState(false);

  React.useEffect(() => {
    const storedMovies = localStorage.getItem("allMovies");

    if (storedMovies) {
      setIsShowMovies(JSON.parse(storedMovies));
    }
  }, []);

  //показать фильмы
  function showCards(query) {
    if (isAllMovies.length === 0) {
      setIsPreload(true);
      apiMovie
        .getInitialMovies()
        .then((res) => {
          setIsAllMovies(res);
          const search = searchMovies(res, query);
          localStorage.setItem("allMovies", JSON.stringify(search));
          localStorage.setItem("query", query);
          setIsShowMovies(search);
          setisNotFoundMovie("");
          if (search.length === 0) {
            setisNotFoundMovie("По вашему запросу ничего не найдено");
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsPreload(false));
    } else {
      const search = searchMovies(isAllMovies, query);
      localStorage.setItem("allMovies", JSON.stringify(search));
      setIsShowMovies(search);
      setisNotFoundMovie("");
      if (search.length === 0) {
        setisNotFoundMovie("По вашему запросу ничего не найдено");
      }
    }
  }

  //поиск по букве в форме поиска фильмов
  function searchMovies(arr, query) {
    return arr.filter((elem) => {
      return (
        elem.nameRU.toLowerCase().includes(query.toLowerCase()) ||
        elem.nameEN.toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  function getSavedMovies() {
    api
      .getCardsMovies()
      .then((data) => {
        setIsSaveFilms(data);
        localStorage.setItem("saveMovies", JSON.stringify(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  React.useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      api
        .getJwt(jwt)
        .then((res) => {
          if (res) {
            loggedIn(true);
            setCurrentUser(res);
            getSavedMovies();
            navigate(location.pathname);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  //регистрация пользователя
  const handleSubmitRegister = (value) => {
    setIsSubmitForm(true);
    const { name, email, password } = value;
    api
      .register(name, email, password)
      .then(() => {
        setIsSubmitForm(false);
        handleSubmitAuthorize({ email, password });
      })
      .catch((err) => {
        setIsSubmitForm(false);
        if (err.status === 409) {
          return setErrorValueForm(
            "Пользователь с таким email уже зарегистирован"
          );
        }
        setErrorValueForm(
          "Переданы некорректные данные при создании пользователя"
        );
      });
  };

  //авторизация пользователя
  const handleSubmitAuthorize = (value) => {
    setIsSubmitForm(true);
    const { email, password } = value;
    api
      .authorize(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        loggedIn(true);
        navigate("/movies", { replace: true });
        setErrorValueForm("");
        setIsSubmitForm(false);
      })
      .catch((err) => {
        setIsSubmitForm(false);
        loggedIn(false);
        if (err.status === 400) {
          return setErrorValueForm("Вы ввели неправильный логин или пароль");
        }
        setErrorValueForm("При авторизации произошла ошибка");
      });
  };

  //отправка изменненых данных из формы редактирования профиля
  function handleSubmitProfile(data) {
    setIsSubmitForm(true);
    api
      .changeValuesUserInfo(data)
      .then((data) => {
        setCurrentUser({
          ...currentUser,
          name: data.name,
          email: data.email,
        });
        setErrorValueForm("Данные успешно обновлены");
        setIsSubmitForm(false);
      })
      .catch((err) => {
        if (err.status === 11000) {
          return setErrorValueForm("Пользователь с таким email уже существует");
        }
        setErrorValueForm("Произошла ошибка при сохранении изменений");
      });
  }

  //Получение данных о пользователе
  React.useEffect(() => {
    if (isloggedIn) {
      api
        .getUserInfo()
        .then((info) => {
          setCurrentUser(info);
        })
        .catch((err) => {
          console.log(`Ошибка ${err}`);
        });
    }
  }, [isloggedIn]);

  function handleLikeClick(movie) {
    api
      .likeMovie({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: "https://api.nomoreparties.co" + movie.image.url,
        trailerLink: movie.trailerLink,
        thumbnail:
          "https://api.nomoreparties.co" + movie.image.formats.thumbnail.url,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
      .then((newfilm) => {
        setIsSaveFilms([newfilm, ...isSaveFilms]);
        localStorage.setItem(
          "saveMovies",
          JSON.stringify([newfilm, ...isSaveFilms])
        );
      })
      .catch((err) => {
        console.log(`Ошибка ${err}`);
      });
  }

  function handleDeleteMovie(movie) {
    api
      .deleteMovie(movie._id)
      .then(() => {
        setIsSaveFilms((state) =>
          state.filter((item) => item._id !== movie._id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //выход
  function exit() {
    localStorage.removeItem("token");
    localStorage.removeItem("allMovies");
    localStorage.removeItem("query");
    localStorage.removeItem("toggle");
    localStorage.removeItem("saveMovies");
    setIsShowMovies([]);
    setIsSaveFilms([]);
    setisMovieShort(false);
    setIsSearchValueInput("");
    navigate("/");
    loggedIn(false);
  }

  return (
    <div className="page">
      <div className="page__content">
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<Main isloggedIn={isloggedIn} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  isloggedIn={isloggedIn}
                  cards={isShowMovies}
                  onSearch={showCards}
                  isNotFoundMovie={isNotFoundMovie}
                  onLike={handleLikeClick}
                  isPreload={isPreload}
                  onDelete={handleDeleteMovie}
                  isSaveFilms={isSaveFilms}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  isloggedIn={isloggedIn}
                  isSaveFilms={isSaveFilms}
                  onDelete={handleDeleteMovie}
                  searchMovies={searchMovies}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  isloggedIn={isloggedIn}
                  onClick={exit}
                  onError={errorValueForm}
                  onSubmit={handleSubmitProfile}
                  onDelete={handleDeleteMovie}
                  isSubmitForm={isSubmitForm}
                  setErrorValueForm={setErrorValueForm}
                  setIsSubmitForm={setIsSubmitForm}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  onAuthorize={handleSubmitAuthorize}
                  onError={errorValueForm}
                  isSubmitForm={isSubmitForm}
                  setErrorValueForm={setErrorValueForm}
                  setIsSubmitForm={setIsSubmitForm}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  onRegister={handleSubmitRegister}
                  onError={errorValueForm}
                  isSubmitForm={isSubmitForm}
                  setErrorValueForm={setErrorValueForm}
                  setIsSubmitForm={setIsSubmitForm}
                />
              }
            />
          </Routes>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
