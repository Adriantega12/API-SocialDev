class Datetime {
  static toMySQLFromJS(date) {
    return new Date(date).toISOString().slice(0, 19).replace('T', ' ');
  }

  static toJSFromMySQL(date) {
    return new Date(date);
  }
}

module.exports = Datetime;
