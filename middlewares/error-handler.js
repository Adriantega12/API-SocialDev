function errorHandler(err, req, res, next) 
{
  console.error('Internal server error', err);

  return res.status(err.status || 500).send(err);
}

module.exports = errorHandler;