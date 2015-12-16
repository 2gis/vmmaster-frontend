var React = require('react');
var getSessionId = require('../utils/Utils').getSessionId;


var getStepStatus = function (code) {
    var status = 'unknown';

    if (code) {
        if (code.startsWith("5")) {
            status = "error";
        } else if (code.startsWith("2")) {
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


var Step = React.createClass({
    icon: function (step) {
        if (step.substeps) {
            return "expandglyph glyphicon-chevron-right"
        } else {
            return "glyphicon-none"
        }
    },

    handleIconClick: function () {
        var stepId = this.props.step.id,
            step = $('#' + stepId);
        $('.expand .glyphicon.expandglyph', step).toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
        var opened = step.hasClass('opened');
        if (opened) {
            $('.info', step).html("");
            step.removeClass('opened');
        } else {
            var url = document.location.origin + document.location.pathname + 'step/' + stepId + '/';
            $.get(url, function (data) {
                $('.info', step).html(data);
            });
            step.addClass('opened');
        }
    },

    render: function () {
        var step = this.props.step,
            session_id = getSessionId(),
            step_ref = "session_step/" + step.id,
            step_class = "log_step " + getStepStatus(step.response_status),
            icon_class = "glyphicon " + this.icon(step),
            screenshot_href = "javascript:photor_show(" + step.id + ")",
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
                    <a href={ screenshot_href }>
                        <img src={ screenshot_src }></img>
                    </a>:''
                }
                </div>
                <div className="info"></div>
            </div>
        );
    }
});


module.exports.Step = Step;
module.exports.getStepStatus = getStepStatus;
module.exports.truncateString = truncateString;