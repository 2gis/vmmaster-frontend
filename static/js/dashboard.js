$(document).ready(function() {
    $('.session_row').click(function(){
        if (!window.event.ctrlKey) {
            window.document.location = $(this).attr("href");
        }
    });
});

$('a').click(function(event){
	event.stopPropagation();
});
