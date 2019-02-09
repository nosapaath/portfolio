$(function() {

  // if ( $(window).width() > 620) {      
  //   setTimeout(function () {
  //     $(".title-type").html("<h1>I am a Web Developer</h1>")},3500);
  // } 
  // else {
  //   return;
  // }
  
  // <i onclick='' id="btn-down" class="fas fa-arrow-down fa-2x button" ></i>
  // $("#btn-down").on("click", function(event) {
  //   event.preventDefault();
  //   const new_position = $("#scroll-to").offset();
  //   $('html, body').sc({scrollTop : new_position.top }, 1000);
  // });

  console.log('%c Hire Me!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');

  //menu
  const $menuBtn = $('#menu-btn');
  const $menu = $('.menu');
  const $menuNav = $('.menu-nav');
  const $menuBranding = $('.menu-branding');
  // const $navItems = $('.nav-item');

  //initial state of menu
  let $showMenu = false;

  $('#menu-btn').click(function(){
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
      $('.menu-nav a:has(.nav-item)').removeClass('show');
      $menuBtn.removeClass('close');
      $menu.removeClass('show');
      $menuNav.removeClass('show');
      $menuBranding.removeClass('show');

      // Set Menu State
      $showMenu = false;
    }
  }

  //form
  $('#submit').click(function(event){
    console.log('click')

    let $email = $('.email').val()
    let $name = $('.name').val()
    // let $message = $('.message').val()
    let $statusElm = $('.status')
    $statusElm.empty()

    if($email.length > 5 && $email.includes('@') && $email.includes('.')){
      // $statusElm.append('<div>email is valid</div>');
    }else{
      event.preventDefault()
      $statusElm.append('<div>Please check your email</div>');
    }

    if($name.length > 0){
      // $statusElm.append('<div>name is valid</div>');
    }else{
      event.preventDefault()
      $statusElm.append('<div>Please enter your Name</div>');
    }

    // if($message.length > 2){
    //   $statusElm.append('<div>msg is valid</div>');
    // }else{
    //   event.preventDefault()
    //   $statusElm.append('<div>msg is invalid</div>');
    // }
  })

  $('.scroll-link').click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $('#tech').offset().top-20
		}, 750);
  });
  $('#chat').click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $('#scrollto').offset().top
		}, 550);
	});
})

