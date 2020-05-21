import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './style.scss'
import Login from "./login";

function onSignIn(event) {
    event.preventDefault();
    ReactDOM.render(<Login />, document.getElementById('root'));
}
class Register extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            // Do not need all time container-fluid property of bootstrap
            <div className='main-container container-fluid'>
                {/* Do not need this className property */}
                <div>

                {/* Where is the class header in scss. And do not need className property here you can define in scss */}
                <h1>Sign Up</h1>
                <div>
                    <form action="">
                    <div>
                                <label for="firstname">First Name</label>
                                <input type="text" id="firstname" placeholder="Kishan" />
                            </div>
                            <div>
                                <label for="lastname">Last Name</label>
                                <input type="text" id="lastname" placeholder="Patel" />
                            </div>
                            <div>
                                <label for="email">Email</label>
                                <input type="email" id="email" placeholder="abc@xyz.com" />
                            </div>
                            <hr/>
                            <div>
                                <label for="password">Password</label>
                                <input type="password" id="password" placeholder="********" />
                            </div>
                            <div>
                                <label for="c-password">Confirm Password</label>
                                <input type="text" id="c-password" placeholder="" />
                            </div>
                            <div>
                                <input type="checkbox" id="term" />
                                <label htmlFor="term">I agree to <a href="#">Terms and Conditions</a></label>
                            </div>

                            {/* Where is the btn and btn-primary in scss */}
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                            <div>
                                <label>or <a href="#" onClick={onSignIn}>Sign In</a></label>
                            </div>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;