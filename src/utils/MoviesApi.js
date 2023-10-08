export const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const handleResponse = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };
  

  //Базовые фильмы
export const getInitialMovies = () => {
  return fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => handleResponse(res));
};

