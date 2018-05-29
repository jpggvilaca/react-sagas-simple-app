import Loadable from 'react-loadable';
import Loading from './components/Common/Loading';

const Home = Loadable({
  loader: () => import('./components/Home'),
  loading: Loading
});

const MoviePage = Loadable({
  loader: () => import('./components/MoviePage/MoviePage'),
  loading: Loading
});

const Movie = Loadable({
  loader: () => import('./components/Movie/Movie'),
  loading: Loading
});

const Routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home
  },
  {
    name: 'Movies',
    path: '/movies',
    component: MoviePage,
  },
  {
    path: '/movies/:id',
    component: Movie
  }
];

export default Routes;
