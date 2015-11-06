var SessionsConstants = require('../constants/SessionsConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;


var SessionsActions = {
    search: function(query) {
        AppDispatcher.dispatch({
            actionType: SessionsConstants.SESSIONS_SEARCH,
            query: query
        });
    },
    change_page: function(offset) {
        AppDispatcher.dispatch({
            actionType: SessionsConstants.SESSIONS_CHANGE,
            offset: offset
        });
    },
    found_new_sessions: function(sessions) {
        AppDispatcher.dispatch({
            actionType: SessionsConstants.NEW_SESSIONS,
            sessions: sessions
        });
    },
    update_sessions: function (sessions) {
        AppDispatcher.dispatch({
            actionType: SessionsConstants.UPDATE_SESSIONS,
            sessions: sessions
        });
    }
};


module.exports.SessionsActions = SessionsActions;