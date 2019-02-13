$(function() {

  console.log('%c Hire Me!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');

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

