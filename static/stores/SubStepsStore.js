var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;
var SubStepsConstants = require('../constants/SubStepsConstants');
var getUrlParameter = require('../utils/Utils').getUrlParameter;
var getSessionId = require('../utils/Utils').getSessionId;
var getSubStepId = require('../utils/Utils').getSubStepId;
var getStepId = require('../utils/Utils').getStepId;


var _offset_init = 1*getUrlParameter('offset');
if(!_offset_init) _offset_init = 0 ;
var _session_id = getSessionId();


var _state = {
    substeps: [],
    first_sub_step: '',
    offset: _offset_init,
    limit: 30,
    total: 0
};

var _props = {
    url: '/api/v1/sessions/' + _session_id + '/steps/'
};

var _resetState = function () {
    _state = {
        hasMore: true,
        substeps: [],
        offset: _offset_init,
        limit: 30,
        total: 0
    };
};

var _search = function(step_id) {
    $.ajax({
        url: _props.url + step_id + '?offset=' + _state.offset + '&limit=' + _state.limit,
        dataType: 'json',
        cache: false
    })
        .done(function(data) {
            if (_state.substeps.length != 0) {
                _state.substeps = _state.substeps.concat(data.results);
            } else {
                _state.substeps = data.results;
            }
            _state.total = data.count;

            _state.hasMore = !(_state.substeps.length == _state.total || !data.next);
            SubStepsStore.emitChange();
        })
        .fail(function(xhr, status, err) {
            _state.hasMore = false;
            console.log(err.toString());
            SubStepsStore.emitChange();
        });
};


_first_sub_step = function (step_id) {
    $.ajax({
        url: _props.url + step_id + '/substeps/' + '?offset=' + _state.offset + '&limit=1',
        dataType: 'json',
        cache: false
    })
        .done(function(data) {
            _state.first_sub_step = data.results[0];
            SubStepsStore.emitChange();
        })
        .fail(function(xhr, status, err) {
            console.log(err.toString());
            SubStepsStore.emitChange();
        });
};


var _get_substep_by_id = function () {
    $.ajax({
        url: _props.url + getStepId() + '/substeps/' + getSubStepId() + '/',
        dataType: 'json',
        cache: false
    })
        .done(function(data) {
            _state.substeps.push(data);
            SubStepsStore.emitChange();
        })
        .fail(function(xhr, status, err) {
            console.log(err.toString());
            SubStepsStore.emitChange();
        });
};


var SubStepsStore = $.extend({}, EventEmitter.prototype, {
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

SubStepsStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case SubStepsConstants.SUBSTEPS_SEARCH:
            _resetState();
            _state.offset = 0;
            _search(action.step_id);
            break;
        case SubStepsConstants.FIRST_SUBSTEP:
            _first_sub_step(action.step_id);
            break;
        case SubStepsConstants.GET_SUBSTEP_BY_ID:
            _get_substep_by_id();
            break;
    }
    return true;
});


module.exports.SubStepsStore = SubStepsStore;
module.exports.get_substep_by_id = _get_substep_by_id;