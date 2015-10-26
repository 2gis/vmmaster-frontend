var TokenForm = React.createClass({
    getInitialState: function() {
        return {token: this.props.token};
    },

    handleChange: function() {
        //
    },

    handleClick: function() {
        var url = domain + '/api/v1/user/generate_token',
            self = this;

        $.getJSON(url)
        .done(function (data) {
            self.setState({token: data.token});
            console.log(data.token);
        });
    },

    render: function() {
        return (
            <td>
                <input className="token form-control" value={ this.state.token } onChange={this.handleChange}></input><br></br>
                <a className="btn btn-danger btn-sm regenerate-token" role="button" onClick={this.handleClick}>Regenerate token</a>
            </td>
        );
    }
});

var UserInfo = React.createClass({
    getInitialState: function () {
        this.getUserToken(function (self, data) {
            self.setState({ui: <TokenForm token={data.token} />});
        });

        return {ui: ''};
    },

    getUserToken: function (callback) {
        var url = domain + '/api/v1/user/token';
        var self = this;
        $.getJSON(url)
        .done(function (data) {
            callback(self, data);
        });
    },

    render: function () {
        return (
            <table className="table table-condensed table-striped">
                <caption>your token</caption>
                <tbody>
                    <tr>
                        {this.state.ui}
                    </tr>
                </tbody>
            </table>
        );
    }
});