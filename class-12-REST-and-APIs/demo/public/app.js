'use strict';

var $ = window.$;

$.ajax({
    url: 'https://api.github.com/user/repos',
    method: 'GET',
    headers: {
      'Authorization': `token ${githubToken}`
    }
})
  .then(results => {
    results.forEach(repo => $('#repos').append(`<li><a href="${repo.html_url}">${repo.name}</a></li>`));
  }, error => {
    console.log(error);
  });
