var React = require('react');
var SessionsActions = require('../actions/SessionsActions').SessionsActions;
var StepsActions = require('../actions/StepsActions').StepsActions;
var SubStepsActions = require('../actions/SubStepsActions').SubStepsActions;
var SessionsStore = require('../stores/SessionsStore').SessionsStore;
var StepsStore = require('../stores/StepsStore').StepsStore;
var SubStepsStore = require('../stores/SubStepsStore').SubStepsStore;
var formatDateTime = require('../utils/Utils').formatDateTime;


var SessionDescription = React.createClass({
    getInitialState: function() {
        return {
            session: '',
            first_step: '',
            first_sub_step: ''
        };
    },

    _onChangeSession: function() {
        var _state = SessionsStore.getState(),
            first_step = this.state.first_step;

        this.setState({
            session: _state.session,
            first_step: first_step
        });
    },

    _onChangeSteps: function() {
        var _state = StepsStore.getState(),
            session = this.state.session;

        if (_state.steps.length >= 1) {
            this.setState({
                session: session,
                first_step: _state.steps[0]
            });

            if (!_state.first_sub_step && this.state.first_step) {
                SubStepsActions.get_sub_steps_for_step(this.state.first_step.id);
            }
        }
    },

    _onChangeSubSteps: function() {
        var _state = SubStepsStore.getState(),
            session = this.state.session,
            first_step = this.state.first_step;

        this.setState({
            session: session,
            first_step: first_step,
            first_sub_step: _state.first_sub_step[0]
        });
    },

    componentWillUnmount: function() {
        SessionsStore.removeChangeListener(this._onChangeSession);
        StepsStore.removeChangeListener(this._onChangeSteps);
        SubStepsStore.removeChangeListener(this._onChangeSubSteps);
    },

    componentDidMount: function() {
        SessionsStore.addChangeListener(this._onChangeSession);
        StepsStore.addChangeListener(this._onChangeSteps);
        SubStepsStore.addChangeListener(this._onChangeSubSteps);
    },

    render: function () {
        var session = this.state.session,
            first_step = this.state.first_step,
            first_sub_step = this.state.first_sub_step;

        return (
            <div id="description" className="tab-pane fade">
                <div className="session_info_panel">
                <InfoPanel session={ session } first_step={ first_step } first_sub_step={ first_sub_step }/>
                </div>
            </div>
        );
    }
});


var InfoPanel = React.createClass({
    description: function () {
        var desc = {
                "status_message": '',
                "session_error": '',
                "started": '',
                "ended": '',
                "duration": '',
                "username": '',
                "platform": '',
                "java": '',
                "browser": '',
                "selenium": ''
            },
            session = this.props.session,
            first_step = this.props.first_step,
            first_sub_step = this.props.first_sub_step;

        if (session) {
            if (session.endpoint_name) {
                if (session.status == "waiting") {
                    desc.status_message = "Starting on " + session.endpoint_name + " ...";
                } else {
                    desc.status_message = "Started on " + session.endpoint_name;
                }
            } else {
                desc.status_message = "Waiting for endpoint...";
            }

            if (session.deleted) {
                desc.ended = formatDateTime(session.deleted);
            }

            desc.duration = session.duration ? session.duration : '';
            desc.username = session.username ? session.username : '';
            desc.started = formatDateTime(session.created);
            desc.session_error = session.error;
        }

        if (first_step && first_step.response) {
            var dc = JSON.parse(first_step.response.body).value;
            desc.browser = dc.version && dc.browserName ? dc.browserName + " " + dc.version : '';

            if (first_sub_step) {
                var sub_step_dc = JSON.parse(first_sub_step.response.body).value;
                desc.java = sub_step_dc.java.version ? 'Java ' + sub_step_dc.java.version : '';
                desc.platform = dc.platform && sub_step_dc.os.version ? dc.platform + " " + sub_step_dc.os.version : '';
                desc.selenium = sub_step_dc.build.version ? 'Selenium ' + sub_step_dc.build.version : '';
            }
        }

        return desc;
    },

    errorMsg: function (error) {
        if (error) {
            return (
                <div className="row _info_error">
                    <div className="col-lg-12">
                        <pre className="alert alert-danger">{ error }</pre>
                    </div>
                </div>
            );
        }
    },

    render: function () {
        var session = this.props.session,
            description = this.description();

        return (
            <div>
                <div className="row">
                    <div className="col-xs-10">
                        <h3>Session status</h3>
                        <p>{ description.status_message }</p>
                    </div>
                    <div className="col-xs-5">
                        <h3>Environment</h3>
                        <p><strong>Platform: </strong>{ description.platform }</p>
                        <p><strong>Browser: </strong>{ description.browser }</p>
                        <p><strong>Java Version: </strong>{ description.java }</p>
                        <p><strong>Selenium Version: </strong>{ description.selenium }</p>
                    </div>
                    <div className="col-xs-5">
                        <h3>Other</h3>
                        <p><strong>Owner</strong> { description.username }</p>
                        <p><strong>Started</strong> { description.started }</p>
                        <p><strong>Ended</strong> { description.ended }</p>
                        <p><strong>Duration</strong> { description.duration } sec.</p>
                    </div>
                </div>

                { this.errorMsg(description.session_error) }
            </div>
        )
    }
});


module.exports.SessionDescription = SessionDescription;