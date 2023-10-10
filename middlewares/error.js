const logErrors = (err, _req, _res,next ) => {
  console.log('inside the error middleware');
  console.error(err)
  next(err)
}

const handleError = (err, _req, res, _next ) => {
  res.status(500).json({message: err.message, stack: err.stack})
}

module.exports = {logErrors, handleError}
