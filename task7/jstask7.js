document.addEventListener("DOMContentLoaded", () => {
$(document).ready(function(){
  var $gallery = $('.gallery');
  
  // Инициализация слайдера
  $gallery.slick({
      centerMode: true,
      centerPadding: 0,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      infinite: true, // Бесконечный слайдер
      responsive: [
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  centerMode: false,
              }
          }
      ]
  });
});
}); 
