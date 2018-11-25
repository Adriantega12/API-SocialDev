function errorHandler(err, req, res, next) {
  if (req.files && req.files.length > 0) {
    // Do something
  }
  console.error('Error handler', err);
  return res.status(err.status || 500).send(err);
}

module.exports = errorHandler;
