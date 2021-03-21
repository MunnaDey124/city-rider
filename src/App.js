import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext =createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
       <Header></Header>
      <Switch>
          <PrivateRoute path="/destination/:destinationId">
            <Destination />
          </PrivateRoute> 
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </userContext.Provider>
    
  );
}

export default App;
