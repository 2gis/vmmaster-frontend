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
