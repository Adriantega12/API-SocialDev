const fs = require('fs');

class FileHandler {
  static directoryConfig() {
    fs.mkdir('uploads');
  }

  static async moveFiles(req, res, next) {
    let filePaths = [];
    for (const fileField in req.files) {
      req.files[fileField].forEach((file) => {
        const filePath = `uploads/file-${file.filename}`;
        fs.rename(file.path, filePath, (error) => {
          if (error) {
            return next(error);
          }
        });
        filePaths.push(filePath);
      });
    }

    req.filePaths = filePaths;
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

  static async removeFileFromPath(path) {
    fs.unlink(path, (error) => {
      if (error) {
        throw error;
      }
    });
  }
}

module.exports = FileHandler;
