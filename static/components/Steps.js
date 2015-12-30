var React = require('react');
var Step = require('./Step').Step;
var LabelStep = require('./LabelStep').LabelStep;
var getSessionId = require('../utils/Utils').getSessionId;
var StepsActions = require('../actions/StepsActions').StepsActions;
var StepsStore = require('../stores/StepsStore').StepsStore;
var InfiniteScroll = require('./InfiniteScroll').InfiniteScroll;
var reloadSteps = require('../stores/StepsStore').reloadSteps;
var WebSockets = require('ws');


var NoSteps = React.createClass({
    render: function () {
        return (
            <div className="log_step">
                <div className="well">Steps not found</div>
            </div>
        )
    }
});


var Steps = React.createClass({
    getDefaultProps: function () {
        reloadSteps();
    },

    getInitialState: function() {
        return {
            steps: [],
            json_steps: [],
            hasMore: true,
            offset: 10,
            query: '',
            ws: new WebSockets('ws://' + window.location.host.split(':')[0] + ':8001/steps')}
    },

    handleInfiniteLoad: function(offset) {
        setTimeout(function () {
            StepsActions.change_page(this.state.offset+100)
        }.bind(this), 400);
    },

    getList: function (steps_data) {
        var groups = this.groupify(steps_data),
            steps_list = [];

        for (var key in groups) {
            var steps = groups[key];

            if (~steps[0].control_line.indexOf("vmmasterLabel")) {
                var label_step = steps[0];
                steps = steps.slice(1).map(function(step) {
                    return <Step key={step.id} step={step}/>
                });
                steps_list.push(<LabelStep key={label_step.id} step={label_step}>{steps}</LabelStep>);
            } else {
                steps.forEach(function(step, i , arr) {
                    steps_list.push(<Step key={step.id} step={step}/>);
                });
            }
        }
        return steps_list;
    },

    _onChange: function() {
        var _state = StepsStore.getState(),
            steps = this.getList(_state.steps);

        this.setState({
            steps: steps,
            json_steps: _state.steps,
            hasMore: _state.hasMore,
            offset: _state.offset,
            query: _state.query
        });
    },

    componentWillUnmount: function() {
        StepsStore.removeChangeListener(this._onChange);
        this.state.ws.close();
    },

    componentWillMount: function () {
        var ws = this.state.ws,
            self = this;
        ws.addEventListener('open', function open() {
            console.log('Websocket connected');
            self.sendState();
        });
        ws.addEventListener('message', function incoming(event) {
            var data = event.data.split('#vmmaster_wsmessage#'),
                steps = JSON.parse(data[1]);

            console.log('Websocket incoming msg type: ', data[0]);
            if (data[0] == 'new') {
                StepsActions.found_new_steps(steps);
            } else {
                StepsActions.update_steps(steps);
            }

        });
        ws.addEventListener('close', function close() {
            console.log('Websocket disconnected');
        });
    },

    componentDidMount: function() {
        StepsStore.addChangeListener(this._onChange);
    },

    componentDidUpdate: function () {
        if (this.state.ws.readyState == 1) {
            this.sendState();
        }
    },

    sendState: function () {
        var _state = this.state,
            current_state = JSON.stringify({
                steps: _state.json_steps,
                offset: _state.offset,
                query: _state.query
            });
        this.state.ws.send(current_state);
        console.log('State was updated and send new state to watching service')
    },

    getLabelStep: function (string) {
        var request = string.split(" "),
            label_class = "";

        if (request[0] == "POST" && request[1].endsWith("/vmmasterLabel")){
            label_class = 'label';
        }

        return label_class;
    },

    groupify: function (steps) {
        var steps_groups = {},
            current_label = 0;

        for (var key in steps) {
            var step = steps[key];
            if (this.getLabelStep(step.control_line) == 'label') {
                current_label += 1
            }

            if (!steps_groups[current_label]){
                steps_groups[current_label] = []
            }

            steps_groups[current_label].push(step);
        }

        return steps_groups;
    },

    render: function () {
        var steps = <NoSteps />;
        if (this.state.steps.length != 0) {
            steps = <InfiniteScroll
                        divMode={true}
                        offsetStart={0}
                        loadMore={this.handleInfiniteLoad}
                        loader={<div className="log_step"><span className="loader"></span></div>}
                        hasMore={this.state.hasMore}
                        threshold={250}>
                        { this.state.steps }
                    </InfiniteScroll>
        }

        return (
            <div id="steps" className="tab-pane fade in active">
                { steps }
            </div>
        );
    }
});


module.exports.Steps = Steps;