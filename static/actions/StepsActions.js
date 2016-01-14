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
    found_new_sessions: function(steps) {
        AppDispatcher.dispatch({
            actionType: StepsConstants.NEW_STEPS,
            steps: steps
        });
    },
    update_sessions: function (steps) {
        AppDispatcher.dispatch({
            actionType: StepsConstants.UPDATE_STEPS,
            steps: steps
        });
    },
    get_first_step: function () {
        AppDispatcher.dispatch({
            actionType: StepsConstants.FIRST_STEP
        });
    },
    get_step_by_id: function () {
        AppDispatcher.dispatch({
            actionType: StepsConstants.GET_STEP_BY_ID
        });
    },
    get_substeps_for_step: function () {
        AppDispatcher.dispatch({
            actionType: StepsConstants.GET_SUBSTEPS_FOR_STEP
        });
    }
};


module.exports.StepsActions = StepsActions;