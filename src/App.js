import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header/Header';
import Home from './component/MockupOne/Home/Home';
import Cart from './component/MockupTwo/Cart/Cart';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
