const express = require("express")

const route = express.Router()

route.get('/', (req,res) => {
  const {limit, offset} = req.query

  if (limit && offset) {
    res.json({
      limit,
      offset
    },
  )
}
else{
  res.send('we are not receiving any parameter')
}
})

module.exports = route
