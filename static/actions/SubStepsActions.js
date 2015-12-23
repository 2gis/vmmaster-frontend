var SubStepsConstants = require('../constants/SubStepsConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;


var SubStepsActions = {
    search: function(step_id) {
        AppDispatcher.dispatch({
            actionType: SubStepsConstants.SUBSTEPS_SEARCH,
            step_id: step_id
        });
    },
    get_first_sub_step: function (step_id) {
        AppDispatcher.dispatch({
            actionType: SubStepsConstants.FIRST_SUBSTEP,
            step_id: step_id
        });
    }
};


module.exports.SubStepsActions = SubStepsActions;