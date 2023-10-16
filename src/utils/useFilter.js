import { useMemo } from "react";

export function useFilter(arr, shortMuvie) {
  const filterShortMovies = useMemo(() => {
    if (shortMuvie) {
      return arr.filter((movie) => movie.duration < 40);
    }
    return arr;
  }, [arr, shortMuvie]);
  return filterShortMovies;
}

export function filterMoviesByDuration (movies) {
  return movies.filter(movie => movie.duration < 40);
}