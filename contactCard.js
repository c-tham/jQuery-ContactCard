$(document).ready(function() {

    $('form').submit(function() {
        console.log($(this).serialize());
        $('#rightside').append('<table id="card"><tr><td><h1>' + $('input[name="firstsname"]').val() + ' '
            + $('input[name="lastname"]').val() + '</h1><p>Click for description!</p></td></tr></table>');
        return false;
    });

    $(document).on('mouseover', 'p', function(){
        $(this).css('color', 'pink');
    });
});