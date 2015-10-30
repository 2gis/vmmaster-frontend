var DashboardConstants = require('../constants/SessionsConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;


var DashboardActions = {
    search: function(query) {
        AppDispatcher.dispatch({
            actionType: DashboardConstants.DASHBOARD_SEARCH,
            query: query
        });
    },
    change_page: function(page) {
        AppDispatcher.dispatch({
            actionType: DashboardConstants.DASHBOARD_CHANGE,
            page: page
        });
    }
};


module.exports.DashboardActions = DashboardActions;