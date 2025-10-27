

document.addEventListener("DOMContentLoaded", function(e){
  lang_toggle();
  sec1_slide();
})


const lang_toggle = () => {
  // 현재 언어 영역 클릭 시 토글
  $("header .lang-div .item").click(function(e){
    e.stopPropagation(); // 이벤트 버블링 막음
    $("header .lang-div .lang-list").slideToggle();
  });

  // 언어 리스트 클릭 시 (내부 클릭은 닫히지 않음)
  $("header .lang-div .lang-list").click(function(e){
    e.stopPropagation();
  });

  // 바깥 영역 클릭 시 언어 리스트 닫힘
  $(document).click(function(){
    $("header .lang-div .lang-list").slideUp();
  });
};
const sec1_slide = () => {

    var swiper = new Swiper(".sec1_swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
    loopedSlides: 3,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 1000,
    effect: 'fade', 
    // fadeEffect: {
    //   crossFade: true, 
    // },
  });

};

