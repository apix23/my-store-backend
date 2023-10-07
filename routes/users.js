const express = require("express")

const route = express.Router()
const UsersService = require("../services/users")

const service = new UsersService()


route.get('/', (req,res) => {
  const users = service.find()
  res.json(users)
})

module.exports = route
