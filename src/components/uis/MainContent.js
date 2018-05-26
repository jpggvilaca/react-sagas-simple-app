// import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Loadable from 'react-loadable';
// import Loading from './Loading';
//
// const Home = Loadable({
//   loader: () => import('./Home'),
//   loading: Loading
// });
//
// const ProductList = Loadable({
//   loader: () => import('./ProductList/ProductList'),
//   loading: Loading
// });
//
// const MainContent  = () => (
//   {routes.map((route, index) => (
//           // You can render a <Route> in as many places
//           // as you want in your app. It will render along
//           // with any other <Route>s that also match the URL.
//           // So, a sidebar or breadcrumbs or anything else
//           // that requires you to render multiple things
//           // in multiple places at the same URL is nothing
//           // more than multiple <Route>s.
//           <Route
//             key={index}
//             path={route.path}
//             exact={route.exact}
//             component={route.sidebar}
//           />
//         ))}
//   <Router>
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route path="/products" component={ProductList} />
//     </div>
//   </Router>
// );
//
// export default MainContent;
