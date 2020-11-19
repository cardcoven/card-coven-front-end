import React, { Component } from 'react'
import './styles/rightDrawer.css';
import { postCard } from './mtgApi';


export default class RightDrawer extends Component {

    state = {
        deckId: '',
    }

    handleClick = async () => {
        postCard({
            card_name: this.props.card.name,
            card_colors: this.props.card.colors,
            card_type: this.props.card.type,
            img_url: this.props.card.imageUrl,
            deck_id: Number(this.state.deckId),
        }, 
        this.props.token)
    } 

    render() {
        console.log(this.state.deckId);
        return (
            <div className='right-drawer-div'>
                <select 
                    onChange={(e) => this.setState({ deckId: e.target.value })}>
                    {   
                        this.props.decks.map(deck =>                
                            <option 

                            value={deck.id}>
                                {deck.deck_description}
                            </option>
                        )
                    }
                </select>

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
                    <button
                    onClick={this.handleClick}>Like</button>
            </div>
        )
    }
}
