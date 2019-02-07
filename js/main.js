$(function() {

  if ( $(window).width() > 620) {      
    setTimeout(function () {
      $(".title-type").html("<h1>I am a Web Developer</h1>")},3500);
  } 
  else {
    return;
  }
  

  $("#btn-down").on("click", function(event) {
    event.preventDefault();
    const new_position = $("#scroll-to").offset();
    $('html, body').animate({scrollTop : new_position.top }, 1000);
  });

  console.log('%c Hire Me!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');

  //menu
  const $menuBtn = $('#menu-btn');
  const $menu = $('.menu');
  const $menuNav = $('.menu-nav');
  const $menuBranding = $('.menu-branding');
  const $navItems = $('.nav-item');

  //initial state of menu
  let $showMenu = false;

  $menuBtn.click(function(){
    console.log('work');
    toggleMenu();
  });

  function toggleMenu() {
    if (!$showMenu) {
      $menuBtn.addClass('close');
      $menu.addClass('show');
      $menuNav.addClass('show');
      $menuBranding.addClass('show');
      $('.nav-item').addClass('show');
  
      // Set Menu State
      $showMenu = true;
    } else {
      $menuBtn.removeClass('close');
      $menu.removeClass('show');
      $menuNav.removeClass('show');
      $menuBranding.removeClass('show');
      $('.menu-nav a:has(.nav-item)').removeClass('show');
  
      // Set Menu State
      $showMenu = false;
    }
  }
});

