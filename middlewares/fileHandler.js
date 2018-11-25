const fs = require('fs');

class FileHandler {
  static directoryConfig() {
    fs.mkdir('uploads');
  }

  static async moveFiles(req, res, next) {
    for (const fileField in req.files) {
      req.files[fileField].forEach((file) => {
        fs.rename(file.path, `uploads/file-${file.filename}`, (error) => {
          if (error) {
            return next(error);
          }
        });
      });
    }
    return next();
  }

  static async removeFiles(req, res, next) {
    for (const fileField in req.files) {
      req.files[fileField].forEach((file) => {
        fs.unlink(file.path, (error) => {
          if (error) {
            return next(error);
          }
        });
      });
    }
  }
}

module.exports = FileHandler;
