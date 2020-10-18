$(document).ready(function () {
    $('.header-section-link').hover(function (){
        // console.log("是a連結");
        $(this).children('.header-section-image').toggleClass('active');
        $(this).children('.header-section-cover').toggleClass('header-section-cover-cover');
        
    })
})