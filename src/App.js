import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    NavLink
} from 'react-router-dom';
import SearchPage from './SearchPage.js';
import Login from './Login.js'
import Signup from './Signup.js'
import FavsPage from './FavsPage.js';


import './App.css'

const TOKEN_KEY = 'TOKEN'
export default class App extends Component {

state = {
  token: localStorage.getItem(TOKEN_KEY) || ''
}

  tokenToLocalStorage = token => {
    localStorage.setItem(TOKEN_KEY, token)
    this.setState({ token: token })
  }

  logout = () => {
    localStorage.clear()
    this.setState({ token: ''})
    // this.history.push('/')
  }

    render() {
        return (
            <div>
                <Router>
                <header>
                        <h2>Fav PDX Restaurants</h2>
                        <nav>
                        <NavLink exact activeClassName='active-nav' to='/'>Home</NavLink>
                        <NavLink exact activeClassName='active-nav' to='/login'>Login</NavLink>
                        <NavLink exact activeClassName='active-nav' to='/signup'>Signup</NavLink>
                        <NavLink exact activeClassName='active-nav' to='/favs'>Favs</NavLink>
                        {this.state.token && <span className='logout' onClick={this.logout}>Logout</span>}
                        </nav>
                    </header>
                    <Switch>
                        <Route 
                            path="/search" 
                            exact
                            render={(routerProps) => <SearchPage 
                                token = {this.state.token}
                                {...routerProps} />} 
                        />
                        <Route 
                            path="/favs" 
                            exact
                            render={(routerProps) => <FavsPage {...routerProps} />} 
                        />
                        <Route 
                            path="/signup" 
                            exact
                            render={(routerProps) => <Signup 
                              tokenToLocalStorage = {this.tokenToLocalStorage}
                              {...routerProps} />} 
                        />
                         <Route 
                            path="/login" 
                            exact
                            render={(routerProps) => <Login
                            tokenToLocalStorage = {this.tokenToLocalStorage} 
                            {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}