import React, { Component } from 'react'
import './styles/leftDrawer.css';
import { types, subtypes } from './mtgApi'
import blue from './images/blue-mana.png'
import black from './images/black-mana.png'
import green from './images/green-mana.png'
import red from './images/red-mana.png'
import white from './images/white-mana.png'
import './images/white-mana.png'


export default class LeftDrawer extends Component {
    render() {
        return (
            <div className='left-drawer-div'>
                <div className="selectors-div">
                    <div className="type-div">
                        <p>Sort by Type: </p>
                        <select className="type-select" onChange={this.props.handleTypeChange}>
                            <option></option>
                            {
                                types.map(item =>
                                    <option key={item} value={item}>{item}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className="subtypes-div">
                        <p>Sort By SubType</p>
                        <select onChange={this.props.handleSubTypeChange}>
                            <option></option>
                            {
                                subtypes.map(item =>

                                    <option key={item} value={item}>{item}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="mana-form">
                    <p>Sort by Mana Types</p>
                    <form onSubmit={this.props.handleManaChange}>
                        <span>
                            <label className="label" >
                                <img style={{ border: this.props.manaState.includes('Black') && 'solid black 2px' }} className="mana-img" src={black} alt='Black' />
                                <p>Black</p>
                                <input className="check-box" onClick={this.props.handleManaOptions} type="checkbox" value="Black" />
                            </label>
                        </span>
                        <span>
                            <label className="label" >
                                <img style={{ border: this.props.manaState.includes('Red') && 'solid red 2px' }} className="mana-img" src={red} alt='Red' />
                                <p>Red</p>
                                <input className="check-box" onClick={this.props.handleManaOptions} type="checkbox" value="Red" />
                            </label>
                        </span>
                        <span>
                            <label className="label" >
                                <img style={{ border: this.props.manaState.includes('Blue') && 'solid blue 2px' }} className="mana-img" src={blue} alt='blue' />
                                <p>Blue</p>
                                <input className="check-box" onClick={this.props.handleManaOptions} type="checkbox" value="Blue" />
                            </label>
                        </span>
                        <span>
                            <label className="label" >
                                <img style=
                                    {
                                        {
                                            border: this.props.manaState.includes('Green') && 'solid green 2px'
                                        }
                                    }
                                    className="mana-img"
                                    src={green} alt='blue' />
                                <p>Green</p>
                                <input className="check-box" onClick={this.props.handleManaOptions} type="checkbox" value="Green" />
                            </label>
                        </span>
                        <span>
                            <label className="label" >
                                <img style={{ border: this.props.manaState.includes('White') && 'solid white 2px' }} className="mana-img" src={white} alt='White' />
                                <p>White</p>
                                <input className="check-box" onClick={this.props.handleManaOptions} type="checkbox" value="White" />
                            </label>
                        </span>

                        <div className="form-button">
                            <button>Search</button>
                        </div>
                    </form>
                </div>


            </div>
        )
    }
}
