var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;
var StatusConstants = require('../constants/StatusConstants');


var _state = {
    sessions: {
        waiting: 0,
        running: 0,
        preparing: 0,
        failed: 0,
        succeed: 0,
        active_total: 0,
        total: 0
    },
    endpoints: {
        using: 0,
        on_service: 0,
        wait_for_service: 0,
        pool: 0,
        total: 0
    }
};

var _props = {
    url_sessions: '/api/v1/sessions_status',
    url_endpoints: '/api/v1/endpoints'
};

var _get_sessions = function(status) {
    return $.ajax({
            url: _props.url_sessions + "?status=" + status,
            dataType: 'json',
            cache: false
        })
            .done(function(data) {
                if (status == "running") {
                    _state.sessions.running = data.count;
                } else if (status == "waiting") {
                    _state.sessions.waiting = data.count;
                } else if (status == "preparing") {
                    _state.sessions.preparing = data.count;
                } else if (status == "failed") {
                    _state.sessions.failed = data.count;
                } else if (status == "succeed") {
                    _state.sessions.succeed = data.count;
                }
            })
            .fail(function(xhr, status, err) {
                console.log(err.toString());
            });
};

var _get_endpoints = function() {
    $.ajax({
        url: _props.url_endpoints,
        dataType: 'json',
        cache: false
    })
        .done(function(data) {
            var endpoints = _state.endpoints;
            if (data.endpoints) {
                endpoints = data.endpoints;
                _state.endpoints.pool = endpoints.pool.count;
                _state.endpoints.using = endpoints.using.count;
                _state.endpoints.wait_for_service = endpoints.wait_for_service.count;
                _state.endpoints.on_service = endpoints.on_service.count;
                _state.endpoints.total = endpoints.total;
                StatusStore.emitChange("endpoints");
            }
        })
        .fail(function(xhr, status, err) {
            console.log(err.toString());
        });
};

var _get_active_sessions = function () {
    $.when(
        _get_sessions("running"),
        _get_sessions("waiting"),
        _get_sessions("preparing"),
        _get_sessions("failed"),
        _get_sessions("succeed")
    ).done(
        function () {
            _state.sessions.active_total = parseInt(_state.sessions.running) + parseInt(_state.sessions.waiting) + parseInt(_state.sessions.preparing);
            _state.sessions.total = parseInt(_state.sessions.running) + parseInt(_state.sessions.waiting) + parseInt(_state.sessions.preparing)
                + parseInt(_state.sessions.failed) + parseInt(_state.sessions.succeed);
            StatusStore.emitChange("sessions");
        }
    );
};

var StatusStore = $.extend({}, EventEmitter.prototype, {
    getState: function() {
        return _state;
    },
    emitChange: function(event_name) {
        this.emit(event_name);
    },
    addChangeListener: function(event_name, callback) {
        this.on(event_name, callback);
    },
    removeChangeListener: function(event_name, callback) {
        this.removeListener(event_name, callback);
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
