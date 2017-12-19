$(document).ready(function() {

    $('form').submit(function() {
        console.log($(this).serialize());
        $('#rightside').append('<div id="card"><p>Move your mouse on the name</p><p id="cardFront">' 
            + $('input[name="firstname"]').val() + ' '
            + $('input[name="lastname"]').val() 
            + '<p id="cardBack">'
            + $('input[name="description"]').val()
            + '</p></div>');
        return false;
    });

    $(document).on('mouseover', '#cardFront', function(){
        $(this).siblings().toggle();
    });

});