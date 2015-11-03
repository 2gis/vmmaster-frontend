var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;
var PlatformsConstants = require('../constants/PlatformsConstants');


var _state = {
    platforms: []
};

var _props = {
    url: '/api/v1/platforms'
};

var _get_platforms = function() {
    $.ajax({
        url: _props.url,
        dataType: 'json',
        cache: false
    })
        .done(function(data) {
            _state.platforms = data.platforms;
            PlatformsStore.emitChange();
        })
        .fail(function(xhr, status, err) {
            console.log(err.toString());
            PlatformsStore.emitChange();
        });
};


var PlatformsStore = $.extend({}, EventEmitter.prototype, {
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

PlatformsStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case PlatformsConstants.GET_PLATFORMS:
            _get_platforms();
            break;
    }
    return true;
});


module.exports.PlatformsStore = PlatformsStore;