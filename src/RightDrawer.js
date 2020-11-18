import React, { Component } from 'react'
import './styles/rightDrawer.css';


export default class RightDrawer extends Component {
    render() {
        return (
            <div className='right-drawer-div'>


                <div className="display-image">
                    <img className='right-drawer-img'
                        src={this.props.card.imageUrl}
                        alt={this.props.card.name}
                    />
                </div>
                <div className="description-div">
                    <p>Colors: {this.props.card.colors}</p>
                    <p>Type: {this.props.card.type}</p>
                    <p className='right-drawer-card-text'>Card description: {this.props.card.text}</p>
                </div>

            </div>
        )
    }
}
