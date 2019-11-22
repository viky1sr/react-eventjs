import React,{Component,Fragment} from 'react';
import '../App.css';
import '../styles/styles.css';
import Home from './Home/Home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

class App extends Component{
  render(){
    return(
        <Router>
        <div className="wr">
          <div className="header">
            <div className="nav-bar">
              <div className="logo">
                <img className="img-f" src={require('../logo/babastudio-logo.png')}/>
              </div>
              <div className="menu">
                <ul>
                  <li><a>Home</a></li>
                  <li><a>Blogs</a></li>
                  <li><a>Galery</a></li>
                  <li><a>Contat</a></li>
                </ul>
              </div>
            </div>
          </div>
      <Fragment>
        <Route path="/" exact component={Home}/>
      </Fragment>

        </div>
        </Router>
    )
  }
}

export default App;

