import React, { Component } from 'react';

export default class Contact extends Component {
    render() {
        return (
            <div className="container subpage px-0">
                <div>
                    <h1 className="display-4">Get in touch</h1>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Mauris rutrum eros eu dictum sollicitudin. Fusce nec augue congue, tincidunt magna non, suscipit quam. Aliquam facilisis sapien vitae accumsan lacinia. Vivamus non interdum leo.</p>
                </div>
                <div className="pt-3 contact">
                    <div className="contact-form-group">
                        <h2 className="display-5">Drop a message</h2>
                        <form>
                            <div>
                                <label htmlFor="firstname">Firstname:</label>
                                <input type="text" id="firstname" />
                            </div>
                            <div>
                                <label htmlFor="lastname">Lastname:</label>
                                <input type="text" id="lastname" />
                            </div>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" />
                            </div>
                            <div>
                                <label htmlFor="message">Message:</label>
                                <textarea rows='3' id="message"></textarea>
                            </div>
                            <button className="btn btn-primary" type="submit" >Send</button>
                        </form>
                    </div>
                    <div>
                        <h2>Others way to contact</h2>
                        <p>Call, email or send a postcard - whatever works for you, we're here.</p>
                        <h5><i className="fa fa-phone-square"></i>(+91) 98765 43210 </h5>
                        <h5><i className="fa fa-envelope-o "></i>abc@xyz.com </h5>
                        <h5><i className="fa fa-twitter"></i>@my_site </h5>
                        <h5><i className="fa fa-home"></i>A-101, Alpha Complex, Gama Road, Atlantica - 213024 </h5>
                    </div>
                </div>
            </div>
        );
    }
}