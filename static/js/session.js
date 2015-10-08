$(document).ready(function() {
    $(function() {
        if (window.location.hash) {
            var log_step_id = window.location.hash.replace("#", "");
            open_step(log_step_id);
        }
    });

    function open_step(id) {
        var step = $('#' + id);
        $('.expand .expandglyph.glyphicon', step).toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
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

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27)
            photor_hide();
    });
});

function expand_all() {
    var label_groups = $('.label_group'),
        button = $('.btn');

    console.log(button);
    label_groups.each(function(i, item) {
        var item_obj = $("#" + item.id);
        console.log(item.className + ' ' + item_obj.hasClass('_visible_group'));
        if (!button.hasClass('_active') && !item_obj.hasClass('_visible_group')) {
            open_group(item.id);
        }
        if (button.hasClass('_active') && item_obj.hasClass('_visible_group')) {
            open_group(item.id);
        }
    });

    if (!button.hasClass('_active')) {
        button.addClass('_active');
        button.text('Collapse all tests');
    } else {
        button.removeClass('_active');
        button.text('Expand all tests');
    }

}

function open_group(id) {
        var step = $('#' + id),
            group = $('#' + id + ' div.group');
        $('.group_log_step.expandglyph.glyphicon', step).toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
        var opened = group.hasClass('_disabled');
        if (opened) {
            step.addClass('_visible_group');
            group.removeClass('_disabled');
        } else {
            step.removeClass('_visible_group');
            group.addClass('_disabled');
        }
    }

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