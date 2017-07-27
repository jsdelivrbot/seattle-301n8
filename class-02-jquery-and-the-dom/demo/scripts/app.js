$(document).ready(function() {
  //code goes here  
});

$(function() {
  //moaaar codezzzzzzzz  
});

$(() => {
  var $wizards = $('#wizards');
  $wizards.css('background-color', '#6660aa');
  $wizards.addClass('something');
  console.log($wizards.attr('class'));
  $wizards.append('<li>Rincewind</li>');
  var $harryPotter = $('<li>');
  $harryPotter.text('Herrrry Puuutterrrrrr, yerrawizzarddssszzzzz');
  $wizards.append($harryPotter);
  $wizards.append($('<li>Willow</li>')
                    .addClass('the-awesomest-color-scheme')
                    .css('background-color', '#66aa60')
                    .css('color', 'red'));

  var ids = $wizards.attr('id');
  ids += ' another-id';
  $wizards.attr('id', ids);

  $harryPotter.parent().append($($.clone($harryPotter.parent().children('.the-awesomest-color-scheme')[0])).css('background-color', 'black'));
  var $misterDolf = $wizards.children()[0];
  $wizards.append($.clone($misterDolf));
  $wizards.append($wizards.clone());
  $($wizards.children('ul').children()[2]).css('background-color', 'orange');
});
