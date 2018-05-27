import axios from 'axios';

export const fetchRandomProduct = () => {
  return axios.get('https://api.chucknorris.io/jokes/random');
}

export const fetchProductCategories = () => {
  return axios.get('https://api.chucknorris.io/jokes/categories');
}

export const fetchProductByCategory = category => {
  return axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
};
