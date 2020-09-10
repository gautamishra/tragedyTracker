import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css';
import CardContainer from './../Cards/Card_Container';
import HomeComponent from './../Home/home';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Link
} from "react-router-dom";


export default class NavBar extends React.Component{

  getTabs(){
    const tabs = ['Home', 'Tragedy', 'About']
  
    const lists = tabs.map((tab) => {
      return (
        <li key={tab} className="nav-links">
          <Link to={`/${tab}`}>{tab}</Link>
        </li>
      )
    })
    return lists;
  }

  toggle() {
   const toggle = document.getElementById('js-menu');
   toggle.classList.toggle('active');
  }

  render() {
     
      return (
    <Router>
      <nav className="navbar">
  
      <span className="navbar-toggle" id="js-navbar-toggle" onClick={this.toggle.bind(this)}>
      <FontAwesomeIcon icon={faBars} />
      </span>
  
      <span className="logo">
        TragedyTracker
      </span>

        <ul className="main-nav" id="js-menu">
          {this.getTabs()}
        </ul>

      </nav>
        
      <Switch>
                <Route exact path="/" component={HomeComponent}/>
                <Route path="/Home"  component={HomeComponent} />
                
                <Route path="/Tragedy/:id"  component={CardContainer} />
                <Route path="/Tragedy"  component={CardContainer} />

      </Switch>

      </Router>

      );

  } 
}