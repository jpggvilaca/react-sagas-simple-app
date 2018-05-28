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

const Product = Loadable({
  loader: () => import('./components/Product/Product'),
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
  },
  {
    path: '/products/:category',
    component: Product
  }
];

export default Routes;
