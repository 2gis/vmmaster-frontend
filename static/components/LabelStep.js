var React = require('react');
var truncateString = require('./Step').truncateString;


var LabelStep = React.createClass({
    extractLabel: function (string) {
        var body = JSON.parse(string);
        return body.label;
    },

    render: function () {
        var step = this.props.step,
            step_ref = "javascript: open_group('" + step.id + "')",
            step_label = this.extractLabel(step.body);

        return (
            <div id={ step.id } className="log_step label_group">
                <a href={ step_ref } title={ step_label }>
                    <h4 className="group_log_step">{ truncateString(step_label, 80) }</h4>
                </a>
                <div className="group _disabled">
                    { this.props.children }
                </div>
            </div>
        );
    }
});


module.exports.LabelStep = LabelStep;