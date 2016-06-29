var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;
var StatusConstants = require('../constants/StatusConstants');


var _state = {
    sessions: {
        waiting: 0,
        running: 0,
        failed: 0,
        succeed: 0,
        active_total: 0,
        total: 0
    },
    endpoints: {
        using: [],
        pending: [],
        ready: [],
        total: []
    }
};

var _props = {
    url_sessions: '/api/v1/sessions_status',
    url_endpoints: '/api/v1/endpoints'
};

var _get_sessions = function(status) {
    $.ajax({
        url: _props.url_sessions + "?status=" + status,
        dataType: 'json',
        cache: false
    })
        .done(function(data) {
            if (status == "running") {
                _state.sessions.running = data.count;
                _state.sessions.active_total += data.count;
            } else if (status == "waiting") {
                _state.sessions.waiting = data.count;
                _state.sessions.active_total += data.count;
            } else if (status == "failed") {
                _state.sessions.failed = data.count;
                _state.sessions.total += data.count;
            } else if (status == "succeed") {
                _state.sessions.succeed = data.count;
                _state.sessions.total += data.count;
            }
            StatusStore.emitChange();
        })
        .fail(function(xhr, status, err) {
            console.log(err.toString());
            StatusStore.emitChange();
        });
};

var _get_pending_endpoints = function (endpoints, pending_list, other_list) {
    console.log(endpoints.length);
    endpoints.forEach(function (endpoint) {
        if (!endpoint.ready) {
            pending_list.push(endpoint);
            console.log(pending_list);
        } else {
            other_list.push(endpoint);
            console.log(other_list);
        }
    });
};

var _get_endpoints = function(status) {
    $.ajax({
        url: _props.url_endpoints,
        dataType: 'json',
        cache: false
    })
        .done(function(data) {
            _get_pending_endpoints(data.pool.pool.list, _state.endpoints.pending, _state.endpoints.ready);
            _get_pending_endpoints(data.pool.using.list, _state.endpoints.pending, _state.endpoints.using);
            _state.endpoints.total = _state.endpoints.total.concat(
                _state.endpoints.pending,
                _state.endpoints.ready,
                _state.endpoints.using
            );

            StatusStore.emitChange();
        })
        .fail(function(xhr, status, err) {
            console.log(err.toString());
            StatusStore.emitChange();
        });
};

var _get_active_sessions = function () {
    _get_sessions("running");
    _get_sessions("waiting");
    _get_sessions("failed");
    _get_sessions("succeed");
};

var StatusStore = $.extend({}, EventEmitter.prototype, {
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

StatusStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case StatusConstants.GET_ENDPOINTS:
            _get_endpoints();
            break;
        case StatusConstants.GET_SESSIONS:
            _get_active_sessions();
            break;
    }
    return true;
});


module.exports.StatusStore = StatusStore;