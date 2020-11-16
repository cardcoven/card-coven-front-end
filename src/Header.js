import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles/header.css';


export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <input placeholder='Search'></input>
                <img alt='logo'></img>
                <div className='headerLinks'>
                    <Link to='/userDeck'>My Deck</Link>
                    <Link to='/aboutUs'>About Us</Link>
                    <Link to='/list'>All Cards</Link>
                </div>
                <button>Logout</button>
            </div>
        )
    }
}
