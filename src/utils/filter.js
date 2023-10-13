//поиск по букве в форме поиска фильмов
export function searchMovies(arr, query, short) {
  const filteredMovies = arr.filter((elem) => {
    return elem.nameRU.toLowerCase().includes(query.toLowerCase()) || elem.nameEN.toLowerCase().includes(query.toLowerCase());
  });

  if (short) {
    return filteredMovies.filter((movie) => movie.duration <= 40);
  }

  return filteredMovies;
}
