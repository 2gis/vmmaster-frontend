var SubStepsConstants = require('../constants/SubStepsConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;


var SubStepsActions = {
    search: function(step_id) {
        AppDispatcher.dispatch({
            actionType: SubStepsConstants.SUBSTEPS_SEARCH,
            step_id: step_id
        });
    },
    get_sub_steps_for_step: function (step_id) {
        AppDispatcher.dispatch({
            actionType: SubStepsConstants.GET_SUBSTEPS_FOR_STEP,
            step_id: step_id
        });
    },
    get_substep_by_id: function () {
        AppDispatcher.dispatch({
            actionType: SubStepsConstants.GET_SUBSTEP_BY_ID
        });
    }
};


module.exports.SubStepsActions = SubStepsActions;