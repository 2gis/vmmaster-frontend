var React = require('react');
var SessionsActions = require('../actions/SessionsActions').SessionsActions;
var SessionsStore = require('../stores/SessionsStore').SessionsStore;


var SeleniumLog = React.createClass({
    getInitialState: function() {
        return {
            session: '',
            selenium_log: ''
        };
    },

    _onChangeSession: function() {
        var _state = SessionsStore.getState();

        this.setState({
            session: _state.session,
            selenium_log: _state.selenium_log
        });
    },

    componentWillUnmount: function() {
        SessionsStore.removeChangeListener(this._onChangeSession);
    },

    componentDidMount: function() {
        SessionsStore.addChangeListener(this._onChangeSession);
    },

    render: function () {
        return (
            <div id="selenium_log" className="text-center tab-pane fade">
                <SeleniumLogText session={ this.state.session } selenium_log={ this.state.selenium_log }/>
            </div>
        );
    }
});


var SeleniumLogText = React.createClass({
    getInitialState: function () {
        SessionsActions.get_selenium_log();
        return {};
    },

    render: function () {
        if (this.props.session && this.props.session.closed) {
            if (this.props.selenium_log.length != 0) {
                return (
                    <div id="selenium_log_content">
                        <pre className="well">{ this.props.selenium_log }</pre>
                    </div>
                );
            } else {
                return (
                    <div className="well">No selenium log.</div>
                );
            }
        } else {
            return (
                <div className="well">Waiting selenium log...</div>
            );
        }
    }
});


module.exports.SeleniumLog = SeleniumLog;