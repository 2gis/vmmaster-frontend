var React = require('react');
var SessionsActions = require('../actions/SessionsActions').SessionsActions;
var SessionsStore = require('../stores/SessionsStore').SessionsStore;
var addScriptsToHead = require('../utils/Utils').addScriptsToHead;


var ScreenCast = React.createClass({
    getInitialState: function() {
        return {
            session: '',
            vnc_port: null,
            current_view: <div className="well">Please waiting...</div>,
        };
    },

    _onChangeSession: function() {
        var _state = SessionsStore.getState();
        var screencast_type = <div className="well">Screencast has not recorded. For recording set "takeScreencast" (Selenium DesiredCapabilities property) to "True".</div>;

        if (_state.session) {
            if (_state.session.closed && _state.session.take_screencast) {
                screencast_type = <SavedVideo session={ _state.session }/>;
            } else if (_state.session.status === "running") {
                screencast_type = <VncStream session={ _state.session } vnc_port={ _state.vnc_port }/>;
            }
        }

        this.setState({
            session: _state.session,
            vnc_port: _state.vnc_port,
            current_view: screencast_type,
        });
    },

    componentWillUnmount: function() {
        SessionsStore.removeChangeListener(this._onChangeSession);
    },

    componentDidMount: function() {
        SessionsStore.addChangeListener(this._onChangeSession);
    },

    render: function () {
        return (
            <div id="screencast" className="text-center tab-pane fade">
                { this.state.current_view }
            </div>
        );
    }
});


var SavedVideo = React.createClass({
    getInitialState: function () {
        addScriptsToHead([
            "/static/js/video.js",
            "/static/js/videojs-vlc.js",
            "/static/js/videojs-ie8.min.js"
        ]);
        return {};
    },

    render: function () {
        var video_reference = "/storage/" + this.props.session.id + "/video.mkv";

        return (
            <div>
                <link href="/static/css/video-js.css" rel="stylesheet"></link>
                <video style={{display: "block"}} id="vmmaster-video" className="video-js vjs-big-play-centered vjs-styles-dimensions" controls preload="auto" data-setup='{ "techOrder": ["vlc"] }'>
                    <source src={ video_reference } type='video/mp4'></source>
                    <p className="vjs-no-js">
                      To view this video please enable JavaScript, and consider upgrading to a web browser that
                        <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
                    </p>
                </video>
            </div>
        );
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
            screencast_size = [600, 600];
            return [{
                'width': 600,
                'height': 400
            }, {
                'top': 150,
                'fontSize': 75
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
        // if delete this variables then vnc stream will be broken
        var play_div_styles = this.calculateStyles()[0],
            play_icon_styles = this.calculateStyles()[1];
        if (this.props.vnc_port) {
            var proxy_action = "javascript: connect(\"" + proxy_vnc_host + "\", " + this.props.vnc_port + ");";
            return (
                <div>
                    <div id="noVNC_screen">
                        <div className="play" >
                            { this.props.session.endpoint_ip ?
                                <a className="text-center glyphicon glyphicon-play" href={ proxy_action } ></a> :
                                <a className="text-center glyphicon glyphicon-play" href="#"></a>
                            }
                        </div>
                        <canvas id="noVNC_canvas" width="100%" height="550px !important">
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