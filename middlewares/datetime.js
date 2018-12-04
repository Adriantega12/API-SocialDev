class Datetime {
  static toMySQLFromJS(date) {
    return new Date(date).toISOString().slice(0, 19).replace('T', ' ');
  }

  static toJSFromMySQL(date) {
    const d = new Date(date);
    return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
  }
}

module.exports = Datetime;
