import app from './App'

// The port the express app will listen on
const port: number = +process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }

  return console.log(`server is listening on ${port}`)
})