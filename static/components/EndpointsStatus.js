var React = require('react');
var StatusActions = require('../actions/StatusActions').StatusActions;
var StatusStore = require('../stores/StatusStore').StatusStore;


var EndpointsStatus = React.createClass({
    getDefaultProps: function () {
        StatusActions.get_endpoints();
    },

    getInitialState: function () {
        return {endpoints: {
            using: [],
            pending: [],
            ready: [],
            total: []
        }};
    },

    render: function () {
        var endpoints = this.state.endpoints;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Enpoints</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="danger">Pending</td>
                        <td className="danger">{ endpoints.pending.length }</td>
                    </tr>
                    <tr>
                        <td>Ready for use</td>
                        <td>{ endpoints.ready.length }</td>
                    </tr>
                    <tr>
                        <td className="warning">In use</td>
                        <td className="warning">{ endpoints.using.length }</td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="active">Total</td>
                        <td className="active">{ endpoints.total.length }</td>
                    </tr>
                    </tbody>
            </table>
        );
    },

    _onChange: function() {
        var _state = StatusStore.getState();
        this.setState({endpoints: _state.endpoints});
    },

    componentWillUnmount: function() {
        StatusStore.removeChangeListener(this._onChange);
    },

    componentDidMount: function() {
        StatusStore.addChangeListener(this._onChange);
    }
});


module.exports.EndpointsStatus = EndpointsStatus;