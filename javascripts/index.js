$(function () {
    $('#home').addClass('active');

    for (let i = 0; i < 2; i++) {
        setTimeout(function () {
            $('#c' + i).animate({
                    bottom: '10px',
                    opacity: '1'
                },
                'slow');
        }, i * 200);
    }
});
var bg = 1;
var bgCount = 3;
$('section').css('background-image', "url('images/b0.jpg')");
setInterval(function() {
    $('section').css('background-image', "url('images/b" + bg + ".jpg')");
    if (bg == bgCount - 1) {
        bg = 0;
    } else {
        bg++;
    }
}, 5000);