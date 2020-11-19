import React, { Component } from 'react';
import { fetchDecks, fetchCards, deleteDecksCards, deleteDeck } from './mtgApi';
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

    handleDeckDelete =async(e) => {
        this.setState({ loading: true })
        await deleteDecksCards(Number(e.target.value), this.props.token)
        await deleteDeck(Number(e.target.value), this.props.token)
        window.location.reload();
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
                                                <button onClick={this.handleClick} value={deck.id}>Cards List</button>
                                                <button onClick={this.handleDeckDelete}  value={deck.id}>Delete Deck</button>
                                            </div>
                                            <div>Deck Name: {deck.deck_name}<br></br>Deck Description: {deck.deck_description}</div>
                                        </div>
                                    </>
                                )
                            : <img className='loader' alt='loader gif' src='https://media.giphy.com/media/13hzdQ3QCID172/giphy.gif' />

                    }
                </div>

                <div className='deck-page-right'>
                    
                    {
                        !!this.state.cards.length ?
                            this.state.cards
                                .map(card =>
                                    <>
                                    <div className='deck-page-card-list'>
                                        <div className='deck-page-button-dropdown'>
                                            <button>Add Card</button>
                                            <button>Delete Card</button>
                                        </div>
                                        <img
                                            alt={card.name}
                                            src={card.img_url}
                                            key={card.name + card.id + Math.random()}
                                            className='deck-page-card-img'
                                        />
                                    </div>
                                    </>
                                )
                            : <img className='loader' alt='loader gif' height='500px' width='auto' src='https://media.giphy.com/media/13hzdQ3QCID172/giphy.gif' />
                    }
                </div>
            </div>
        )
    }
}

// https://giphy.com/gifs/cat-catch-mtg-13hzdQ3QCID172

// For all cards https://giphy.com/gifs/wizardsmagic-mtg-arena-cat-1QdNRW77hbA4lGhdRl/links https://media.giphy.com/media/1QdNRW77hbA4lGhdRl/giphy.gif

// For other type ones https://giphy.com/gifs/reddit-doing-lJNoBCvQYp7nq