import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Profile from "../Profile/Profile.js";
import NotFoundPage from "../NotFoundPage/NotFoundPage.js";
import "./App.css";

function App() {
  const [isloggedIn, loggedIn] = React.useState(true);

  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Main isloggedIn={isloggedIn} />} />
          <Route path="/movies" element={<Movies isloggedIn={isloggedIn} />} />
          <Route
            path="/saved-movies"
            element={<SavedMovies isloggedIn={isloggedIn} />}
          />
          <Route
            path="/profile"
            element={<Profile isloggedIn={isloggedIn} />}
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
