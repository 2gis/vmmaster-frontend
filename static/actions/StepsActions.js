var StepsConstants = require('../constants/StepsConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;


var StepsActions = {
    search: function(query) {
        AppDispatcher.dispatch({
            actionType: StepsConstants.STEPS_SEARCH,
            query: query
        });
    },
    change_page: function(offset) {
        AppDispatcher.dispatch({
            actionType: StepsConstants.STEPS_CHANGE,
            offset: offset
        });
    },
    found_new_sessions: function(sessions) {
        AppDispatcher.dispatch({
            actionType: StepsConstants.NEW_STEPS,
            steps: steps
        });
    },
    update_sessions: function (sessions) {
        AppDispatcher.dispatch({
            actionType: StepsConstants.UPDATE_STEPS,
            steps: steps
        });
    }
};


module.exports.StepsActions = StepsActions;