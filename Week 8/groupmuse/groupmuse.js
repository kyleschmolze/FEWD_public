function refresh() {
  console.log("This function doesn't do much yet!");

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
});
