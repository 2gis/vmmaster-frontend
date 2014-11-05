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
            window.location.hash = "#" + id;
        }
    }

    $('div.expand').click(function() {
    var log_step_id = $(this).parent().attr('id');
    open_step(log_step_id);
    return false; // prevent default
    });
});
