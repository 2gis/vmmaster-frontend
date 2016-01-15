var React = require('react');
var SessionsActions = require('../actions/SessionsActions').SessionsActions;
var SessionsStore = require('../stores/SessionsStore').SessionsStore;
var addScriptsToHead = require('../utils/Utils').addScriptsToHead;


var ScreenCast = React.createClass({
    getInitialState: function() {
        return {
            session: '',
            saved_video_exist: false,
            vnc_port: null
        };
    },

    _onChangeSession: function() {
        var _state = SessionsStore.getState();

        this.setState({
            session: _state.session,
            saved_video_exist: _state.saved_video_exist,
            vnc_port: _state.vnc_port
        });
    },

    componentWillUnmount: function() {
        SessionsStore.removeChangeListener(this._onChangeSession);
    },

    componentDidMount: function() {
        SessionsStore.addChangeListener(this._onChangeSession);
    },

    render: function () {
        var screencast_type = <div></div>;
        if (this.state.session) {
            if (this.state.session.closed) {
                screencast_type = <SavedVideo session={ this.state.session } saved_video_exist={ this.state.saved_video_exist }/>;
            } else {
                screencast_type = <VncStream session={ this.state.session } vnc_port={ this.state.vnc_port }/>;
            }
        }

        return (
            <div id="screencast" className="text-center tab-pane fade">
                { screencast_type }
            </div>
        );
    }
});


var SavedVideo = React.createClass({
    getInitialState: function () {
        SessionsActions.video_exist_check();
        addScriptsToHead(["/static/js/plyr.js"]);
        return {};
    },

    render: function () {
        var video_reference = "/screenshot/" + this.props.session.id + "/" + this.props.session.id + ".webm";

        if (this.props.saved_video_exist) {
            return (
                <div>
                    <link rel="stylesheet" href="/static/css/plyr.css"></link>
                    <video controls>
                        <source src={ video_reference } type="video/webm"></source>
                        <a href={ video_reference }>Screencast</a>
                    </video>
                </div>
            );
        } else {
            return (
                <div className="well">Screencast has not recorded or not available.</div>
            );
        }
    }
});


var VncStream = React.createClass({
    getInitialState: function () {
        SessionsActions.get_vnc_port();
        addScriptsToHead(["/static/js/vnc.js"]);
        return {};
    },

    calculateStyles: function () {
        var tabs_height = $('.session_tabs').height(),
            info_title_height = $('.info_title').height(),
            window_height = $(window).height() - 100,
            new_height = window_height - tabs_height - info_title_height;

        if (new_height > 600) {
            screencast_size = [800, 600];
            return [{
                'width': 800,
                'height': 600
            }, {
                'top': 200,
                'fontSize': 200
            }];

        } else if (new_height < 400) {
            screencast_size = [600, 400];
            return [{
                'width': 600,
                'height': 400
            }, {
                'top': 150,
                'fontSize': 150
            }];

        } else {
            screencast_size = [new_height * 4 / 3, new_height];
            return [{
                'width': new_height * 4 / 3,
                'height': new_height
            }, {
                'top': new_height * 3 / 10,
                'fontSize': new_height / 4
            }];
        }

    },

    render: function () {
        var play_div_styles = this.calculateStyles()[0],
            play_icon_styles = this.calculateStyles()[1];
        if (this.props.vnc_port) {
            var proxy_action = "javascript: connect(\"" + proxy_vnc_host + "\", " + this.props.vnc_port + ");";
            return (
                <div>
                    <div id="noVNC_screen">
                        <div className="play" style={play_div_styles}>
                            { this.props.session.endpoint_ip ?
                                <a className="text-center glyphicon glyphicon-play" href={ proxy_action } style={play_icon_styles}></a> :
                                <a className="text-center glyphicon glyphicon-play" href="#" style={play_icon_styles}></a>
                            }
                        </div>
                        <canvas id="noVNC_canvas" width="100%" height="auto">
                            Canvas not supported.
                        </canvas>
                        <div id="noVNC_status_bar" className="noVNC_status_bar" style={{marginTop: 0}}>
                            <div style={{width: "100%"}}>
                                <div>
                                    <div>
                                        <div id="noVNC_status" style={{position: "relative", height: "auto"}}></div>
                                    </div>
                                    <div style={{width: "1%"}}>
                                        <div id="noVNC_buttons">
                                            <span id="noVNC_xvp_buttons"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="well">Viewing session is not available.</div>
            );
        }
    }
});


module.exports.ScreenCast = ScreenCast;