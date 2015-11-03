var PlatformsConstants = require('../constants/PlatformsConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;


var PlatformsActions = {
    get_platforms: function() {
        AppDispatcher.dispatch({
            actionType: PlatformsConstants.GET_PLATFORMS
        });
    }
};


module.exports.PlatformsActions = PlatformsActions;