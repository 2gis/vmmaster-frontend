var React = require('react');
var ReactDOM = require('react-dom');
var getSessionId = require('../utils/Utils').getSessionId;
var prettyJson = require('../utils/Utils').prettyJson;
var PhotoGallery = require('./PhotoGallery').PhotoGallery;
var StepsActions = require('../actions/StepsActions').StepsActions;


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


var handleIconClick = function (stepId) {
    var step = $('#' + stepId);
    $('.expand .glyphicon.expandglyph', step).toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
    var opened = step.hasClass('opened');
    if (opened) {
        $('.info', step).html("");
        step.removeClass('opened');
    } else {
        var url = document.location.origin + document.location.pathname + 'inline_step/' + stepId + '/';
        $.get(url, function (data) {
            $('.info', step).html(data);
        });
        step.addClass('opened');
    }
};


var handleScreenshotClick = function (stepId) {
    ReactDOM.render(
        <PhotoGallery start_screenshot={ stepId } />,
        document.getElementById('photo_gallery')
    );
};


var InlineStep = React.createClass({
    handleScreenClick: function () {
        handleScreenshotClick(this.props.step.id);
    },

    handleIconClick: function () {
        handleIconClick(this.props.step.id)
    },

    render: function () {
        var step = this.props.step,
            session_id = getSessionId(),
            step_ref = "step/" + step.id,
            step_class = "log_step " + getStepStatus(step.response),
            icon_class = "glyphicon " + icon(step),
            screenshot_src = "/screenshot/" + session_id + "/" + step.id + "_thumb.png";

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
                { step.screenshot?
                    <a onClick={ this.handleScreenClick } href="#">
                        <img src={ screenshot_src }></img>
                    </a>:''
                }
                </div>
                <div className="info"></div>
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