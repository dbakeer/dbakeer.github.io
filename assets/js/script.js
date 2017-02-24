var didScroll,
    lastScrollTop = 0,
    // delta gives the option of setting a certain amount of pixels to trigger the action;
    delta = 10,
    navbarHeight = $('nav').outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function(){
    if (didScroll){
      hasScrolled();
      didScroll = false;
    }
}, 250);

function hasScrolled(){
  // marks where we are in the "site map"
  var st = $(this).scrollTop();

  if (st > lastScrollTop && st > navbarHeight) {
    $('nav').removeClass('nav-down').addClass('nav-up');
  } else {
    $('nav').removeClass('nav-up').addClass('nav-down');
  }
  lastScrollTop = st;
}
