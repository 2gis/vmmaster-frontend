var React = require('react');
var SessionsActions = require('../actions/SessionsActions').SessionsActions;
var StepsActions = require('../actions/StepsActions').StepsActions;
var SubStepsActions = require('../actions/SubStepsActions').SubStepsActions;
var SessionsStore = require('../stores/SessionsStore').SessionsStore;
var StepsStore = require('../stores/StepsStore').StepsStore;
var SubStepsStore = require('../stores/SubStepsStore').SubStepsStore;
var calculatePadding = require('../utils/Utils').calculatePadding;
var statusIcon = require('./Session').statusIcon;


var change_tab_from_url = function () {
    if (window.location.hash) {
        var tab_for_open = window.location.hash.replace("#", "");
        $("." + tab_for_open).click();
    }
};


var SessionInfo = React.createClass({
    getInitialState: function() {
        return {
            session: ''
        };
    },

    _onChangeSession: function() {
        var _state = SessionsStore.getState();

        this.setState({
            session: _state.session
        });
    },

    componentWillUnmount: function() {
        SessionsStore.removeChangeListener(this._onChangeSession);
    },

    componentDidMount: function() {
        SessionsStore.addChangeListener(this._onChangeSession);
    },

    componentDidUpdate: function () {
        calculatePadding();
    },

    render: function () {
        var session = this.state.session,
            session_status_class = "label label-" + statusIcon(session.status);

        if (session) {
            return (
                <div className="session_info_panel">
                    <div className="session_info panel">
                        <div className="row _info_title">
                            <ul className="list-inline">
                                <li className="session_column session_status">
                                    <span className={ session_status_class }>{ session.status }</span>
                                </li>
                                <li className="session_column session_name">
                                    <h4>{ session.name } <small>{ session.id }</small></h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <SessionTabs session={ session }/>
                </div>
            );
        }

        return null;

    }
});


var SessionTabs = React.createClass({
    screencastTab: function (session) {
        if (!session.closed || session.take_screencast) {
            return (
                <li>
                    <a data-toggle="tab" href="#screencast" className="screencast" onClick={this.handleClick}>Video</a>
                </li>
            );
        }
    },

    handleClick: function () {
        window.location.hash = $(".nav-tabs .active a")[0].href.split("/").pop();
    },

    componentDidMount: function () {
        change_tab_from_url();
    },

    render: function () {
        var session = this.props.session;
        return (
            <div className="session_tabs">
                <ul id="mtabs" className="nav nav-tabs">
                    <li><a data-toggle="tab" href="#description" className="description" onClick={this.handleClick}>Description</a></li>
                    <li className="active"><a data-toggle="tab" href="#steps" className="steps" onClick={this.handleClick}>Steps</a></li>
                    <li><a data-toggle="tab" href="#selenium_log" className="selenium_log" onClick={this.handleClick}>Selenium Log</a></li>
                    { this.screencastTab(session) }
                </ul>
            </div>
        );
    }
});


var ExpandButton = React.createClass({
    componentDidMount: function () {
        change_tab_from_url();
    },

    render: function () {
        return (
            <div className="expand_all_button">
                <a type="button" className="btn btn-default"
                   href="javascript: expand_all()">Expand all tests</a>
            </div>
        );
    }
});


var Snippets = React.createClass({
    render: function () {
        return (
            <div className="step_snippet">
                { this.props.children }
            </div>
        );
    }
});


module.exports.SessionInfo = SessionInfo;
module.exports.Snippets = Snippets;
module.exports.ExpandButton = ExpandButton;