const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    //   console.log(request, request.readyState)
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText)
      callback(undefined, data)
    } else if (request.readyState === 4) {
      callback("could'nt fetch", undefined)
    }
  })

  request.open('GET', resource)
  request.send()
}
getTodos('todos/luigi.json', (err, data) => {
  console.log(data)
  getTodos('todos/pajkat.json', (err, data) => {
    console.log(data)
    getTodos('todos/todo.json', (err, data) => {
      console.log(data)
    })
  })
})
