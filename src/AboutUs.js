import React, { Component } from 'react'
import './styles/aboutUs.css';
import DV from './images/DV-Card.png';
import JM from './images/JM-Card.png';
import DB from './images/DB-Card.png';
import JQ from './images/JQ-Card.png';
// import Carousel from 'react-bootstrap/Carousel'


export default class AboutUs extends Component {
    render() {
        return (
            <>
                <div className='about-us-all'>
                    <br />
                    <h1>About Us Page</h1>
                    <br />
                    <div className='about-us-list-container'>
                        <div className='about-us-names'>Donny
                            <a className='about-us-links' href="https://www.linkedin.com/in/donnylvu/" target="blank">LinkedIn</a>
                            <a className='about-us-links' href="https://github.com/DonnyLVu" target="blank">Github</a>
                            <img src={DV} alt="Donny's card"></img>
                        </div>
                    </div>
                    <br />
                    <div className='about-us-list-container'>
                        <div className='about-us-names'>Justin
                            <a className='about-us-links' href="https://www.linkedin.com/in/justin-martin-a5917388/" target="blank">LinkedIn</a>
                            <a className='about-us-links' href="https://github.com/JustinMartin7x" target="blank">Github</a>
                            <img src={JM} alt="Justins's card"></img>
                        </div>
                    </div>
                    <br />
                    <div className='about-us-list-container'>
                        <div className='about-us-names'>David
                            <a className='about-us-links' href="https://www.linkedin.com/in/david-arron-butler/" target="blank">LinkedIn</a>
                            <a className='about-us-links' href="https://github.com/davidabutler92" target="blank">Github</a>
                            <img src={DB} alt="David's card"></img>
                        </div>
                    </div>
                    <br />
                    <div className='about-us-list-container'>
                        <div className='about-us-names'>Jonathan
                            <a className='about-us-links' href="https://www.linkedin.com/in/jonathan-quesada-021305108/" target="blank">LinkedIn</a>
                            <a className='about-us-links' href="https://github.com/QuesadaJon" target="blank">Github</a>
                            <img src={JQ} alt="Jonathan's card"></img>
                        </div>
                    </div>
                    <br />
                </div>
            </>
        )
    }
}
