const getTodo = async () => {
  const request = await fetch('todos/luigi.json')
  if (request.status === 404) {
    throw new Error('no data')
  }
  const data = await request.json()
  return data
}

getTodo()
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
