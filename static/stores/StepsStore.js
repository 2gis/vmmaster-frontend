var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;
var StepsConstants = require('../constants/StepsConstants');
var getUrlParameter = require('../utils/Utils').getUrlParameter;
var getSessionId = require('../utils/Utils').getSessionId;


var _offset_init = 1*getUrlParameter('offset');
if(!_offset_init) _offset_init = 0 ;
var _query_init = getUrlParameter('query');
if(!_query_init) _query_init = '';
var _session_id = getSessionId();


var _state = {
    hasMore: true,
    steps: [],
    offset: _offset_init,
    limit: 30,
    total: 0,
    query: _query_init
};

var _props = {
    url: '/api/v1/session/' + _session_id + '/steps/'
};

var _resetState = function () {
    _state = {
        hasMore: true,
        steps: [],
        offset: _offset_init,
        limit: 30,
        total: 0,
        query: _query_init
    };
};

var _search = function() {
    $.ajax({
        url: _props.url+"?offset="+_state.offset+"&limit="+_state.limit,
        dataType: 'json',
        cache: false
    })
        .done(function(data) {
            if (_state.steps.length != 0) {
                _state.steps = _state.steps.concat(data.results);
            } else {
                _state.steps = data.results;
            }
            _state.total = data.count;

            _state.hasMore = !(_state.steps.length == _state.total || !data.next);
            StepsStore.emitChange();
        })
        .fail(function(xhr, status, err) {
            _state.hasMore = false;
            console.log(err.toString());
            StepsStore.emitChange();
        });
};

var _reloadDashboard = function() {
    _search('');
};

var _update_href = function() {
    var hash = '&query='+_state.query;
    $(location).attr('hash', hash);
};

var _update_exist_steps = function (steps) {
    var updateSteps = JSON.parse(steps);
    var partSteps = updateSteps.map(function(step) {
        var step_fields = step.fields;
        step_fields.dc = JSON.parse(step_fields.dc);
        step_fields.take_screencast = step_fields.dc.takeScreencast;
        step_fields.id = step.pk;
        return step_fields;
    });
    _state.steps.forEach(function (step, i, arr) {
        partSteps.forEach(function (nstep, ni, narr) {
            if (step.id == nstep.id) {
                console.log('Replaced step', step.id);
                _state.steps[i] = nstep;
            }
        });
    });
    StepsStore.emitChange();
};

var _update_new_steps = function(steps) {
    var newSteps = JSON.parse(steps);
    var partSteps = newSteps.map(function(step) {
        var step_fields = step.fields;
        step_fields.dc = JSON.parse(step_fields.dc);
        step_fields.take_screencast = step_fields.dc.takeScreencast;
        step_fields.id = step.pk;
        console.log('Adding new step ', step_fields.id);
        return step_fields;
    });
    _state.steps = partSteps.concat(_state.steps);
    _state.offset += partSteps.length;
    StepsStore.emitChange();
};

var StepsStore = $.extend({}, EventEmitter.prototype, {
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

StepsStore.dispatchToken = AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case StepsConstants.STEPS_SEARCH:
            _resetState();
            _state.query = action.query;
            _state.offset = 0;
            _update_href();
            _search();
            break;
        case StepsConstants.STEPS_CHANGE:
            _state.offset = action.offset;
            _search();
            break;
        case StepsConstants.NEW_STEPS:
            _update_new_steps(action.steps);
            break;
        case StepsConstants.UPDATE_STEPS:
            _update_exist_steps(action.steps);
            break;
    }
    return true;
});


module.exports.StepsStore = StepsStore;
module.exports.reloadDashboard = _reloadDashboard;
module.exports.getSessionId = getSessionId;