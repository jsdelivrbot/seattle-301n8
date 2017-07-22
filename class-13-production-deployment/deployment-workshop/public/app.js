$.get('/github/user/repos?type=owner')
.then(data => {
  data.forEach(repo => {
    $('#repos').append(`<h3>${repo.name}</h3>`)
  })
})
