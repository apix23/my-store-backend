const logErrors = (err, _req, _res,next ) => {
  console.error(err)
  next(err)
}

// eslint-disable-next-line no-unused-vars
const handleError = (err, _req, res, _next ) => {
  res.status(500).json({message: err.message, stack: err.stack})
}

const boomErrorHandler = (err, _req, res, next ) => {
  if (err.isBoom) {
    const {output} = err
    res.status(output.statusCode).json(output.payload)
  }
  else{
    next(err)
  }
}

module.exports = {logErrors, handleError,boomErrorHandler}
