$(document).ready(function() {
    $(function() {
        if (window.location.hash) {
            var tab_for_open = window.location.hash.replace("#", "");
            $("." + tab_for_open).click();
            if (tab_for_open !== "steps") {
                $(".expand_all_button").css({
                    'display': 'none'
                });
            } else {
                $(".expand_all_button").css({
                    'display': 'block'
                 });
            }
        }
    });

    function change_hash () {
        window.location.hash = this.href.split("/").pop();
        var tab_for_open = window.location.hash.replace("#", "");
        if (tab_for_open !== "steps") {
             $(".expand_all_button").css({
                'display': 'none'
             });
        } else {
            $(".expand_all_button").css({
                'display': 'block'
             });
        }
    }

    $(function() {
        var screencast = $("#screencast").children()[1],
            info_height = $('.session_info_panel').height(),
            window_height = $(window).height() - 100,
            new_height = window_height - info_height;

        if (screencast) {
            if (new_height > 600) {
                screencast.height = '600';
            } else if (new_height < 400) {
                screencast.height = '400';
            } else {
                screencast.height = new_height;
            }
        }
    });

    $(function() {
        var steps = $(".session_content .tab-pane"),
            info_height = $('.session_info_panel').height();

        steps.css("padding-top", info_height + 5);
    });

    $(function() {
        var tabs = $(".nav-tabs").children().children();
        tabs.each(function(i, item) {
            item.onclick = change_hash
        });
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27)
            photor_hide();
    });
});

$(window).scroll(function () {
    var max_description_height = $('._info_description').height() + $('._info_error').height(),
        expand_button = $('.expand_all_button'),
        session_tabs = $('.session_tabs'),
        tabs_margin = 49 - $('.session_info').height(),
        button_margin = session_tabs.height() + tabs_margin,
        content_margin = expand_button.height() + session_tabs.height() + 1;

    if ($(this).scrollTop() > max_description_height) {
        session_tabs.css({
            'position': 'fixed',
            'margin-top': tabs_margin
        });
        $('.session_content').css({
            'margin-top': content_margin + 10
        });
        expand_button.css({
            'position': 'fixed',
            'margin-top': button_margin
        });
    }
    if ($(this).scrollTop() <= max_description_height) {
        session_tabs.css({
            'position': 'relative',
            'margin-top': '0'
        });
        $('.session_content').css({
            'margin-top': '0'
        });
        expand_button.css({
            'position': 'inherit',
            'margin-top': '0'
        });
    }
});

function expand_all() {
    var label_groups = $('.label_group'),
        button = $('.btn');

    label_groups.each(function(i, item) {
        var item_obj = $("#" + item.id);
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
    var screenshots_paths = [],
        screenshots = [],
        host = "//" + window.location.hostname;

    try {
        screenshots_paths = JSON.parse(screenshots_ids);
    } catch (err) {
        screenshots_paths = window.screenshots_ids;
    }

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