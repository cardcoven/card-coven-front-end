import React, { Component } from 'react'
import { createUser } from './mtgApi';
import './styles/signup.css';

export default class SignUp extends Component {

    state = { 
        email: '',
        password: '',
        loading: false
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loaidng: true });
        const user = await createUser(this.state);
        this.setState({ loading: false })
        this.props.handleTokenUserChange(user.body.token, user.body.email)
        this.props.history.push('/list');
    }

    render() {
        return (
            <div className='signupFormDiv'>
                <form 
                className='signupForm'
                onSubmit={this.handleSubmit}>
                    <label>
                        <input
                            required
                            onChange={(e) => this.setState({ email: e.target.value })}
                            type='text'
                            placeholder='Email'
                        ></input>
                    </label>
                    <label>
                        <input
                            required
                            onChange={(e) => this.setState({ password: e.target.value })}
                            type='password'
                            placeholder='Password'
                        ></input>
                    </label>
                    {
                        this.state.loading 
                        ? <img className='loader' alt='loader gif' src='https://www.cbc.ca/sports/longform/content/ajax-loader.gif'/>
                        : <button>
                            Sign up!
                        </button>
                    }
                </form>
            </div>
        )
    }
}
