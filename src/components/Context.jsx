import React, { Component } from 'react';


export default class Context extends Component {
    render() {
        return (
            <div>
                <div className="heading">
                    <div className="abs pl-5">
                        <div className="display-4">This is Heading</div>
                        <p className="display-5 pt-2">Aliquam facilisis sapien vitae accumsan lacinia. Vestibulum ante ipsum primis in faucibus orci  et ultrices posuere cubilia curae. Vivamus non interdum leo.</p>
                    </div>
                    <div><img src={require("../png11.png")} alt="camera" /></div>
                </div>
                <div>
                    <div className="cards">
                        <div>
                            <h1><i className="fa fa-line-chart"></i></h1>
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Mauris rutrum eros eu dictum sollicitudin. Fusce nec augue congue, tincidunt magna non, suscipit quam. Aliquam facilisis sapien vitae accumsan lacinia. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Vivamus non interdum leo.</p>
                        </div>
                        <div>
                            <h1><i className="fa fa-laptop"></i></h1>
                            <h2>Morbi facilisis, est vel accumsan.</h2>
                            <p>Fusce pellentesque nunc urna, gravida lacinia tortor hendrerit vitae. Nullam hendrerit semper ex at mollis. Etiam accumsan, est vitae bibendum gravida, urna arcu posuere arcu, vitae viverra enim lectus non odio. Pellentesque risus purus, interdum at massa euismod, fringilla volutpat dui.</p>
                        </div>
                        <div>
                            <h1><i className="fa fa-calendar-check-o"></i></h1>
                            <h2>Sed eget lacinia ante. Fusce.</h2>
                            <p> Aenean varius nisi et ante rhoncus laoreet. Maecenas lorem neque, pellentesque vel mi eget, pharetra sagittis nulla. Duis eu congue lorem, a lacinia neque. Ut mattis . Duis non ipsum elementum, tempus sem sit amet, euismod mauris.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
