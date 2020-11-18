import React, { Component } from 'react'



export default class Login extends Component {
    render() {
        return (
            <div>
               <h2>Please Log In</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        UserName:
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
        )
    }
}
