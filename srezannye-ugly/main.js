var animateHeaderTitle = false;

$(document).ready(function(){
  // Set the side padding and height to match the viewport
  //setPadding();

  if(!animateHeaderTitle){
    // Drop in and rotate the logo
    $('#headerTitle').css({ top: '-300px' });
    $('#headerTitle').animate({ top: '0px' }, { easing: 'easeOutElastic', duration: 5000 });
  }

  // Fade in the content area (doesn't work in IE thanks to the PNG opacity bug)

});

