var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;
var SessionsConstants = require('../constants/SessionsConstants');


function getUrlParameter(sParam) {
    var sPageURL = $(location).attr('hash');
    sPageURL = sPageURL.substr(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)  {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)  {
            return sParameterName[1];
        }
    }
}

var _offset_init = 1*getUrlParameter('offset');
if(!_offset_init) _offset_init = 0 ;
var _query_init = getUrlParameter('query');
if(!_query_init) _query_init = '';

var _state = {
    hasMore: true,
    sessions: [],
    offset: _offset_init,
    limit: 10,
    total: 0,
    query: _query_init
};

var _props = {
    url: '/api/v1/sessions'
};

var _resetState = function () {
    _state = {
        hasMore: true,
        sessions: [],
        offset: _offset_init,
        limit: 10,
        total: 0,
        query: _query_init
    };
};

var _search = function() {
    $.ajax({
        url: _props.url+'?search='+_state.query+"&offset="+_state.offset+"&limit="+_state.limit,
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
        console.log('Adding new session ', session_fields.id);
        return session_fields;
    });
    _state.sessions = partSessions.concat(_state.sessions);
    _state.offset += partSessions.length;
    SessionsStore.emitChange();
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
    }
    return true;
});


module.exports.SessionsStore = SessionsStore;
module.exports.reloadDashboard = _reloadDashboard;