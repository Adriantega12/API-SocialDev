const FileHandler = require('./fileHandler');

function errorHandler(err, req, res, next) {
  // Handle file uploading (if there is any)
  if (req.files) {
    FileHandler.removeFiles(req, res, next);
  }
  console.error(`[${new Date(Date.now())}] Error handler: `, err);
  return res.status(err.status || 500).send(err);
}

module.exports = errorHandler;
