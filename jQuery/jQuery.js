$(document).ready(function() {
    $('.disable').click(function () {
        $(this).prop('disabled', true);
    });


    $('.reset-view-button').click(function () {
        $('.disable').prop('disabled', false);
    });
})