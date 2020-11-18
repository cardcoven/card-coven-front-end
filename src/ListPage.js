import React, { Component } from 'react'
import { fetchAllCards, fetchCardById } from './mtgApi';
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
    }

    componentDidMount = async () => {
        this.fetchAll()
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

    render() {
        return (
            <>
                <div className='main-list-div'>
                    <LeftDrawer />
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
                            : <img className='loader' alt='loader gif' src='https://www.cbc.ca/sports/longform/content/ajax-loader.gif' />

                        }
                    <PagingButton 
                    handlePaging={{ next: this.handleNextPage, 
                    prev: this.handlePrevPage }}
                    count={this.state.count}
                    page={this.state.page}
                    />
                    </div>
                    <RightDrawer card={this.state.card}/>
                </div>
            </>
        )
    }
}
