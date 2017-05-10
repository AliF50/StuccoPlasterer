$(document).ready(function() {
    $(".portfolio").hover(function() {
            $(this).addClass('hover');
        },
        function() {
            $(this).removeClass('hover');
        });
});
