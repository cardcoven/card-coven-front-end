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
        this.props.history.push('/newDeck');
    }

    render() {
        return (
            <div>
            <div className='signupFormDiv'>
                <form 
                className='signupForm'
                onSubmit={this.handleSubmit}>
                    <h2>Sign Up</h2>
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
                <div className='login-form-div'>
                    <form 
                    className='login-form'
                    onSubmit={this.handleSubmit}>
                        <h2>Log In</h2>
                        <label>
                            Email:
                        <input 
                        onChange={(e) => this.setState({ email: e.target.value})} 
                        value={this.state.email} 
                        />
                        </label>
                        <label>
                            Password:
                            <input 
                            onChange={(e) => this.setState({ password: e.target.value})} 
                            value={this.state.password} 
                            type="password"
                            />
                        </label>
                        {
                            this.state.loading
                            ? 'loading'
                            : <button>
                                Submit
                            </button>
                        }
                    </form>
                
            </div>
            </div>
        )
    }
}
