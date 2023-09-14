import React from "react";
import "./Movies.css";
import Header from "../Header/Header.js";
import SearchForm from "../SearchForm/SearchForm.js";
// import Preloader from "../Preloader/Preloader.js";
import MoviesCardList from "../MoviesCardList/MoviesCardList.js";
import Footer from "../Footer/Footer";

function Movies({ isloggedIn }) {
  return (
    <>
      <Header isloggedIn={isloggedIn} />
      <main className="movies">
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
