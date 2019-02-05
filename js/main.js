$(function() {
  
  $("#btn-down").on("click", function(event) {
    event.preventDefault();
    const new_position = $("#scroll-to").offset();
    $('html, body').animate({scrollTop : new_position.top }, 1000);
  });

});

