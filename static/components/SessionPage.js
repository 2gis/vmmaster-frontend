var React = require('react');
var ReactDOM = require('react-dom');
var Steps = require('./Steps').Steps;
var SessionInfo = require('./SessionInfo').SessionInfo;
var ScreenCast = require('./ScreenCast').ScreenCast;
var $ = require('jquery');


ReactDOM.render(<SessionInfo />, document.getElementById('session_info_panel'));
ReactDOM.render(<Steps />, document.getElementById('steps'));
ReactDOM.render(<ScreenCast />, document.getElementById('screencast'));