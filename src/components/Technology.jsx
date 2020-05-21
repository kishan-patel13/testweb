import React, { Component } from 'react';

export default class Technology extends Component {
    render() {
        return (
            <div className="container subpage px-0">
                <div>
                    <h1 className="display-4">Technologies</h1>
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Mauris rutrum eros eu dictum sollicitudin. Fusce nec augue congue, tincidunt magna non, suscipit quam. Aliquam facilisis sapien vitae accumsan lacinia. Vivamus non interdum leo.</p>
                </div>
                <div className="pt-3">
                    <h1 className="display-5">Front-end</h1>
                    <p>Atiam accumsan, est vitae bibendum gravida, urna arcu posuere arcu, vitae viverra enim lectus non odio. Pellentesque risus purus, at massa euismod.</p>
                    <div className="techno t-1">
                        <div>
                            <img src={require('../angular-icon.svg')} alt="angular"/>
                            <h2>Angular JS</h2>
                            <p> Aenean varius nisi et ante rhoncus laoreet. Maecenas lorem neque, pellentesque vel mi eget, pharetra sagittis nulla. Duis eu congue mauris.</p>
                        </div>
                        <div>
                        <img src={require('../react-2.svg')} alt="react"/>
                            <h2>React JS</h2>
                            <p> Aenean varius nisi et ante rhoncus laoreet. Maecenas lorem neque, pellentesque vel mi eget, pharetra sagittis nulla. Duis eu congue.</p>
                        </div>
                        <div>
                        <img src={require('../wordpress.svg')} alt="wordpress"/>
                            <h2>Wordpress</h2>
                            <p> Aenean varius nisi et ante rhoncus laoreet. Maecenas lorem neque, pellentesque vel mi eget, pharetra sagittis nulla. Duis eu congue lorems.</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="pt-3">
                    <h1 className="display-5">Back-end</h1>
                    <p>Fringilla volutpat dui eu dictum sollicitudin. Fusce nec augue congue, tincidunt magna non, Atiam accumsan, est vitae bibendum gravida, urna arcu.</p>
                    <div className="techno t-2">
                        <div>
                            <img src={require('../python.svg')} alt="python"/>
                            <h2>Python</h2>
                            <p> Aenean varius nisi et ante rhoncus laoreet. Maecenas lorem neque, pellentesque vel mi eget, pharetra sagittis nulla. Duis eu congue mauris.</p>
                        </div>
                        <div>
                        <img src={require('../java.svg')} alt="java"/>
                            <h2>Java</h2>
                            <p> Aenean varius nisi et ante rhoncus laoreet. Maecenas lorem neque, pellentesque vel mi eget, pharetra sagittis nulla. Duis eu congue.</p>
                        </div>
                        <div>
                        <img src={require('../nodejs.svg')} alt="nodejs"/>
                            <h2>Node.JS</h2>
                            <p> Aenean varius nisi et ante rhoncus laoreet. Maecenas lorem neque, pellentesque vel mi eget, pharetra sagittis nulla. Duis eu congue lorems.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}