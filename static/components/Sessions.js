var React = require('react');
var Session = require('./Session').Session;
var SessionsActions = require('../actions/SessionsActions').SessionsActions;
var SessionsStore = require('../stores/SessionsStore').SessionsStore;
var InfiniteScroll = require('./InfiniteScroll').InfiniteScroll;
var reloadDashboard = require('../stores/SessionsStore').reloadDashboard;
var WebSockets = require('ws');


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
        return {
            sessions: [],
            json_sessions: [],
            hasMore: true,
            offset: 10,
            query: '',
            ws: new WebSockets('ws://' + window.location.host.split(':')[0] + ':8001/sessions')}
    },

    handleInfiniteLoad: function(offset) {
        setTimeout(function () {
            SessionsActions.change_page(this.state.offset+10)
        }.bind(this), 400);
    },

    render: function () {
        return (
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
                            offsetStart={0}
                            loadMore={this.handleInfiniteLoad}
                            loader={<td className="session_column" colSpan="4"><span className="loader"></span></td>}
                            hasMore={this.state.hasMore}
                            threshold={250}>
                            {this.state.sessions}
                        </InfiniteScroll>}
                </table>
        );
    },

    _onChange: function() {
        var _state = SessionsStore.getState();
        var sessions = _state.sessions.map(function(session) {
            return <Session key={session.id} session={session} />
        });

        this.setState({
            sessions: sessions,
            json_sessions: _state.sessions,
            hasMore: _state.hasMore,
            offset: _state.offset,
            query: _state.query
        });
    },

    componentWillUnmount: function() {
        SessionsStore.removeChangeListener(this._onChange);
        this.state.ws.close();
    },

    componentWillMount: function () {
        var ws = this.state.ws;
        var self = this;
        ws.addEventListener('open', function open() {
            console.log('Websocket connected');
            self.sendState();
        });
        ws.addEventListener('message', function incoming(event) {
            var data = event.data.split('#vmmaster_wsmessage#');
            var sessions = JSON.parse(data[1]);
            console.log('Websocket incoming msg type: ', data[0]);
            if (data[0] == 'new') {
                SessionsActions.found_new_sessions(sessions);
            } else {
                SessionsActions.update_sessions(sessions);
            }

        });
        ws.addEventListener('close', function close() {
            console.log('Websocket disconnected');
        });
    },

    componentDidMount: function() {
        SessionsStore.addChangeListener(this._onChange);
    },

    componentDidUpdate: function () {
        if (this.state.ws.readyState == 1) {
            this.sendState();
        }
    },

    sendState: function () {
        var _state = this.state;
        var current_state = JSON.stringify({
            sessions: _state.json_sessions,
            offset: _state.offset,
            query: _state.query
        });
        this.state.ws.send(current_state);
        console.log('State was updated and send new state to watching service')
    }
});


module.exports.Sessions = Sessions;