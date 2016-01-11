var React = require('react');
var ReactDOM = require('react-dom');
var SingleStep = require('./Step').SingleStep;
var StepsActions = require('../actions/StepsActions').StepsActions;
var StepsStore = require('../stores/StepsStore').StepsStore;


var StepPage = React.createClass({
    getDefaultProps: function () {
        StepsActions.get_step_by_id();
    },

    getInitialState: function() {
        return {
            step: null
        };
    },

    _onChange: function() {
        var _state = StepsStore.getState();

        this.setState({
            step: _state.steps[0]
        });
    },

    componentWillUnmount: function() {
        StepsStore.removeChangeListener(this._onChange);
    },

    componentDidMount: function() {
        StepsStore.addChangeListener(this._onChange);
    },

    render: function () {
        if (this.state.step) {
            return (
                <div>
                    <SingleStep step={this.state.step}/>
                    <div id="photo_gallery"></div>
                </div>
            );
        }

        return null;
    }
});


ReactDOM.render(<StepPage />, document.getElementById('content'));