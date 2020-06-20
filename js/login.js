$(function () {
    $('#link_reg').on('click', function () {
        $('.login').hide();
        $('.reg').show();
    })
    $('#link_login').on('click', function () {
        $('.login').show();
        $('.reg').hide();
    })
})