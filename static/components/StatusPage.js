var React = require('react');
var ReactDOM = require('react-dom');
var SessionsStatus = require('./SessionsStatus').SessionsStatus;
var EndpointsStatus = require('./EndpointsStatus').EndpointsStatus;


var StatusPage = React.createClass({
    render: function () {
        return (
            <div className="main container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1>vmmaster status</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <SessionsStatus />
                    </div>
                    <div className="col-md-6">
                        <EndpointsStatus />
                    </div>
                </div>
            </div>
        )
    }
});


ReactDOM.render(<StatusPage />, document.getElementById('content'));