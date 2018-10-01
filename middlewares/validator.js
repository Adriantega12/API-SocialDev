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

    for (let part in rules) { // part = body, params
      for (let field in rules[part]) { // field = body { attrib }
        let validators = rules[part][field].split(' '); // validator = body { attrib: 'validator' }
        validators.forEach((f) => { // validator = [ 'required', 'word' ]
          if (!Validator[f](req[part][field] || '')) { //
            if (Array.isArray(error.details[field])) {
              error.details[field].push(`The field ${field} should be a valid ${f}`);
            } else {
              error.details[field] = [`The field ${field} should be a valid ${f}`];
            }
          }
        });
      }
    }
    Object.keys(error.details).length ? next(error) : next();
  }
}

module.exports = Validator;
