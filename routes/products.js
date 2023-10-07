const express = require("express")

const ProductsService = require("../services/products")

const router = express.Router()
const services = new ProductsService()

router.get('/', (req,res) => {
  const products = services.find()

  res.json(products)
})

router.get('/:id', (req,res) => {
  const {id} = req.params
  const product = services.findOne(id)
  res.json(product)
})

router.post('/', (req,res)=>{
const body = req.body
  res.status(201).json({
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
