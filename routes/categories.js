const express = require("express")

const route = express.Router()
const CategoriesService = require("../services/categories")

const service = new CategoriesService()
route.get('/', (req,res) => {
  const categories = service.find()
  res.json(categories)
})
route.get('/:categoryId/products/:productId', (req,res) => {
  const {categoryId,productId} = req.params
  res.json({
    categoryId,productId
  },
)
})


module.exports = route
