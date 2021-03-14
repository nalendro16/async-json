// promise
const getProm = (resource) => {
  return new Promise((resolve, reject) => {
    // Http request
    const request = new XMLHttpRequest()
    // chek avaibility of statechange:
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.response)
        resolve(data)
      } else if (request.readyState === 4) {
        reject('error no data')
      }
    })
    request.open('GET', resource)
    request.send()
  })
}

getProm('todos/luigi.json')
  .then((data) => {
    console.log('Promise luigi resolved', data)
    return getProm('todos/pajkat.json')
  })
  .then((data) => {
    console.log('Promise pajkat Resolver', data)
    return getProm('todos/todo.json')
  })
  .then((data) => {
    console.log('Promise todo Resolved', data)
  })
  .catch((err) => {
    console.log('Promise rejected', err)
  })
