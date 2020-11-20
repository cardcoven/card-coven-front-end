import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles/header.css';
import logo from './images/card-coven.png';





export default class Header extends Component {

    render() {
        return (
            <div className='header'>

                <div className="logo-div">
                    <img className='img-logo' src={logo} alt='logo'></img>
                </div> 
                <div className='header-links'>   
                        <div className='space-between'>                         
                            <Link className='header-link' to='/userDeck'>My Deck</Link>
                        </div>
                        <div className='space-between'>    
                            <Link className='header-link' to='/list'>All Cards</Link>
                        </div>
                        <div className='space-between'>    
                            <Link className='header-link' to='/newDeck'>Create Deck</Link>
                        </div> 
                        <div className='space-between'>
                            <Link className='header-link' to='/aboutus'>About Us</Link>
                        </div>
                </div>               
                <div className="logout">
                    <Link to="/">
                        <button className='logout-button'>
                            <p onClick={() => this.props.logout()}>logout</p>
                        </button>
                    </Link>

                </div>
            </div>
        )
    }
}
