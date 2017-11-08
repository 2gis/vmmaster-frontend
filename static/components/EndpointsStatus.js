var React = require('react');
var StatusActions = require('../actions/StatusActions').StatusActions;
var StatusStore = require('../stores/StatusStore').StatusStore;


var EndpointsStatus = React.createClass({
    getDefaultProps: function () {
        StatusActions.get_endpoints();
    },

    getInitialState: function () {
        return {endpoints: {
            using: 0,
            on_service: 0,
            wait_for_service: 0,
            pool: 0,
            total: 0
        }};
    },

    render: function () {
        var endpoints = this.state.endpoints;
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Endpoints</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="info">Wait for service</td>
                        <td className="info">{ endpoints.wait_for_service }</td>
                    </tr>
                    <tr>
                        <td className="danger">On service</td>
                        <td className="danger">{ endpoints.on_service }</td>
                    </tr>
                    <tr>
                        <td>Ready for use</td>
                        <td>{ endpoints.pool }</td>
                    </tr>
                    <tr>
                        <td className="warning">In use</td>
                        <td className="warning">{ endpoints.using }</td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> </td>
                    </tr>
                    <tr>
                        <td className="active">Total</td>
                        <td className="active">{ endpoints.total }</td>
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
        StatusStore.removeChangeListener("endpoints", this._onChange);
    },

    componentDidMount: function() {
        StatusStore.addChangeListener("endpoints", this._onChange);
    },

    componentDidUpdate: function () {
        setTimeout(function() {
          StatusActions.get_endpoints();
        }, 10000);
    }
});


module.exports.EndpointsStatus = EndpointsStatus;