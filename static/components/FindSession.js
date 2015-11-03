var React = require('react');
var ReactDOM = require('react-dom');
var DashboardActions = require('../actions/SessionsActions').DashboardActions;
var DashboardStore = require('../stores/SessionsStore').DashboardStore;


var FindSession = React.createClass({
    getInitialState: function() {
        var _state = DashboardStore.getState();
        return {
            search: _state.query
        }
    },

    render: function () {
        return (
            <div className="navbar-form">
                <div className="form-group">
                    <input className="form-control" placeholder="session name" ref='search' name='search' type='text' value={this.state.search} onChange={this.onSearchChange}/>
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
            DashboardActions.search(query);
        }.bind(this), 400);
    },

    onClearSearch: function() {
        this.setState({
            search: ''
        });
        DashboardActions.search('');
    }
});


module.exports.FindSession = FindSession;
