class Validator {
  static get regex() {
    return {
      word: /[a-zA-ZñÑáéíóúÁÉÍÓÚ]{2,}/,
      email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };
  }

  static word(data) {
    return Validator.regex.word.test(data);
  }

  static email(data) {
    return Validator.regex.email.test(data);
  }

  static integer(data) {
    return Number.isInteger(data);
  }

  static require(data) {
    return data !== undefined && data !== null && data.length;
  }

  static validate(req, res, next, rules) {
    const error = {
      message: 'Validation Error',
      status: 409,
      details: {},
    };
  }
}

module.exports = Validator;
