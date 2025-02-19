 import express from "express"
const app = express()
const port = process.env.PORT ||  3000
import path from "path"


const __dirname = path.resolve()
app.use('/', express.static(path.join(__dirname, './web/dist')))


app.get('/', (req, res) => {
  res.send("get  chlrha ha")
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
