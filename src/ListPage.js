import React, { Component } from 'react'
import { fetchApi } from './fetchcalls.js'
import './styles/list.css'


export default class ListPage extends Component {
    state = {
        cards: [],
        loading: false
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
    render() {
        return (
            <div className='card-container'>
                { !!this.state.cards ?

                    this.state.cards.map(card =>
                        <img src={card.imageUrl} alt="card.name" />)
                    : "Loading"

                }



            </div>
        )
    }
}
