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
        var tabs = $(".nav-tabs").children().children();
        tabs.each(function(i, item) {
            item.onclick = change_hash
        });
    });
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
