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
      } else if (request.readyState === 0) {
        reject('error no data')
      }
    })
    request.open('GET', resource)
    request.send()
  })
}

getProm('todo.json')
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
