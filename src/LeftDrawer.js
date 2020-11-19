import React, { Component } from 'react'
import './styles/leftDrawer.css';
import { types, subtypes, sets } from './mtgApi'
import blue from './images/water-mana.png'
import black from './images/black-mana.png'
import green from './images/green-mana.png'
import red from './images/fire-mana.png'
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
                                    <option key={item} value={`&types=${item}`}>{item}</option>
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

                                    <option key={item} value={`&subtypes=${item}`}>{item}</option>)
                            }
                        </select>
                    </div>
                    <div>
                        <p>Search by Set</p>
                        <select onChange={this.props.handleSetChange}>
                            <option></option>
                            {
                                sets.map(item =>

                                    <option key={item} value={`&setName=${item}`}>{item}</option>)
                            }

                        </select>
                    </div>
                </div>
                <div className="mana-form">
                    <p>Sort by Mana Types</p>
                    <span>
                        <label className="label" >
                            <img style={{ filter: this.props.manaState.includes('Black') && 'drop-shadow(2px 2px 10px white)' }} className="mana-img" src={black} alt='Black' />
                            <p>Black</p>
                            <input className="check-box" onClick={this.props.handleManaOptions} type="checkbox" value="Black" />
                        </label>
                    </span>
                    <span>
                        <label className="label" >
                            <img style={{ filter: this.props.manaState.includes('Red') && 'drop-shadow(2px 2px 10px rgb(245, 88, 88))' }} className="mana-img" src={red} alt='Red' />
                            <p>Red</p>
                            <input className="check-box" onClick={this.props.handleManaOptions} type="checkbox" value="Red" />
                        </label>
                    </span>
                    <span>
                        <label className="label" >
                            <img style={{ filter: this.props.manaState.includes('Blue') && 'drop-shadow(2px 2px 10px rgb(65, 140, 253))' }} className="mana-img" src={blue} alt='blue' />
                            <p>Blue</p>
                            <input className="check-box" onClick={this.props.handleManaOptions} type="checkbox" value="Blue" />
                        </label>
                    </span>
                    <span>
                        <label className="label" >
                            <img style=
                                {
                                    {
                                        filter: this.props.manaState.includes('Green') && 'drop-shadow(2px 2px 10px lightgreen)'
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
                            <img style={{ filter: this.props.manaState.includes('White') && 'drop-shadow(2px 2px 10px white)' }} className="mana-img" src={white} alt='White' />
                            <p>White</p>
                            <input className="check-box" onClick={this.props.handleManaOptions} type="checkbox" value="White" />
                        </label>
                    </span>

                    <div className="form-button">
                        <button onClick={this.props.handleSubmit}>Search</button>
                    </div>
                </div>

            </div>
        )
    }
}
