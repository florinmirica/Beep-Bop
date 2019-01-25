$(document).ready(function() {
  jQuery("form#favNumber").submit(function(event) {
    event.preventDefault()

    alert(favNumber);
  });
});
