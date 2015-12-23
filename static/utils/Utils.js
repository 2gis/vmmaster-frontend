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


function formatDateTime(date_string) {
    if (date_string) {
        var date = new Date(date_string).toGMTString().split(',')[1];
        return date.split('GMT')[0]
    } else {
        return '';
    }
}


function calculatePadding() {
    var steps = $(".session_content .tab-pane"),
        info_height = $('#session_info_panel').height();
    steps.css("padding-top", info_height);
}


module.exports.getUrlParameter = getUrlParameter;
module.exports.getSessionId = getSessionId;
module.exports.formatDateTime = formatDateTime;
module.exports.calculatePadding = calculatePadding;