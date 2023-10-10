const express = require("express")

const validator = require("../middlewares/validator")
const ProductsService = require("../services/products")
const {createProductSchema, updateProductSchema, getProductSchema} = require("../shcemas/product")

const router = express.Router()
const service = new ProductsService()

router.get('/', async (req,res) => {
  const products = await service.find()

  res.json(products)
})

router.get('/:id', validator(getProductSchema,'params'),async ( req,res, next ) => {
  try {
    const {id} = req.params
    const product = await service.findOne(id)
    res.json(product)

  } catch (error) {

    next(error)
  }
})

router.post('/', validator(createProductSchema,'body'), async (req,res)=>{
const body = req.body
const newProduct = await service.create(body)
  res.status(201).json(newProduct)
})

/*
We can use here either a patch or a put as a endpoint
even though this is possible, for convention we use patch
when we want to update some properties but not all of then

In case we wanted to eddit all of then, for convention we would be
using a put

*/
router.patch('/:id', validator(getProductSchema,'params'),validator(updateProductSchema,'body'),async (req,res, next)=>{
const body = req.body
const {id} = req.params
try {
  const product = await service.update(id,body)
  res.json(product)
} catch (err) {
  next(err)
}
})


router.delete('/:id', async (req,res)=>{
  const {id} = req.params
  const rst = await service.delete(id)
  res.json(rst)
})

module.exports = router
