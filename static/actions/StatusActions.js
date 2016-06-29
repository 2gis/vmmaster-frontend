var StatusConstants = require('../constants/StatusConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;


var StatusActions = {
    get_sessions: function() {
        AppDispatcher.dispatch({
            actionType: StatusConstants.GET_SESSIONS
        });
    },
    get_endpoints: function() {
        AppDispatcher.dispatch({
            actionType: StatusConstants.GET_ENDPOINTS
        });
    }
};


module.exports.StatusActions = StatusActions;