var React = require('react');
var ProvidersActions = require('../actions/ProvidersActions').ProvidersActions;
var ProvidersStore = require('../stores/ProvidersStore').ProvidersStore;


var DcBrowser = React.createClass({
    render: function () {
        var versionLen = this.props.browser.versions.length;
        var versionsList = this.props.browser.versions.map(function(version, i){
            if (versionLen === i + 1) {
                var versionStripped = version.split(".")[0]
            } else {
                var versionStripped = version.split(".")[0].concat(", ")
            }
            return (
                <span key={ i }>{ versionStripped }</span>
            );
        })

        return (
            <tr>
                <td>{ this.props.browser.browser_name }</td>
                <td>
                    { versionsList }
                </td>
            </tr>
        );
    }
});

var DcGroup = React.createClass({
    render: function () {
        var browsersList = this.props.dcGroup.browsers.map(function(browser, index) {
            return <DcBrowser key={index} browser={browser} />
        });

        return (
            <tr>
                <td className="no-top-border">
                    <table className="table table-condensed table-striped">
                        <tbody>
                            <tr>
                                <th className="info" colSpan="2">{ this.props.dcGroup.platform_name }</th>
                            </tr>
                            { browsersList }
                        </tbody>
                    </table>
                </td>
            </tr>
        );
    }
});

var ProvidersDC = React.createClass({
    getDefaultProps: function () {
        ProvidersActions.get_providers_dc();
    },

    getInitialState: function () {
        return {results: <tr><td>No platforms</td></tr>};
    },

    render: function () {
        return (
            <table className="table table-condensed">
            <caption>Desired Capabilities</caption>
                <tbody>
                    {this.state.results}
                </tbody>
            </table>
        );
    },

    _onChange: function() {
        var _state = ProvidersStore.getState();
        var providersDC = _state.providersDC.map(function(dc, index) {
            return <DcGroup key={index} dcGroup={dc} />
        });

        this.setState({results: providersDC});
    },

    componentWillUnmount: function() {
        ProvidersStore.removeChangeListener(this._onChange);
    },

    componentDidMount: function() {
        ProvidersStore.addChangeListener(this._onChange);
    }
});


module.exports.DcGroup = DcBrowser;
module.exports.DcGroup = DcGroup;
module.exports.ProvidersDC = ProvidersDC;
