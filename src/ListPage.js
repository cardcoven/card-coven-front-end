import React, { Component } from 'react'
import {
    fetchAllCards,
    fetchByType,
    fetchBySubType,
    fetchByMana,
    manaToString,
    fetchDecks
} from './mtgApi';
import './styles/list.css';
import LeftDrawer from './LeftDrawer';
import RightDrawer from './RightDrawer';
import PagingButton from './PagingButton';

export default class ListPage extends Component {
    state = {
        cards: [],
        card: {},
        loading: false,
        page: 1,
        mana: [],
        decks: []
    }

    componentDidMount = async () => {
        const response = await fetchDecks(this.props.token)
        this.setState({ decks: response.body })
        await this.fetchAll()
    }

    fetchAll = async () => {

        this.setState({
            loading: true
        })

        const results = await fetchAllCards(this.state.page)

        this.setState({
            cards: results.body.cards,
            loading: false,
        })
    }

    handleNextPage = async () => {

        this.setState({ page: this.state.page + 1 })

        this.fetchAll(this.state.page);
    }

    handlePrevPage = async () => {

        this.setState({ page: this.state.page - 1 })

        this.fetchAll(this.state.page);
    }

    handleTypeChange = async (e) => {

        this.setState({
            loading: true
        })

        const results = await fetchByType(this.state.page, e.target.value)

        this.setState({
            cards: results.body.cards,
            loading: false
        })

    }
    handleSubTypeChange = async (e) => {

        this.setState({
            loading: true
        })

        const results = await fetchBySubType(this.state.page, e.target.value)

        this.setState({
            cards: results.body.cards,
            loading: false
        })

    }
    handleManaChange = async (e) => {

        e.preventDefault()

        let manaSearch = manaToString(this.state.mana)
        this.setState({
            loading: true
        })

        const results = await fetchByMana(this.state.page, manaSearch)
        this.setState({
            cards: results.body.cards,
            loading: false
        })

    }

    handleManaOptions = async (e) => {
        const mana = this.state.mana
        if (!this.state.mana.includes(e.target.value)) {
            mana.push(e.target.value)
            await this.setState({
                mana: mana
            })
        } else {
            const filteredMana = mana.filter(item => item !== e.target.value)
            await this.setState({
                mana: filteredMana

            })
        }

    }

    render() {
        return (
            <>
                <div className='main-list-div'>
                    <LeftDrawer
                        handleTypeChange={this.handleTypeChange}
                        handleSubTypeChange={this.handleSubTypeChange}
                        handleManaChange={this.handleManaChange}
                        handleManaOptions={this.handleManaOptions}
                        manaState={this.state.mana}
                    />
                    <div>
                        <div className='card-container'>
                            {
                                this.state.cards.length ?
                                    this.state.cards
                                        .filter(item => item.imageUrl)
                                        .map(card =>
                                            <div
                                                key={card.id}
                                                onClick={async () => await this.setState({ card: card })}
                                                className='image-div'>
                                                <img src={card.imageUrl || ''}
                                                    onError={i => i.target.src = ''}
                                                    alt={card.name}
                                                    value={card.multiverseid}
                                                />
                                            </div>)
                                    : <img className='loader' alt='loader gif' height='500px' width='auto' src='https://media.giphy.com/media/1QdNRW77hbA4lGhdRl/giphy.gif' />

                            }
                        </div>
                        <PagingButton className='paging-button'
                            handlePaging={{
                                next: this.handleNextPage,
                                prev: this.handlePrevPage
                            }}
                            count={this.state.count}
                            page={this.state.page}
                        />
                    </div>

                    <RightDrawer 
                    card={this.state.card}
                    token={this.props.token}
                    className='right-container' 
                    decks={this.state.decks} />
                </div>

            </>
        )
    }
}
