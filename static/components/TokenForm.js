var React = require('react');
var UserInfoActions = require('../actions/UserInfoActions').UserInfoActions;
var UserInfoStore = require('../stores/UserInfoStore').UserInfoStore;


var TokenForm = React.createClass({
    getDefaultProps: function () {
        UserInfoActions.get_token();
    },

    getInitialState: function() {
        return UserInfoStore.getState();
    },

    handleClick: function (e) {
        e.preventDefault();
        UserInfoActions.regenerate_token();
    },

    handleChange: function() {
        //
    },

    render: function() {
        var tokenStyle = {
            textAlign: 'center'
        };
        return (
            <tr>
                {this.state.token?<td>
                    <div style={tokenStyle}>your token</div>
                    <input className="token form-control" value={ this.state.token } onChange={this.handleChange}></input><br></br>
                    <div className="btn btn-danger btn-sm regenerate-token" onClick={this.handleClick}>Regenerate token</div>
                </td>:null}
            </tr>
        );
    },

    _onChange: function() {
        this.setState(UserInfoStore.getState());
    },

    componentWillUnmount: function() {
        UserInfoStore.removeChangeListener(this._onChange);
    },

    componentDidMount: function() {
        UserInfoStore.addChangeListener(this._onChange);
    }
});

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


module.exports.TokenForm = TokenForm;
module.exports.UserInfo = UserInfo;