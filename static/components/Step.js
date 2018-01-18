var React = require('react');
var ReactDOM = require('react-dom');
var getSessionId = require('../utils/Utils').getSessionId;
var prettyJson = require('../utils/Utils').prettyJson;
var PhotoGallery = require('./PhotoGallery').PhotoGallery;
var SubStepsActions = require('../actions/SubStepsActions').SubStepsActions;
var SubStepsStore = require('../stores/SubStepsStore').SubStepsStore;
var $ = require('jquery');


var getStepStatus = function (response) {
    var status = 'unknown';

    if (response && response.status) {
        if (response.status.startsWith("5")) {
            status = "error";
        } else if (response.status.startsWith("2")) {
            status = "success";
        }
    }

    return status;
};


var truncateString = function (string, max_size) {
    if (string.length > max_size) {
        string = string.substr(0, max_size/2) + "..." + string.substr(-max_size/2)
    }

    return string;
};


var icon = function (step) {
    if (step.substeps) {
        return "expandglyph glyphicon-chevron-right"
    } else {
        return "glyphicon-none"
    }
};


var handleScreenshotClick = function (stepId) {
    ReactDOM.render(
        <PhotoGallery start_screenshot={ stepId } />,
        document.getElementById('photo_gallery')
    );
};


var SubStepsBlock = React.createClass({
    render: function () {
        var substep_href = "step/" + this.props.step_id + "/sub_step/" + this.props.substep.id;
        return (
            <pre>
                <span>Step: <a href={substep_href}>{ this.props.substep.control_line }</a></span><br/>
                <span>Time: { this.props.substep.duration } sec</span>
            </pre>
        );
    }
});

var SubStepsList = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});


var InlineStep = React.createClass({
    getInitialState: function() {
        return {
            substeps: null
        };
    },

    handleScreenClick: function () {
        handleScreenshotClick(this.props.step.id);
    },

    handleIconClick: function () {
        if (!this.state.substeps) {
            SubStepsActions.get_sub_steps_for_step(this.props.step.id);
        }

        var htmlstep = $('#' + this.props.step.id),
            substep_block = $('#substeps_inline'),
            opened = htmlstep.hasClass('opened');

        $('.expand .glyphicon.expandglyph', htmlstep).toggleClass('glyphicon-chevron-down glyphicon-chevron-right');

        if (opened) {
            htmlstep.removeClass('opened');
            substep_block.hide();
        } else {
            htmlstep.addClass('opened');
            substep_block.show();
        }
    },

    _onChangeSubSteps: function() {
        var _state = SubStepsStore.getState(),
            step_id = this.props.step.id,
            new_substeps = _state.first_sub_step.map(function(substep) {
            return <SubStepsBlock key={substep.id} substep={substep} step_id={step_id}/>;
        });

        this.setState({
            substeps: new_substeps
        });
    },

    componentWillUnmount: function() {
        if (this.props.step.substeps) {
            SubStepsStore.removeChangeListener(this._onChangeSubSteps);
        }
    },

    componentDidMount: function() {
        if (this.props.step.substeps) {
            SubStepsStore.addChangeListener(this._onChangeSubSteps);
        }
    },

    render: function () {
        var step = this.props.step,
            session_id = getSessionId(),
            step_ref = "step/" + step.id,
            step_class = "log_step " + getStepStatus(step.response),
            icon_class = "glyphicon " + icon(step),
            screenshot_src = "/storage/" + session_id + "/" + step.id + "_thumb.png";

        return (
            <div id={ step.id } className={ step_class }>
                <div className="expand log_step_column">
                    <div className={ icon_class } onClick={ this.handleIconClick }></div>
                </div>
                <a href={ step_ref } title={ step.control_line }>
                    <div className="log_step_column log_request">{ truncateString(step.control_line, 40) }</div>
                </a>
                <div className="log_step_column log_body" data-toggle="tooltip" title={ step.body }>{ truncateString(step.body, 40) }</div>
                <div className="log_step_column log_time">{ step.duration } sec.</div>
                <div id="screenshot" className="log_step_column log_screenshot">
                { step.take_screenshot?
                    <a onClick={ this.handleScreenClick } href="#">
                        <img src={ screenshot_src }></img>
                    </a>:''
                }
                </div>
                <div className="info" id="substeps_inline" style={{display: 'none'}}>
                    { this.state.substeps
                        ?
                        <SubStepsList>{this.state.substeps}</SubStepsList>
                        :
                        <pre key="0">Loading...</pre>
                    }
                </div>
            </div>
        );
    }
});


var SingleStep = React.createClass({
    handleScreenClick: function () {
        handleScreenshotClick(this.props.step.id);
    },

    render: function () {
        var step = this.props.step,
            session_id = getSessionId(),
            screenshot_src = "/screenshot/" + session_id + "/" + step.id + "_thumb.png";

        return (
            <div className="row">
                <div className="col-md-10">
                    <div id="log_step">
                        <div className="log_step_request info">{ step.control_line }</div>
                        <pre style={{padding: '5px', margin: '5px'}}>{ prettyJson(step.body) }</pre>
                        {
                            step.response
                            ?
                            <div>
                                <div className="log_step_request info">{ step.response.status }</div>
                                <pre style={{padding: '5px', margin: '5px'}}>{ prettyJson(step.response.body) }</pre>
                            </div>
                            :
                            <pre style={{padding: '5px', margin: '5px'}}>No response</pre>
                        }
                    </div>
                </div>
                <div className="col-md-2" style={{padding: '10px'}}>
                { step.screenshot?
                    <a onClick={ this.handleScreenClick } href="#">
                        <img src={ screenshot_src }></img>
                    </a>:''
                }
                </div>
            </div>
        );
    }
});



module.exports.Step = InlineStep;
module.exports.SingleStep = SingleStep;
module.exports.getStepStatus = getStepStatus;
module.exports.truncateString = truncateString;