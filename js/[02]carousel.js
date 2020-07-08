
$(document).ready(function () {
  $('.carousel-feedback').carousel({
    numVisible: 7,
    padding: 45,
  });

  $('.moveNextCarousel').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel-feedback').carousel('next');
  });


  $('.movePrevCarousel').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel-feedback').carousel('prev');
  });
});
