const productsRoute = require("./products")
const  usersRoute = require("./users")
const categoriesRoute = require("./categories")

function routersApi(app) {
  app.use('/products',productsRoute)
  app.use('/users',usersRoute)
  app.use("/categories",categoriesRoute)
}

module.exports = routersApi
