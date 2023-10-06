const express = require("express")
const routersApi = require("./routes")
const app = express()
const port = 3000

//this middlalware allow us to received json info throuw a post
app.use(express.json())

app.get('/', (req,res) => {
  res.send('hello world')
})


routersApi(app)

app.listen(port, ()=> {
  console.log(`Example app listening on port ${port}` )
})
