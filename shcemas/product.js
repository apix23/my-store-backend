const joi = require('joi')


const id = joi.string().uuid()
const name = joi.string().min(5).max(15)
const price = joi.number().greater(10)

const createProductSchema = joi.object({
  id: id.required(),
  name: name.required(),
  price: price.required(),
})

const updateProductSchema =  joi.object({
  name: name,
  price: price,
})

const getProductSchema =  joi.object({
  id: id.required(),
})

module.exports = {createProductSchema, updateProductSchema, getProductSchema}
