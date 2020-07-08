$(document).ready(function () {
  $('.carousel').carousel({
    numVisible: 7,
    dist: -900,
    padding: 150,
    shift: -100,
  });

  $('.moveNextCarousel').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
  });


  $('.movePrevCarousel').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
  });

});
