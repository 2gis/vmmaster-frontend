var React = require('react');
var ReactDOM = require('react-dom');
var PlatformsActions = require('../actions/PlatformsActions').PlatformsActions;
var PlatformsStore = require('../stores/PlatformsStore').PlatformsStore;


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
    getDefaultProps: function () {
        PlatformsActions.get_platforms();
    },

    getInitialState: function () {
        return {platforms: <tr><td>No platforms</td></tr>};
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
    },

    _onChange: function() {
        var _state = PlatformsStore.getState();
        var platforms = _state.platforms.map(function(platform, index) {
            return <Platform key={index} platform={platform} />
        });

        this.setState({platforms: platforms});
    },

    componentWillUnmount: function() {
        PlatformsStore.removeChangeListener(this._onChange);
    },

    componentDidMount: function() {
        PlatformsStore.addChangeListener(this._onChange);
    }
});


module.exports.Platform = Platform;
module.exports.Platforms = Platforms;