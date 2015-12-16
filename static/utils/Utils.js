function getUrlParameter(sParam) {
    var sPageURL = $(location).attr('hash');
    sPageURL = sPageURL.substr(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)  {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)  {
            return sParameterName[1];
        }
    }
}


function getSessionId() {
    var sPageUrl = $(location).attr('pathname');
    sPageUrl = sPageUrl.substr(1);
    return sPageUrl.split('session')[1].replace(new RegExp("/",'g'),'');
}


module.exports.getUrlParameter = getUrlParameter;
module.exports.getSessionId = getSessionId;