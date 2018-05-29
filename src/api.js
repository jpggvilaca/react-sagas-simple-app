import axios from 'axios';

export const fetchMovies = () => {
  return axios.get('https://ghibliapi.herokuapp.com/films');
}

export const fetchMovieById = id => {
  return axios.get(`https://ghibliapi.herokuapp.com/films/${id}`);
};
