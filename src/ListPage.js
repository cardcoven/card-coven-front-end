import React, { Component } from 'react'
import { fetchApi } from './mtgApi';
import './styles/list.css';
import LeftDrawer from './LeftDrawer';
import RightDrawer from './RightDrawer';


export default class ListPage extends Component {
    state = {
        cards: [],
        card: {},
        loading: false,
    }
    componentDidMount = async () => {
        this.setState({
            loading: true
        })
        const results = await fetchApi()
        this.setState({
            cards: results.body.cards,
            loading: false
        })
        console.log(this.state.cards)
    }

    handleClick = async () => {  
        console.log('clicked')  
    }

    render() {
        return (
            <>
                <div className='main-list-div'>
                    <LeftDrawer />
                    <div className='card-container'>
                        { !!this.state.cards ?

                            this.state.cards
                            .filter(item => item.imageUrl)
                            .map(card =>
                                <div 
                                key={card.id}
                                onClick={this.handleClick}
                                className='image-div'>
                                    <img src={card.imageUrl || ''} 
                                    onError={i => i.target.src=''}
                                    alt={card.name} />
                                </div>)
                            : <img className='loader' alt='loader gif' src='https://www.cbc.ca/sports/longform/content/ajax-loader.gif'/>

                        }



                    </div>
                    <RightDrawer />
                </div>
            </>
        )
    }
}
