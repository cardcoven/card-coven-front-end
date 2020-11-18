import React, { Component } from 'react'
import './styles/leftDrawer.css';
import { types, subtypes, colors } from './mtgApi'

export default class LeftDrawer extends Component {
    render() {
        return (
            <div className='left-drawer-div'>
                <select onChange={this.props.handleTypeChange}>
                    <option></option>
                    {
                        types.map(item =>
                            <option key={item} value={item}>{item}</option>
                        )
                    }
                </select>
                <select onChange={this.props.handleSubTypeChange}>
                    <option></option>
                    {
                        subtypes.map(item =>

                            <option key={item} value={item}>{item}</option>)
                    }
                </select>
                <div className="mana-form">
                    <form onSubmit={this.props.handleManaChange}>
                        {
                            colors.map(item =>
                                <label key={item}>{item}
                                    <input onClick={this.props.handleManaOptions} type="checkbox" value={item} />
                                </label>)
                        }
                        <button>Search</button>
                    </form>
                </div>


            </div>
        )
    }
}
