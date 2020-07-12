$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.hrader__menu,.last-child ').toggleClass('active');
        $('body').toggleClass('look');
    });
});