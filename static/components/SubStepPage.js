var React = require('react');
var ReactDOM = require('react-dom');
var SingleStep = require('./Step').SingleStep;
var SubStepsActions = require('../actions/SubStepsActions').SubStepsActions;
var SubStepsStore = require('../stores/SubStepsStore').SubStepsStore;


var SubStepPage = React.createClass({
    getDefaultProps: function () {
        SubStepsActions.get_substep_by_id();
    },

    getInitialState: function() {
        return {
            substep: null
        };
    },

    _onChange: function() {
        var _state = SubStepsStore.getState();

        this.setState({
            substep: _state.substeps[0]
        });
    },

    componentWillUnmount: function() {
        SubStepsStore.removeChangeListener(this._onChange);
    },

    componentDidMount: function() {
        SubStepsStore.addChangeListener(this._onChange);
    },

    render: function () {
        if (this.state.substep) {
            return (
                <div>
                    <SingleStep step={this.state.substep}/>
                    <div id="photo_gallery"></div>
                </div>
            );
        }

        return null;
    }
});


ReactDOM.render(<SubStepPage />, document.getElementById('content'));