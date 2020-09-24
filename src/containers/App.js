import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';
import data from "../data.js"


const App = (props) => {
  // console.log(data.movies)
  // this.state = {
  //   movies: data.movies,
  //   directors: data.directors,
  //   actors: data.actors
  // }
  return (
    <Router>
      <div>
        <NavBar />
        <br>
        </br>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/movies" component = {Movies} movies = {props.movies}/>
        <Route exact path = "/directors" component = {Directors} />
        <Route exact path = "/actors" component = {Actors} />
      </div>
    </Router>
  );
};

export default App
