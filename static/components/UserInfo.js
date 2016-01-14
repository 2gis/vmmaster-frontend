var React = require('react');
var TokenForm = require('./TokenForm').TokenForm;


var UserInfo = React.createClass({
    render: function () {
        return (
            <table className="table table-condensed table-striped">
                <tbody>
                <TokenForm />
                </tbody>
            </table>
        );
    }
});


module.exports.UserInfo = UserInfo;