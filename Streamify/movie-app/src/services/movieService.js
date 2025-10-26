const API_KEY = "bf1fca0354587698d7781fde60f31d9b";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query = "", genre = "", rating = "") => {
  let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US`;

  if (genre) url += `&with_genres=${genre}`;
  if (rating) url += `&vote_average.gte=${rating}`;
  if (query) url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;

  const res = await fetch(url);
  const data = await res.json();
  return data.results;
};
