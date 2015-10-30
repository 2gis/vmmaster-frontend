var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;
var DashboardConstants = require('../constants/SessionsConstants');


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

var _page_init = 1*getUrlParameter('page');
if(!_page_init) _page_init = 1 ;
var _query_init = getUrlParameter('query');
if(!_query_init) _query_init = '';

var _state = {
    hasMore: true,
    sessions: [],
    page: _page_init,
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
        page: _page_init,
        total: 0,
        query: _query_init
    };
};

var _search = function() {
    $.ajax({
        url: _props.url+'?search='+_state.query+"&page="+_state.page,
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

            if (_state.sessions.length == _state.total) {
                _state.hasMore = false;
            } else {
                _state.hasMore = true;
            }
            DashboardStore.emitChange();
        })
        .fail(function(xhr, status, err) {
            _state.hasMore = false;
            console.log(err.toString());
            DashboardStore.emitChange();
        });
};

var _reloadDashboard = function() {
    _search('');
};

var _update_href = function() {
    var hash = '&query='+_state.query;
    $(location).attr('hash', hash);
};

var DashboardStore = $.extend({}, EventEmitter.prototype, {
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

DashboardStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case DashboardConstants.DASHBOARD_SEARCH:
            _resetState();
            _state.query = action.query;
            _state.page = 1;
            _update_href();
            _search();
            break;
        case DashboardConstants.DASHBOARD_CHANGE:
            _state.page = action.page;
            _search();
            break;
    }
    return true;
});


module.exports.DashboardStore = DashboardStore;
module.exports.reloadDashboard = _reloadDashboard;