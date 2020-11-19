import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles/header.css';
import logo from './images/card-coven.png'
import { Route } from 'react-router-dom';




export default class Header extends Component {

    state = {

    }
handleClick = async () => {
    
}

    render() {
        return (
            <div className='header'>


                <div className="logo-div">
                    <img className='img-logo' src={logo} alt='logo'></img>
                </div>
               <Route path='/list'>
                    <div className='search-bar'>
                        <input placeholder='Search' className="inputSearch"></input>
                        <button onClick={this.handleClick}>Search</button>
                    </div>
                </Route>
                
                <div className='header-links'>   
                        <div className='space-between'>                         
                            <Link to='/userDeck'>My Deck</Link>
                        </div>
                        <div className='space-between'>    
                            <Link to='/list'>All Cards</Link>
                        </div>
                        <div className='space-between'>    
                            <Link to='/newDeck'>Create Deck</Link>
                        </div> 
                </div>
              
               
                <div className="logout">
                    <Link to="./">
                        <button className='logout-button'>
                            <p onClick={() => this.props.logout()}>logout</p>
                        </button>
                    </Link>

                </div>
            </div>
        )
    }
}
