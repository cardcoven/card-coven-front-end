import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './styles/footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-div">
                <div className="about-us"><Link to="./AboutUs">About Us</Link></div>

            </div>
        )
    }
}
