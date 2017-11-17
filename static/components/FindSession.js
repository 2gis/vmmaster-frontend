var React = require('react');
var ReactDOM = require('react-dom');
var SessionsActions = require('../actions/SessionsActions').SessionsActions;
var SessionsStore = require('../stores/SessionsStore').SessionsStore;


var FindSession = React.createClass({
    getInitialState: function() {
        var _state = SessionsStore.getState();
        return {
            search: _state.query
        }
    },

    render: function () {
        return (
            <div className="navbar-form">
                <div className="form-group">
                    <input className="form-control" style={{width: '500px'}} placeholder="Session name, status, error, platform, selenium_session" ref='search' name='search' type='text' value={this.state.search} onChange={this.onSearchChange}/>
                </div>
            </div>
        )
    },

    onSearchChange: function() {
        var query = ReactDOM.findDOMNode(this.refs.search).value;
        if (this.promise) {
            clearInterval(this.promise)
        }
        this.setState({
            search: query
        });
        this.promise = setTimeout(function () {
            SessionsActions.search(query);
        }.bind(this), 400);
    },

    onClearSearch: function() {
        this.setState({
            search: ''
        });
        SessionsActions.search('');
    }
});


module.exports.FindSession = FindSession;
