$(document).ready(function() {
    $('.session_row').click(function(){
        window.document.location = $(this).attr("href");
    });
});