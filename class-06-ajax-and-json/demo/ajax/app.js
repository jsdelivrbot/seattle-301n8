$.getJSON('/wizards.json')
  .done(function(wizards) {
    var template = Handlebars.compile($('#template').html());
    wizards.forEach(function(wizard) {
      $('#wizards').append(template(wizard));
    })
  })
  .fail(function(res, err) {
    console.log('fail!');
    console.log(err);
  })
