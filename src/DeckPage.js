import React, { Component } from 'react';
import { fetchDecks, fetchCards } from './mtgApi';
import './styles/deckPage.css';

export default class DeckPage extends Component {
    state = {
        loading: false,
        decks: '',
        cards: [],
    }

    componentDidMount = async () => {
        this.setState({ loading: true })
        const response = await fetchDecks(this.props.token)
        await this.setState({

            decks: response.body,
            loading: false
        })
        this.setState({ loading: false })

    }

    handleClick = async (e) => {
        this.setState({ loading: true })
        const response = await fetchCards(Number(e.target.value), this.props.token)
        await this.setState({ cards: response.body, loading: false })
        console.log(response.body)
    }

       render() {
        return (
            <div className='deck-page-card-container'>
                <div className='deck-page-left'>
                            {
                                !!this.state.decks.length ?
                                    this.state.decks
                                        .map(deck =>
                                            <>
                                            <div
                                                className='deck-page-div'
                                                key={deck.id + deck.deck_name}
                                                >
                                            <div className='deck-page-button'>
                                                <button 
                                                onClick={this.handleClick}
                                                value={deck.id}
                                                >List</button>
                                            </div>
                                            <div>Deck Name: {deck.deck_name}<br></br>Deck Description: {deck.deck_description}</div>
                                            </div>
                                            </>
                                            )
                                    : <img className='loader' alt='loader gif' src='https://www.cbc.ca/sports/longform/content/ajax-loader.gif' />

                            }
                </div>

                <div className='deck-page-right'>
                    
                    {
                        !!this.state.cards.length ?
                        this.state.cards
                            .map(card =>
                                <img alt={card.name} src={card.img_url} key={card.name + card.id + Math.random()}/>
                                )
                        : <img className='loader' alt='loader gif' src='https://www.cbc.ca/sports/longform/content/ajax-loader.gif' />
                    }
                </div>
            </div>
        )
    }
}
