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
                        ? <img className='loader' alt='loader gif' src='https://www.cbc.ca/sports/longform/content/ajax-loader.gif'/>
                        : <button onClick={this.handleClick}>
                            Submit
                        </button>
                    }
                </form>
            </div>
        )
    }
}
