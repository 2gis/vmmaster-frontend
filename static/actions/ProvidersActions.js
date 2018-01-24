var ProvidersConstants = require('../constants/ProvidersConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;


var ProvidersActions = {
    get_providers_dc: function() {
        AppDispatcher.dispatch({
            actionType: ProvidersConstants.GET_PROVIDERS_DC
        });
    }
};


module.exports.ProvidersActions = ProvidersActions;
