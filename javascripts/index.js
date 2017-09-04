$(function () {
    $('.ui.active.dimmer').removeClass('active');
    $('#home').addClass('active');

    for (let i = 0; i < 2; i++) {
        setTimeout(function () {
            $('#c' + i).animate({
                    bottom: '10px',
                    opacity: '1'
                },
                'slow');
        }, i * 1000);
    }
});