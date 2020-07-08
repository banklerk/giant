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
$(document).ready(() => {
  var $page = $('html, body');
  $('.header-list__link').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });
});