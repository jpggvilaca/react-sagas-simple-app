import Loadable from 'react-loadable';
import Loading from './components/Common/Loading';

const Home = Loadable({
  loader: () => import('./components/Home'),
  loading: Loading
});

const ProductPage = Loadable({
  loader: () => import('./components/ProductPage/ProductPage'),
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
    name: 'Products',
    path: '/products',
    component: ProductPage,
  }
];

export default Routes;
