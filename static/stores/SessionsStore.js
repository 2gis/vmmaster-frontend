var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;
var SessionsConstants = require('../constants/SessionsConstants');
var getUrlParameter = require('../utils/Utils').getUrlParameter;
var getSessionId = require('../utils/Utils').getSessionId;


var _offset_init = 1*getUrlParameter('offset');
if(!_offset_init) _offset_init = 0 ;
var _query_init = getUrlParameter('query');
if(!_query_init) _query_init = '';

var _state = {
    hasMore: true,
    sessions: [],
    session: [],
    offset: _offset_init,
    limit: 10,
    total: 0,
    query: _query_init,
    saved_video_exist: false,
    selenium_log: '',
    vnc_port: null
};

var _urls = {
    sessions_list: '/api/v1/sessions'
};

var _resetState = function () {
    _state = {
        hasMore: true,
        sessions: [],
        offset: _offset_init,
        limit: 10,
        total: 0,
        query: _query_init,
        saved_video_exist: false,
        selenium_log: '',
        vnc_port: null
    };
};

var _search = function() {
    $.ajax({
        url: _urls.sessions_list+'?search='+_state.query+"&offset="+_state.offset+"&limit="+_state.limit,
        dataType: 'json',
        cache: false
    })
        .done(function(data) {
            if (_state.sessions.length != 0) {
                _state.sessions = _state.sessions.concat(data.results);
            } else {
                _state.sessions = data.results;
            }
            _state.total = data.count;

            if (_state.sessions.length == _state.total || !data.next) {
                _state.hasMore = false;
            } else {
                _state.hasMore = true;
            }
            SessionsStore.emitChange();
        })
        .fail(function(xhr, status, err) {
            _state.hasMore = false;
            console.log(err.toString());
            SessionsStore.emitChange();
        });
};

var _reloadDashboard = function() {
    _search('');
};

var _update_href = function() {
    var hash = '&query='+_state.query;
    $(location).attr('hash', hash);
};

var _update_exist_sessions = function (sessions) {
    var updateSessions = JSON.parse(sessions);
    var partSessions = updateSessions.map(function(session) {
        var session_fields = session.fields;
        session_fields.dc = JSON.parse(session_fields.dc);
        session_fields.take_screencast = session_fields.dc.takeScreencast;
        session_fields.id = session.pk;
        session_fields.username = session_fields.dc.user;
        return session_fields;
    });
    _state.sessions.forEach(function (session, i, arr) {
        partSessions.forEach(function (nsession, ni, narr) {
            if (session.id == nsession.id) {
                console.log('Replaced session', session.id);
                _state.sessions[i] = nsession;
            }
        });
    });
    SessionsStore.emitChange();
};

var _update_new_sessions = function(sessions) {
    var newSessions = JSON.parse(sessions);
    var partSessions = newSessions.map(function(session) {
        var session_fields = session.fields;
        session_fields.dc = JSON.parse(session_fields.dc);
        session_fields.take_screencast = session_fields.dc.takeScreencast;
        session_fields.id = session.pk;
        session_fields.username = session_fields.dc.user;
        console.log('Adding new session ', session_fields.id);
        return session_fields;
    });
    _state.sessions = partSessions.concat(_state.sessions);
    _state.offset += partSessions.length;
    SessionsStore.emitChange();
};

var _get_session_info = function () {
    $.ajax({
        url: _urls.sessions_list + '/' + getSessionId() + '/',
        dataType: 'json',
        cache: false
    })
        .done(function(data) {
            _state.session = data;
            SessionsStore.emitChange();
        })
        .fail(function(xhr, status, err) {
            console.log(err.toString());
            SessionsStore.emitChange();
        });
};

var _savedVideoExist = function () {
    var session_id = getSessionId();
    $.ajax({
        url: "/storage/" + session_id + "/video.webm",
        cache: true,
        statusCode: {
          200: function (response) {
             _state.saved_video_exist = true;
             SessionsStore.emitChange();
          }
        }
    });
};

var _get_selenium_log = function () {
    var session_id = getSessionId();
    $.ajax({
        url: "/storage/" + session_id + "/selenium_server.log",
        cache: true
    })
        .done(function(data) {
            _state.selenium_log = data;
            SessionsStore.emitChange();
        })
        .fail(function(xhr, status, err) {
            console.log(err.toString());
            SessionsStore.emitChange();
        });
};

var _get_vnc_port = function () {
    var session_id = getSessionId();
    $.ajax({
        url: "/session/" + session_id + "/proxy_vnc_port",
        cache: true
    })
        .done(function(data) {
            _state.vnc_port = data;
            SessionsStore.emitChange();
        })
        .fail(function(xhr, status, err) {
            console.log(err.toString());
            SessionsStore.emitChange();
        });
};

var SessionsStore = $.extend({}, EventEmitter.prototype, {
    getState: function() {
        return _state;
    },
    emitChange: function() {
        this.emit('change');
    },
    addChangeListener: function(callback) {
        this.on('change', callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

SessionsStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case SessionsConstants.SESSIONS_SEARCH:
            _resetState();
            _state.query = action.query;
            _state.offset = 0;
            _update_href();
            _search();
            break;
        case SessionsConstants.SESSIONS_CHANGE:
            _state.offset = action.offset;
            _search();
            break;
        case SessionsConstants.NEW_SESSIONS:
            _update_new_sessions(action.sessions);
            break;
        case SessionsConstants.UPDATE_SESSIONS:
            _update_exist_sessions(action.sessions);
            break;
        case SessionsConstants.SESSION_INFO:
            _get_session_info();
            break;
        case SessionsConstants.VIDEO_EXIST_CHECK:
            _savedVideoExist();
            break;
        case SessionsConstants.GET_SELENIUM_LOG:
            _get_selenium_log();
            break;
        case SessionsConstants.GET_VNC_PORT:
            _get_vnc_port();
            break;
    }
    return true;
});


module.exports.SessionsStore = SessionsStore;
module.exports.reloadDashboard = _reloadDashboard;