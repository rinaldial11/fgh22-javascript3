fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      console.error('Jaringan bermasalah')
    }
    return response.json() 
  })
  .then(data => {
    const names = data.map(user => user.name)
    console.log(names)
  })
  .catch(error => {
    console.error('Tidak dapat mengakses data API.')
  })