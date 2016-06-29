var React = require('react');
var StatusActions = require('../actions/StatusActions').StatusActions;
var StatusStore = require('../stores/StatusStore').StatusStore;


var SessionsStatus = React.createClass({
    getDefaultProps: function () {
        StatusActions.get_sessions();
    },

    getInitialState: function () {
        return {sessions: {
            waiting: 0,
            running: 0,
            failed: 0,
            succeed: 0,
            active_total: 0,
            total: 0
        }};
    },

    render: function () {
        var sessions = this.state.sessions;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Sessions</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Waiting</td>
                        <td>{ sessions.waiting }</td>
                    </tr>
                    <tr>
                        <td className="warning">Running</td>
                        <td className="warning">{ sessions.running }</td>
                    </tr>
                    <tr>
                        <td className="danger">Failed</td>
                        <td className="danger">{ sessions.failed }</td>
                    </tr>
                    <tr>
                        <td className="success">Succeed</td>
                        <td className="success">{ sessions.succeed }</td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="active">Active</td>
                        <td className="active">{ sessions.active_total }</td>
                    </tr>
                    <tr>
                        <td className="active">Total</td>
                        <td className="active">{ sessions.total }</td>
                    </tr>
                    </tbody>
            </table>
        );
    },

    _onChange: function() {
        var _state = StatusStore.getState();
        this.setState({sessions: _state.sessions});
    },

    componentWillUnmount: function() {
        StatusStore.removeChangeListener(this._onChange);
    },

    componentDidMount: function() {
        StatusStore.addChangeListener(this._onChange);
    }
});


module.exports.SessionsStatus = SessionsStatus;