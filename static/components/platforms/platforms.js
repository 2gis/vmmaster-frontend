var Platform = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{ this.props.platform }</td>
            </tr>
        );
    }
});

var Platforms = React.createClass({
    getInitialState: function () {
        var platforms = [];
        this.getPlatforms(function (self, data) {
            if (data) {
                platforms = data.map(function(platform, index) {
                    return <Platform key={index} platform={platform} />
                });
                self.setState({platforms: platforms});
            }
        });

        return {platforms: <tr><td>No platforms</td></tr>};
    },

    getPlatforms: function (callback) {
        var url = domain + '/api/v1/platforms';
        var self = this;
        $.getJSON(url)
        .done(function (data) {
            callback(self, data.platforms);
        });
    },

    render: function () {
        return (
            <table className="table table-condensed table-striped">
            <caption>platforms</caption>
                <tbody>
                    {this.state.platforms}
                </tbody>
            </table>
        );
    }
});