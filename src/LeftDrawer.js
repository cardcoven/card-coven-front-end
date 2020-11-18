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
                            <option value={item}>{item}</option>
                        )
                    }
                </select>
                <select onChange={this.props.handleSubTypeChange}>
                    <option></option>
                    {
                        subtypes.map(item =>
                            <option value={item}>{item}</option>)
                    }
                </select>
                <select onChange={this.props.handleManaChange}>
                    <option></option>
                    {
                        colors.map(item =>
                            <option value={item}>{item}</option>)
                    }
                </select>


            </div>
        )
    }
}
