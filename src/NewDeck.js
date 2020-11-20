import React, { Component } from 'react'
import { createDeck } from './mtgApi.js';
import './styles/newDeck.css';

export default class NewDeck extends Component {

    state = {

    }

    handleSubmit = async (e) => {

        e.preventDefault();

        await createDeck(
            {
                deck_name: this.state.new_deck,
                deck_description: this.state.new_description,
                deck_type: true,
            },
            this.props.token
        )

        this.props.history.push('/list');

    }
    render() {
        return (
            <div className='center-deck-page-content'>
                <div className='new-deck-div'>
                    <form
                        className='new-deck-form'
                        onSubmit={this.handleSubmit}
                    >
                        <label>New Deck Name<br></br>
                            <input
                                required
                                onChange={(e) => this.setState({ new_deck: e.target.value })}
                                type='text'
                            ></input>
                        </label>
                        <label>Deck Description<br></br>
                            <input
                                required
                                onChange={(e) => this.setState({ new_description: e.target.value })}
                                type='text'
                            ></input>
                        </label>
                        {
                            this.state.loading
                                ? <img className='loader' alt='loader gif' src='https://www.cbc.ca/sports/longform/content/ajax-loader.gif' />
                                : <button onClick={this.handleClick}>
                                    Submit
                            </button>
                        }
                    </form>
                    <div className='deck-template-p'>
                        <h2>Deck Rules:</h2>
                        <ul>
                            <li>Your deck must have a minimum of 60 cards.</li>
                            <li>Your deck may only contain 4 of any card. The only exceptions of this rule are the Basic Lands or if a card's text contradicts this rule </li>
                            <li>If you play in other Formats, you will have to pay attention to the limited/forbidden cards.</li>
                        </ul>
                        <h2>Deck Building Tips</h2>
                        <ul>
                            <li>Try to keep your deck close to 60 cards in size, the more cards you add the more you decrease the chances of getting the card you need.</li>
                            <li>A big problem for many starting players is Mana. You want a deck with just enough mana. You're doomed if you don't get your lands or other Mana cards, but you're no better off if you get only Mana and no Spells. It has to be balanced. A little more than 1/3 of your deck should be Mana. When you use a 60 card deck, 24 mana will suffice, but at the very least one land for every two spells.</li>
                            <li>Another problem many starters have is that they don't get the right color of mana. If you have multiple colors in your deck, the chance that you'll draw the right color is reduced. It's generally better to keep your deck to 2 or fewer colors. Decks with 4 colors, and even all 5 can work, but a starter should keep it to a maximum of 2. If you want, you can always add Artifacts or multicolored Spells to your deck.</li>
                            <li>The balance between the number of Creatures and other spells varies from deck to deck, but you always need creatures, and enough of them. You also want Sorceries, Instants and other Spells to help reduce your opponent's life total, destroy their permanents, control their cards, and buff your creatures. Creatures are there to defend you from your opponent's creatures, to attack your opponent, and to provide utility. Keep them balanced. Many people have more creatures than Spells in their deck.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
