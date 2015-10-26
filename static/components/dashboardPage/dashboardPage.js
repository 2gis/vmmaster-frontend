var domain = '//' + window.location.host;

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

ReactDOM.render(
    <Sessions />,
    document.getElementById('sessions')
);

ReactDOM.render(
    <UserInfo />,
    document.getElementById('user_info')
);

ReactDOM.render(
    <Platforms />,
    document.getElementById('platform_content')
);
