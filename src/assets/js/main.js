$('body').on('click', '.nav a', function(e) {
  e.preventDefault();

  // Switch active classes
  $('.nav .active').removeClass('active');
  $(this).parents('li').addClass('active');

  // Scroll smoothly to the section
  var idToScrollTo = this.href.substring(this.href.lastIndexOf('#'));
  $('html, body').animate({
    scrollTop: $(idToScrollTo).offset().top
  }, 500);

  // Hide nav menu on mobile
  $('#navbar').collapse('hide');
});
