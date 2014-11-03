
$(document).ready(function() {

  $("body").keydown(function(event) {

    if(event.which === 65) {
      console.log("You pressed A");
    } else if(event.which === 76) {
      console.log("You pressed L");
    }

  });

});

