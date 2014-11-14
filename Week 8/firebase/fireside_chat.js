var username;

$(document).ready(function() {

  var firebaseMessages = new Firebase('https://ajwtcbjryu3.firebaseio-demo.com/messages');
  var firebaseUsers = new Firebase('https://ajwtcbjryu3.firebaseio-demo.com/users');

  $(".signIn").submit(function() {
    username = $(".username").val();
    if(username === '') {
      alert("Please enter a name!");
    } else {
      $(".signIn").hide();
      $(".app").show();
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight });
      $(".newMessage").focus();
      userReference = firebaseUsers.push({name: username});
      userPath = userReference.toString(); // The toString function gives us the "URL" for this data
      new Firebase(userPath).onDisconnect().remove();
    }

    return false;
  });

  $('.newMessageForm').submit(function () {
    var message = $('.newMessage').val();
    if(message !== '') {
      type = $("input[name='messageType']:checked").val()
      firebaseMessages.push({name: username, text: message, type: type});
      $('.newMessage').val('');
      $("input[name='messageType'][value='text']").prop('checked', true);
    }

    return false;
  });

  firebaseMessages.on('child_added', function(snapshot) {

    var message = snapshot.val();
    var content;

    if(message.type === 'link')
      content = "<a href='" + message.text + "' target='_blank'>" + message.text + "</a>";
    else if(message.type === 'image')
      content = "<img src='" + message.text + "'>";
    else
      content = message.text;

    $(".messages").append(" \
      <div class='message'> \
        <p> <strong> " + message.name + ": </strong> " + content + "</p> \
      </div> \
    ");
    if($(".messages").is(":visible")) {
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight });
    }

  });

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

  $(".clearMessages").click(function() {
    firebaseMessages.remove();
  });

  $(".clearUsers").click(function() {
    firebaseUsers.remove();
  });

});
