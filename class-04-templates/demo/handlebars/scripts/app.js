var tempilates = Handlebars.compile($('#template').html());

neighborhoodDataSet.forEach(function(place) {
  $('#places').append(tempilates(place));
});
