import React,{Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../styles/styles.css';


class App extends Component{
  render(){
    return(
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



        </div>
    )
  }
}

export default App;

