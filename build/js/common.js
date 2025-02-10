$(document).ready(function() {

    $('.checkbox:last').on('click', function () {
        if ($(this).find(':checkbox').is(':checked')) {
            $(this).parents('form').find('.btn').attr('disabled', false);
        } else {
            $(this).parents('form').find('.btn').attr('disabled', true);
        }
    });

    $('#sform .checkbox:last').on('click', function () {
        if ($(this).find(':checkbox').is(':checked')) {
            $(this).parents('form').find('.btn').attr('disabled', false);
        } else {
            $(this).parents('form').find('.btn').attr('disabled', true);
        }
    });

    //slider
    var sliderSettings = {
        dots: false,
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1

    };

    $('.single-slider').slick(sliderSettings);

    //tabs
    $('#tabs').on('click', 'li:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active').parents().find('.box').eq($(this).index()).fadeIn(0, function () {
            $(this).css('display', 'flex');
        }).siblings('.box').hide();
    });

    //imgs
    $('.fancy').fancybox();

    $('.thumbs a').on('click', function(e) {
        e.preventDefault();
        var imgSrc = this.href;
        $('.img-big').fadeOut(100, function() {
            $(this).attr('src', imgSrc).fadeIn(500).trigger('hrefChange');
        });
    });

    $('.fancy').on('hrefChange', function() {
        $(this).attr('href', $(this).find('img').attr('src'));
    });


    $('.btn-menu').on('click', function() {
        $(this).toggleClass('active').next().slideToggle();
    });



    $('.btn-close').on('click', function() {
        $.fancybox.close();
    })

});