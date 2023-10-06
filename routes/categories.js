const express = require("express")

const route = express.Router()

route.get('/categories/:categoryId/products/:productId', (req,res) => {
  const {categoryId,productId} = req.params
  res.json({
    categoryId,productId
  },
)
})


module.exports = route
