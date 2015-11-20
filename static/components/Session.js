var React = require('react');
var ReactDOM = require('react-dom');


var Session = React.createClass({

    statusIcon: function (status) {
        if (status == 'waiting') {
            return 'default'
        } else if (status == 'running') {
            return 'warning'
        } else if (status == 'failed') {
            return 'danger'
        } else {
            return 'success'
        }
    },

    viewIcon: function (session) {
        if (!session.closed && session.status == 'running') {
            return "glyphicon-eye-open";
        } else {
            if (session.closed && session.take_screencast) {
                return "glyphicon-film";
            } else {
                return "glyphicon-none"
            }
        }
    },

    formatError: function (session) {
        var error = '';
        if (session.status == 'failed' && session.error) {
            error = session.error.split('\n');
            if (error[error.length-1] == '') {
                error = error[error.length-2]
            } else {
                error = error[error.length-1]
            }
        }
        return error
    },

    formatDateTime: function (date_string) {
        if (date_string) {
            var date = new Date(date_string).toGMTString().split(',')[1];
            return date.split('GMT')[0]
        } else {
            return '';
        }
    },

    render: function () {
        var label = 'label label-' + this.statusIcon(this.props.session.status),
            session_id = '/session/' + this.props.session.id,
            icon = 'glyphicon ' + this.viewIcon(this.props.session),
            error = this.formatError(this.props.session),
            created_date = this.formatDateTime(this.props.session.created),
            link = "/session/" + this.props.session.id + "#screencast";
        return (
            <tr className="session_row" href={session_id} >
                <td className="session_column session_status">
                    <span className={label}>{ this.props.session.status }</span>
                </td>
                <td className="session_column session_name">
                    <a href={session_id}>{ this.props.session.name }</a>
                </td>
                <td className="session_column session_date">{ created_date }</td>
                <td className="session_column session_error" data-toggle="tooltip" title={ this.props.session.error }>
                    <a href={link} title="show screencast">
                        <span className={icon}></span>
                    </a>
                    <span> </span>
                    {this.props.session.error?<span className="label label-danger">{error}</span>:''}
                </td>
            </tr>
        );
    }
});


module.exports.Session = Session;