var username;

$(document).ready(function() {


  var firebaseMessages = new Firebase('https://fewd-dev.firebaseio-demo.com/messages');

  // Each time a new message is called, this function will be run.
  // It will also be called for each existing message when the page is loaded!
  firebaseMessages.on('child_added', function(snapshot) {
    var message = snapshot.val();
    console.log(message);

    // We need to append the message into the .messages div here!
    /////////////////
    // YOUR CODE HERE
    /////////////////


    // Leave this guy alone:
    // Whenever a new message comes in, scroll down the .messages div to the bottom
    if($(".messages").is(":visible")) {
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight });
    }
  });

  $('.newMessageForm').submit(function () {
    // The user has just submitted the form to send a message.
    // We'll need to:
    // 1) Grab the value of the text input
    // 2) Store the new "message" in an object. Use a 'name' and 'text' attribute.
    // 3) Use firebaseMessage.push to add the new message object to firebase
    // 4) Reset the input to an empty string with ""

    /////////////////
    // YOUR CODE HERE
    /////////////////


    // Always return false with submit handlers, unless you want the page to refresh!
    return false;
  });









  ////////////////////
  // IGNORE CODE BELOW
  ////////////////////
  // This handlers the "users", you can use it as a reference, but you don't need to manipulate it

  // Declare our "users" endpoint
  var firebaseUsers = new Firebase('https://fewd-dev.firebaseio-demo.com/users');

  // When the initial "Sign In" form is submitted, 
  // add the new user and swap the divs
  $(".signIn").submit(function() {
    username = $(".username").val();

    if(username === '') {
      // Make sure they entered a name
      alert("Please enter a name!");
    } else {
      //Ok, they entered a name, now swap the divs:
      $(".signIn").hide();
      $(".app").show();

      // Scroll down the .messages div
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight });
      $(".newMessage").focus();

      // Add the user to the user list,
      // and ensure that they're removed if disconnected.
      userReference = firebaseUsers.push({name: username});
      userPath = userReference.toString(); 
      new Firebase(userPath).onDisconnect().remove();
    }

    return false;
  });


  /*
     Instead of reading each user 1-by-1, this listens to the 'value' event, which fires
     whenever any part of the object changes, and it also gives us a snapshot of the entire
     object. So this code just resets the users list to empty with "", and then appends each
     user to the list. This way it handles adding and removing users.
   */
  firebaseUsers.on('value', function(snapshot) {
    // Reset list of users to empty string
    $(".users").html('');

    var users = snapshot.val()
    for(var key in users) {
      if(users.hasOwnProperty(key)) {
        var user = users[key]
        $(".users").append(" <p> " + user.name + "</p> ");
      }
    }
  });
});
