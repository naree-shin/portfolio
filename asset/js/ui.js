$(document).ready(function () {

    // 메인표지 세로스크롤 이벤트
    $(window).scroll(function () {
    
        var f = true;
        let $html = $('html')
        let $mainTop = $('aside')
        let sclTop = $(document).scrollTop();
    
        if(sclTop > 0) {
            $mainTop.slideUp();
        } else if(sclTop < 100) {
            $mainTop.slideDown();
        }
    
    }); 

    // 메뉴 클릭시 스크롤위치 이벤트
    $('.contents').each(function (index, item) {
        
        // 콘텐츠에 클래스추가
        $(item).addClass('contents' + index);
        
        // 콘텐츠 스크롤 위치별 메뉴 active
        $(window).scroll(function() {
            if ($(window).scrollTop() > Math.ceil($('.contents' + index).offset().top)) {
                $('.header_gnb li').removeClass('active');
                $('.btnCont' + index).addClass('active');
            }
        });
    })

    // 헤더 메뉴 클릭시 콘텐츠로 이동
    $('.header_gnb li').each(function (index, item) {
        $(item).addClass('btnCont' + index);
        $(item).click(function(){
            let contOffset = $('.contents' + index).offset();
            $('html').animate({scrollTop : contOffset.top}, 400);
        });
     });

    //  $(window).scroll(function() {
    //     if ($(window).scrollTop() > Math.ceil($('.about_txt').offset().top)) {
    //         $('.about_txt p').addClass('active');
    //     }
    // });

});