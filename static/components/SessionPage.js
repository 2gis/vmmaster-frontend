var React = require('react');
var ReactDOM = require('react-dom');
var Steps = require('./Steps').Steps;
var SessionInfo = require('./SessionInfo').SessionInfo;
var ScreenCast = require('./Screencast').ScreenCast;


var SessionPage = React.createClass({
    render: function () {
        return (
            <div>
                <SessionInfo />
                <div className="session_content tab-content">
                    <Steps />
                    <ScreenCast />
                </div>
            </div>
        );
    }
});


ReactDOM.render(<SessionPage />, document.getElementById('content'));