import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  useLocation,
} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { GlobalStyle } from './globalSyles';
import Earphones from './pages/Earphones';
import Headphones from './pages/Headphones';
import Home from './pages/Home';
import Speakers from './pages/Speakers';
import Product from './pages/Product';
import Cart from './pages/Cart';

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Router>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/headphones'>
              <Headphones />
            </Route>
            <Route path='/speakers'>
              <Speakers />
            </Route>
            <Route path='/earphones'>
              <Earphones />
            </Route>
            <Route path='/checkout'>
              <Cart />
            </Route>
            <Route path='/:id'>
              <Product />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
