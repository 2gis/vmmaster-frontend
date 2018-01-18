var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;
var ProvidersConstants = require('../constants/ProvidersConstants');


var _state = {
    providersDC: []
};

var _props = {
    url: '/api/v1/dc'
};

var _get_providers_dc = function() {
    $.ajax({
        url: _props.url,
        dataType: 'json',
        cache: false
    })
        .done(function(data) {
            _state.providersDC = data.results;
            ProvidersStore.emitChange();
        })
        .fail(function(xhr, status, err) {
            console.log(err.toString());
            ProvidersStore.emitChange();
        });
};


var ProvidersStore = $.extend({}, EventEmitter.prototype, {
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

ProvidersStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case ProvidersConstants.GET_PROVIDERS_DC:
            _get_providers_dc();
            break;
    }
    return true;
});


module.exports.ProvidersStore = ProvidersStore;
