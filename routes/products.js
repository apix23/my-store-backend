const express = require("express")
const {faker} = require("@faker-js/faker")

const router = express.Router()

router.get('/', (req,res) => {
  const {size} = req.query
  const limit = size || 10
  const products = []
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl()
    })

  }
  res.json(products)
})

router.get('/:id', (req,res) => {
  const {id} = req.params
  res.json({
    id,
    price:100,
    productName: 'mixer'
  },
)
})

router.post('/', (req,res)=>{
const body = req.body
  res.json({
    message:"created",
    data: body
  })
})

/*
We can use here either a patch or a put as a endpoint
even though this is possible, for convention we use patch
when we want to update some properties but not all of then

In case we wanted to eddit all of then, for convention we would be
using a put

*/
router.patch('/:id', (req,res)=>{
const body = req.body
const {id} = req.params
  res.json({
    id,
    message:`properties changed: ${JSON.stringify(body)}`,
    body
  })
})


router.delete('/:id', (req,res)=>{
const {id} = req.params
  res.json({
    id,
    message:"the element was deleted",

  })
})

module.exports = router
