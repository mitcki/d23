$(document).ready(function() {
    $('.answer').click(function(e) {
        $('.answer').removeClass('guessed');
        $(this).addClass('guessed');
    });

});