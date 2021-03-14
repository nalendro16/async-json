const getTodo = async () => {
  const request = await fetch('todos/luigi.json')
  if (request.status !== 200) {
    throw new Error('no data fetched')
  }
  const data = await request.json()
  return data
}
console.log(1)
console.log(2)

getTodo()
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message))

console.log(3)
console.log(4)
