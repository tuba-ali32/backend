 import express from "express"
const app = express()
const port = process.env.PORT ||  3000

app.get('/', (req, res) => {
  res.send('Hello server')
})


app.get('/weather', (req, res) => {
  res.json({ user: 'tobi' })
})
app.get('/weather/:cityName', (req, res) => {
  res.send(req.params)
})
app.get('/weather/:cityName/:side', (req, res) => {
  res.send(req.params)
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
