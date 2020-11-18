import React, { Component } from 'react'
import './styles/leftDrawer.css';
import { types, subtypes, colors } from './mtgApi'

export default class LeftDrawer extends Component {
    render() {
        return (
            <div className='left-drawer-div'>
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
                <div className="mana-form">
                    <p>Sort by Mana Types</p>
                    <form onSubmit={this.props.handleManaChange}>
                        {
                            colors.map(item =>
                                <label className="label" key={item}><p>{item}</p>
                                    <input className="check-box" onClick={this.props.handleManaOptions} type="checkbox" value={item} />
                                </label>)
                        }
                        <button>Search</button>
                    </form>
                </div>


            </div>
        )
    }
}
