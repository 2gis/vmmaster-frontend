$(document).ready(function() {
    $(function() {
        if (window.location.hash) {
            var log_step_id = window.location.hash.replace("#", "");
            open_step(log_step_id);
        }
    });

    function open_step(id) {
        var step = $('#' + id);
        $('.expand .glyphicon', step).toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
        var opened = step.hasClass('opened');
        if (opened) {
            $('.info', step).html("");
            step.removeClass('opened');
            window.location.hash = '_';
        } else {
            var url = document.location.origin + document.location.pathname + 'step/' + id + '/';
            $.get(url, function (data) {
                $('.info', step).html(data);
            });
            step.addClass('opened');
        }
    }

    $('div.expand').click(function() {
    var log_step_id = $(this).parent().attr('id');
    open_step(log_step_id);
    return false; // prevent default
    });
});

function photor_show(start_screenshot){
    var screenshots_paths = JSON.parse(screenshots_ids),
        screenshots = [],
        host = "//" + window.location.hostname;

    screenshots_paths[1].forEach(function(item, i) {
        if (item == start_screenshot) {
            start_screenshot = i;
        }
        var screenshot = {
            url: host + "/screenshot/" + screenshots_paths[0] + "/" + item + ".png",
            thumb: host + "/screenshot/" + screenshots_paths[0] + "/" + item + "_thumb.png"
        };
        screenshots.push(screenshot)
    });

    $("#popup").removeClass('_disabled');

    if (screenshots.length > 1) {
        $('.photor').photor({
            duration: 0,
            current: start_screenshot,
            data: screenshots
        });
    } else {
        $('.photor').photor({
            single: true,
            data: screenshots
        });
    }
}

function photor_hide(){
    $("#popup").addClass('_disabled');
    $('.photor').photor('destroy');
}