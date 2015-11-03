var UserInfoConstants = require('../constants/UserInfoConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher').AppDispatcher;


var UserInfoActions = {
    get_token: function() {
        AppDispatcher.dispatch({
            actionType: UserInfoConstants.GET_TOKEN
        });
    },
    regenerate_token: function() {
        AppDispatcher.dispatch({
            actionType: UserInfoConstants.REGENERATE_TOKEN
        });
    }
};


module.exports.UserInfoActions = UserInfoActions;