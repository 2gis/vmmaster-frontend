var React = require('react');
var ReactDOM = require('react-dom');
var Session = require('./Session').Session;
var DashboardActions = require('../actions/SessionsActions').DashboardActions;
var DashboardStore = require('../stores/SessionsStore').DashboardStore;
var InfiniteScroll = require('./InfiniteScroll').InfiniteScroll;
var reloadDashboard = require('../stores/SessionsStore').reloadDashboard;


var NoSessions = React.createClass({
    render: function () {
        return (
            <tbody><tr><td colSpan={4}>Sessions not found</td></tr></tbody>
        )
    }
});

var Sessions = React.createClass({
    getDefaultProps: function () {
        reloadDashboard();
    },

    getInitialState: function() {
        return {sessions: [], hasMore: true, page: 1}
    },

    handleInfiniteLoad: function(page) {
        setTimeout(function () {
            DashboardActions.change_page(this.state.page+1)
        }.bind(this), 400);
    },

    render: function () {
        return (
            <div id="sessions">
                <table className="table sessions">
                    <thead className="caption">
                    <tr>
                        <td className="session_column session_status">status</td>
                        <td className="session_column session_name">name</td>
                        <td className="session_column session_date">date</td>
                        <td className="session_column session_error">info</td>
                    </tr>
                    </thead>
                    { this.state.sessions.length == 0?
                        <NoSessions />:
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={this.handleInfiniteLoad}
                            loader={<tr><td className="session_column session_loader" colSpan="4"><span className="loader"></span></td></tr>}
                            hasMore={this.state.hasMore}
                            threshold={250}>
                            {this.state.sessions}
                        </InfiniteScroll>}
                </table>
            </div>
        );
    },

    _onChange: function() {
        var _state = DashboardStore.getState();
        var sessions = _state.sessions.map(function(session) {
            return <Session key={session.id} session={session} />
        });

        this.setState({sessions: sessions, hasMore: _state.hasMore, page: _state.page});
    },

    componentWillUnmount: function() {
        DashboardStore.removeChangeListener(this._onChange);
    },

    componentDidMount: function() {
        DashboardStore.addChangeListener(this._onChange);
    }
});


module.exports.Sessions = Sessions;