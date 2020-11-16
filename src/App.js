import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from "react-router-dom";
import ListPage from './ListPage.js';
import DeckPage from './DeckPage.js';
import AboutUs from './AboutUs.js';
import Login from './Login.js'
import SignUp from './SignUp.js'
import PrivateRoute from './PrivateRoute.js';
import { TOKEN, USERNAME } from './constants';
import Header from './Header.js';
import './App.css';

export default class App extends Component {
  state = { 
    userName: localStorage.getItem(USERNAME) || '',
    token: localStorage.getItem(TOKEN) || ''
  }

  handleTokenUserChange = (token, email) => {
    localStorage.setItem(USERNAME, email);
    localStorage.setItem(TOKEN, token);
    this.setState({ 
      userName: email,
      token: token 
    });
  }

  logout = () => {
    localStorage.setItem(USERNAME, '');
    localStorage.setItem(TOKEN, '');
    this.setState({ 
      userName: '',
      token: '' 
    });
  }

  render() {
    return (
      <div className='mainHeader'>
        <Router>
        <Header      
        userName={ this.state.userName }
        token={this.state.token}
        logout={this.logout}/>
          <Switch>
            <Route exact path='/' render={(routerProps) => <Login 
                handleTokenUserChange={this.handleTokenUserChange} 
                {...routerProps} />} 
              />
            <Route 
            exact path='/signup' 
              render={(routerProps) => <SignUp 
                handleTokenUserChange={this.handleTokenUserChange} 
                {...routerProps}/>} 
              />
            <Route 
            exact path='/list' 
              render={(routerProps) => <ListPage 
                handleTokenUserChange={this.handleTokenUserChange} 
                {...routerProps}/>} 
              />
            <Route 
            exact path='/aboutUS' 
              render={(routerProps) => <AboutUs
                handleTokenUserChange={this.handleTokenUserChange} 
                {...routerProps}/>} 
              />
            <PrivateRoute 
              exact 
              path='/userDeck' 
              token={this.state.token} 
              render={(routerProps) => <DeckPage
              {...routerProps} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}
