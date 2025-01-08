$(function () {
    var $sliderImages = $('.slider-images');
    var $slides = $sliderImages.find('.slide');
    var slideCount = $slides.length;
    var currentIndex = 0;

    // 이전 버튼 클릭 시 이벤트 핸들러
    $('.slider-prev').on('click', function () {
        currentIndex -= 1;
        if (currentIndex < 0) {
            currentIndex = slideCount - 1;
        }
        $sliderImages.stop().animate({
            left: -100 * currentIndex + '%'
        }, 400);
    });

    // 다음 버튼 클릭 시 이벤트 핸들러
    $('.slider-next').on('click', function () {
        currentIndex += 1;
        if (currentIndex >= slideCount) {
            currentIndex = 0;
        }
        $sliderImages.stop().animate({
            left: -100 * currentIndex + '%'
        }, 400);
    });

    // 인디케이터 클릭 시 이벤트 핸들러
    $('.slider-nav').on('click', 'li', function () {
        var index = $(this).index();
        console.log(index);
        $sliderImages.stop().animate({
            left: -100 * index + '%'
        }, 400);
        currentIndex = index;
    });
});