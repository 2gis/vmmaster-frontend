var React = require('react');
var ReactDOM = require('react-dom');
var FindSession = require('./FindSession').FindSession;
var Platforms = require('./Platforms').Platforms;
var Sessions = require('./Sessions').Sessions;
var UserInfo = require('./UserInfo').UserInfo;
var $ = require('jquery');


var DashboardPage = React.createClass({
    render: function () {
        return (
            <div className="main" >
                <div className="userinfo">

                    <div className="user_info" id="user_info">
                        <UserInfo />
                    </div>
                    <div className="platforms">
                        <div id="platform_content">
                            <Platforms />
                        </div>
                    </div>
                </div>
                <div className="dashboard_content">
                    <div id="find_session">
                        <FindSession />
                    </div>
                    <div id="sessions">
                        <Sessions />
                    </div>
                </div>
            </div>
        )
    }
});


ReactDOM.render(<DashboardPage />, document.getElementById('content'));