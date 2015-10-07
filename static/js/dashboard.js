$(document).ready(function() {
    $('a').click(function(event){
	event.stopPropagation();
    });

    $('.session_row').click(function(){
        window.document.location = $(this).attr("href");
    });

    $('.session_row').hover(function() {
        $(this).css('cursor','pointer');
    });
});
