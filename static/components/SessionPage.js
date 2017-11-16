var React = require('react');
var ReactDOM = require('react-dom');
var SessionsActions = require('../actions/SessionsActions').SessionsActions;
var Steps = require('./Steps').Steps;
var SessionInfo = require('./SessionInfo').SessionInfo;
var SessionDescription = require('./SessionDescription').SessionDescription;
var ScreenCast = require('./Screencast').ScreenCast;
var SeleniumLog = require('./SeleniumLog').SeleniumLog;


var SessionPage = React.createClass({
    getDefaultProps: function () {
        SessionsActions.session_info();
    },

    render: function () {
        return (
            <div>
                <SessionInfo />
                <div className="session_content tab-content">
                    <SessionDescription />
                    <Steps />
                    <ScreenCast />
                    <SeleniumLog />
                </div>
                <div id="photo_gallery"></div>
            </div>
        );
    }
});


ReactDOM.render(<SessionPage />, document.getElementById('content'));