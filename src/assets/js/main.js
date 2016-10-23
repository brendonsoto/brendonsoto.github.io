$('body').on('click', '.nav a', function() {
  $('.nav .active').removeClass('active');
  $(this).parents('li').addClass('active');
});
