// common requirements for common.js
var $ = require('jquery');
window.$ = $; // jquery for js/session.js
require('bootstrap');


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


function getIdFromUri(value) {
    var sPageUrl = $(location).attr('pathname');
    sPageUrl = sPageUrl.substr(1);
    sPageUrl = sPageUrl.split(value)[1].split("/")[1];
    return sPageUrl;
}


function getSessionId() {
    return getIdFromUri('session');
}


function getStepId() {
    return getIdFromUri('step');
}


function getSubStepId() {
    return getIdFromUri('sub_step');
}


function formatDateTime(date_string) {
    if (date_string) {
        var date = new Date(date_string);
        var options = {
          hour12: false,
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        };
        return date.toLocaleString('en-US', options)
    } else {
        return '';
    }
}


function calculatePadding() {
    var steps = $(".session_content .tab-pane"),
        info_height = $('.session_info_panel').height();
    steps.css("padding-top", info_height);
}

function addLinksToHead(urls) {
    var attrs = {
        rel: 'stylesheet'
    };
    for (var i in urls) {
        var head = document.getElementsByTagName('head')[0],
            script = document.createElement('link');

        script.rel = attrs.rel;
        script.href = urls[i];
        head.appendChild(script);
    }
}

function addScriptsToHead(urls) {
    var attrs = {
        type:'text/javascript'
    };
    for (var i in urls) {
        var head = document.getElementsByTagName('head')[0],
            script = document.createElement('script');

        script.type = attrs.type;
        script.src = urls[i];
        head.appendChild(script);
    }
}


function prettyJson(json_string) {
    try {
        var json = JSON.parse(json_string),
        pretty_json = JSON.stringify(json, null, 4);

        pretty_json = JSON.stringify(pretty_json, null, "\t");
        return JSON.parse(pretty_json);
    } catch (e) {
        return json_string;
    }
}


module.exports.getUrlParameter = getUrlParameter;
module.exports.prettyJson = prettyJson;
module.exports.getSessionId = getSessionId;
module.exports.getStepId = getStepId;
module.exports.getSubStepId = getSubStepId;
module.exports.formatDateTime = formatDateTime;
module.exports.calculatePadding = calculatePadding;
module.exports.addScriptsToHead = addScriptsToHead;
module.exports.addLinksToHead = addLinksToHead;
