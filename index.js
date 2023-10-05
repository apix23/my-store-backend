const express = require("express")

const app = express()
const port = 3000

app.get('/', (req,res) => {
  res.send('hello world')
})

app.get('/products', (req,res) => {
  res.json([{
    price:100,
    productName: 'mixer'
  },
  {
    price:250,
    productName: 'banana'
  }
])
})

app.get('/products/:id', (req,res) => {
  const {id} = req.params
  res.json({
    id,
    price:100,
    productName: 'mixer'
  },
)
})

app.get('/categories/:categoryId/products/:productId', (req,res) => {
  const {categoryId,productId} = req.params
  res.json({
    categoryId,productId
  },
)
})


app.get('/users', (req,res) => {
  const {limit, offset} = req.query

  if (limit && offset) {
    res.json({
      limit,
      offset
    },
  )
}
else{
  res.send('we are not receiving any parameter')
}
})

app.listen(port, ()=> {
  console.log(`Example app listening on port ${port}` )
})
