import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Register from './register';
import './style.scss'

function onSignIn(event){
    event.preventDefault();
    ReactDOM.render(<Register />, document.getElementById('root'));
}

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='main-container'>
                <div>
                <h1>Login</h1>
                <div>
                    <form action="">
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" id="username" placeholder="user id" />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" placeholder="password" />
                        </div>
                        <div>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <p className="pt-1">New Member? <a href="#" onClick={onSignIn}>Sign Up</a></p>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}

export default Login;