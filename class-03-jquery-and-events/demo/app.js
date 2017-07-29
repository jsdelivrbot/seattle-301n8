$('button#add-wizard').click(function() {
  if(!$('#new-wizard').val()) return alert('name yer wizard') ;
  var $liEl = $('li:first').clone().removeClass('template');
      $liEl.find('span').text($('input#new-wizard').val());
  $('#wizards').append($liEl);
  $('input#new-wizard').val('');
});

$('#wizards').on('click', 'button[data-action="murder"]', function() {
  $(this).parent().remove();
});

$('#ragnarok').click(function() {
  $('li').not('.template').remove();
});
