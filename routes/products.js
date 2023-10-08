const express = require("express")

const ProductsService = require("../services/products")

const router = express.Router()
const service = new ProductsService()

router.get('/', (req,res) => {
  const products = service.find()

  res.json(products)
})

router.get('/:id', (req,res) => {
  const {id} = req.params
  const product = service.findOne(id)
  res.json(product)
})

router.post('/', (req,res)=>{
const body = req.body
service.create(body)
  res.status(201).json({
    message:"created",
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
try {
  const product = service.update(id,body)
  res.json(product)
} catch (error) {
  res.status(404).json({error: error.message})
}
})


router.delete('/:id', (req,res)=>{
  const {id} = req.params
  const rst = service.delete(id)
  res.json(rst)
})

module.exports = router
