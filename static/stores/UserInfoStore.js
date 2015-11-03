var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;
var UserInfoConstants = require('../constants/UserInfoConstants');


var _state = {
    token: '',
    regenerate: false
};

var _props = {
    token_url: '/api/v1/user/token',
    new_token_url: '/api/v1/user/generate_token'
};

var _get_token = function() {
    var url = _props.token_url;
    if (_state.regenerate) {
        url = _props.new_token_url
    }

    $.ajax({
        url: url,
        dataType: 'json',
        cache: false
    })
        .done(function(data) {

            if (data) {
                _state.token = data;
            }
            UserInfoStore.emitChange();
        })
        .fail(function(xhr, status, err) {
            console.log(err.toString());
            UserInfoStore.emitChange();
        });
};

var UserInfoStore = $.extend({}, EventEmitter.prototype, {
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

UserInfoStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case UserInfoConstants.GET_TOKEN:
            _get_token();
            break;
    }
    switch(action.actionType) {
        case UserInfoConstants.REGENERATE_TOKEN:
            _state.regenerate = true;
            _get_token();
            break;
    }
    return true;
});


module.exports.UserInfoStore = UserInfoStore;