var React = require('react');
var ReactDOM = require('react-dom');
var Steps = require('./Steps').Steps;
var SessionInfo = require('./SessionInfo').SessionInfo;
var $ = require('jquery');


ReactDOM.render(<SessionInfo />, document.getElementById('session_info_panel'));
ReactDOM.render(<Steps />, document.getElementById('steps'));