import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles/header.css';
import logo from './images/card-coven.png'




export default class Header extends Component {
    render() {
        return (
            <div className='header'>


                <div className="logo-div">
                    <img className='img-logo' src={logo} alt='logo'></img>
                </div>
                {/*                                     */}
                <div className='search-bar'>
                    <input placeholder='Search' className="inputSearch"></input>
                </div>
                {/*                                     */}
                <div className='header-links'>
                    <span><Link to='/userDeck'>My Deck</Link></span>
                    <span><Link to='/list'>All Cards</Link></span>
                </div>
                {/*                                     */}
                <div className=''>
                    <span><Link to='/newDeck'>Create Deck</Link></span>
                </div>
                <div className="logout">
                    <Link to="./"> 
                        <div> 
                            <p onClick={() => this.props.logout()}>logout</p> 
                        </div>
                    </Link>
                    
                </div>
            </div>
        )
    }
}
