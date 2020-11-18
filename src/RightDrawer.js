import React, { Component } from 'react'
import './styles/rightDrawer.css';


export default class RightDrawer extends Component {
    render() {
        return (
            <div className='right-drawer-div'>
                <img src={this.props.card.imageUrl} alt={this.props.card.name}/>
                <p>{this.props.card.text}</p>
            </div>
        )
    }
}
