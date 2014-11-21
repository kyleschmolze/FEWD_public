function refresh() {
  $("table.events tbody").html('');
  var groupmuseUrl = 'https://www.groupmuse.com/events.json?city_name='+$(".city").val();
  $.get(groupmuseUrl, function(response) {
    for(var i = 0; i < response.length; i++) {
      $("table.events tbody").append(
        "<tr>" +
          "<td><img src='" + response[i].user.avatar_thumb + "'></td>" + 
          "<td>" + response[i].user.name + "</td>" + 
          "<td>" + 
            "<a href='" +  response[i].url + "'>" +
              response[i].title + 
            "</a>" +
          "</td>" + 
          "<td>" + response[i].starts_at_date + "</td>" + 
          "<td>" + response[i].city + ', ' + response[i].state + "</td>" + 
        "</tr>"
      );
    }
  });
  // When it returns, console.log(response);
  // As a code-along, we shall:
  // 0. Make API call to https://www.groupmuse.com/events.json
  // 1. console.log response, response[0]
  // 2. event = response[0]
  // 3. append to table with nice multi-line string syntax

  /*
    Bonus: 
      - refresh() on <select> change instead of <form> submit
      - Load list of cities from the API:
        - Endpoint: https://www.groupmuse.com/api/cities.json
        - On page load (and only once), pull in list of cities from API
        - Populate the <select> tag with <option>s built from json response
  */
}


$(document).ready(function() {
  // Set up a submit handler so that refresh is called when the form is submitted
  $("form.search").submit(function() {
    refresh();
    return false;
  });

  // Call it once on page load
  refresh();

  var image = $(".img-container img");
  var body = $("body")
  $(document).scroll(function() {
    var top = body.scrollTop() / 2;
    image.css('transform', 'translate(0, ' + top + 'px)');
    if(top > 70) {
      image.css('opacity', (170-top)/100);
    }
  })
});






