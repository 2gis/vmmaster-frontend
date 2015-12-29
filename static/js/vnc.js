/*jslint white: false */
/*global window, $, Util, RFB, */
"use strict";

var rfb;
var resizeTimeout;
var host, port, password, path, token, screencast_size;

var head = document.getElementsByTagName('head')[0],
    script = document.createElement('script');

script.type = 'text/javascript';
script.src = "/static/js/vnc/util.js";
head.appendChild(script);


function UIresize() {
    if (WebUtil.getQueryVar('resize', false)) {
        var innerW = window.innerWidth;
        var innerH = window.innerHeight;
        var controlbarH = $D('noVNC_status_bar').offsetHeight;
        var padding = 5;
        if (innerW !== undefined && innerH !== undefined)
            rfb.setDesktopSize(innerW, innerH - controlbarH - padding);
    }
}
function FBUComplete(rfb, fbu) {
    UIresize();
    rfb.set_onFBUComplete(function() { });
}
function passwordRequired(rfb) {
    var msg;
    msg = '<form onsubmit="return setPassword();"';
    msg += '  style="margin-bottom: 0px">';
    msg += 'Password Required: ';
    msg += '<input type=password size=10 id="password_input" class="noVNC_status">';
    msg += '<\/form>';
    $D('noVNC_status_bar').setAttribute("class", "noVNC_status_warn");
    $D('noVNC_status').innerHTML = msg;
}

function updateState(rfb, state, oldstate, msg) {
    var s, sb, cad, level;
    s = $D('noVNC_status');
    sb = $D('noVNC_status_bar');
    switch (state) {
        case 'failed':       level = "error";  break;
        case 'fatal':        level = "error";  break;
        case 'normal':       level = "normal"; break;
        case 'disconnected': level = "normal"; break;
        case 'loaded':       level = "normal"; break;
        default:             level = "warn";   break;
    }

    if (state === "normal") {
    } else {
        xvpInit(0);
    }

    if (typeof(msg) !== 'undefined') {
        sb.setAttribute("class", "noVNC_status_" + level);
        s.innerHTML = msg;
    }

    var display = new Display({
        'target': $D('noVNC_canvas'),
        'width': screencast_size[0],
        'height': screencast_size[1]
    });
    display.resize(screencast_size[0], screencast_size[1]);
}

window.onresize = function () {
    // When the window has been resized, wait until the size remains
    // the same for 0.5 seconds before sending the request for changing
    // the resolution of the session
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function(){
        UIresize();
    }, 500);
};

function xvpInit(ver) {
    var xvpbuttons;
    xvpbuttons = $D('noVNC_xvp_buttons');
    if (ver >= 1) {
        xvpbuttons.style.display = 'inline';
    } else {
        xvpbuttons.style.display = 'none';
    }
}

window.onscriptsload  = function (){
    WebUtil.init_logging(WebUtil.getQueryVar('logging', 'warn'));
};

function connect(host, port) {
    // if port == 80 (or 443) then it won't be present and should be
    // set manually
    if (!port) {
        if (window.location.protocol.substring(0, 5) == 'https') {
            port = 443;
        }
        else if (window.location.protocol.substring(0, 4) == 'http') {
            port = 80;
        }
    }

    // If a token variable is passed in, set the parameter in a cookie.
    // This is used by nova-novncproxy.
    token = WebUtil.getQueryVar('token', null);
    if (token) {
        WebUtil.createCookie('token', token, 1)
    }

    password = WebUtil.getQueryVar('password', '');
    path = WebUtil.getQueryVar('path', 'websockify');

    if ((!host) || (!port)) {
        updateState(null, 'fatal', null, 'Must specify host and port in URL');
        return;
    }

    try {
        rfb = new RFB({'target': $D('noVNC_canvas'),
            'encrypt': WebUtil.getQueryVar('encrypt',
                (window.location.protocol === "https:")),
            'repeaterID': WebUtil.getQueryVar('repeaterID', ''),
            'true_color': WebUtil.getQueryVar('true_color', true),
            'local_cursor': WebUtil.getQueryVar('cursor', false),
            'shared': WebUtil.getQueryVar('shared', true),
            'view_only': WebUtil.getQueryVar('view_only', true),
            'onUpdateState': updateState,
            'onXvpInit': xvpInit,
            'onPasswordRequired': passwordRequired,
            'onFBUComplete': FBUComplete});
    } catch (exc) {
        updateState(null, 'fatal', null, 'Unable to create RFB client -- ' + exc);
        return; // don't continue trying to connect
    }
    rfb.connect(host, port, password, path);
    $(".play").addClass("_playing");
}

$(document).ready(function() {
    $(function() {
        var play = $(".play"),
            play_icon = $('.glyphicon-play'),
            tabs_height = $('.session_tabs').height(),
            info_title_height = $('.info_title').height(),
            window_height = $(window).height() - 100,
            new_height = window_height - tabs_height - info_title_height;

        if (new_height > 600) {
            screencast_size = [800, 600];
            play.css({
                'width': 800,
                'height': 600
            });
            play_icon.css({
                'top': 200,
                'font-size': 200
            });
        } else if (new_height < 400) {
            screencast_size = [600, 400];
            play.css({
                'width': 600,
                'height': 400
            });
            play_icon.css({
                'top': 150,
                'font-size': 150
            });
        } else {
            screencast_size = [new_height * 4 / 3, new_height];
            play.css({
                'width': new_height * 4 / 3,
                'height': new_height
            });
            play_icon.css({
                'top': new_height * 4 / 10,
                'font-size': new_height / 4
            });
        }
    });
});