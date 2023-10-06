const express = require("express")
const productsRoute = require("./products")
const  usersRoute = require("./users")
const categoriesRoute = require("./categories")

function routersApi(app) {
  const route = express.Router()
  //in case we want to add and extra layer route to the url
  // by doing this we are adding '/api/v1/' to each one
  app.use('/api/v1/', route)
  route.use('/products',productsRoute)
  route.use('/users',usersRoute)
  route.use("/categories",categoriesRoute)
}

module.exports = routersApi
