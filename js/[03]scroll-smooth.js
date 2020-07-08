$(document).ready(() => {
  var $page = $('html, body');
  $('.header-list__link').click(function () {
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });
});