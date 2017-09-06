'use strict';

const processNames = function(ctx, next) {
  ctx[ctx.path.split('/')[1]] = ctx.params[0].split('/').map(param=> {
    return param.split('_').map(name => name[0].toUpperCase() + name.substring(1)).join(' ');
  })
  next(); 
};

page('/wizards/*', processNames, function(ctx) {
  //add wizards to the <ul>
  $('main').prepend('<h1>Wizards</h1>');
  ctx.wizards.forEach(wizard => $('#names').append(`<li>${wizard}</li>`));
});

page('/notwizards/*', processNames, function(ctx) {
  $('main').prepend('<h1>Not Wizards</h1>');
  ctx.notwizards.forEach(notwizard => $('#names').append(`<li>${notwizard}</li>`));
});

page();
