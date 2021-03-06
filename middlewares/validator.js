class Validator {
  static get regex() {
    return {
      word: /[ a-zñáéíóú]{2,}/i,
      email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      specialalphanum: /^[a-zA-Z0-9!@#$&()\\-`.+,/\"]*$/,
    };
  }

  static word(data) {
    return Validator.regex.word.test(data);
  }

  static email(data) {
    return Validator.regex.email.test(data);
  }

  static specialalphanum(data) {
    return Validator.regex.specialalphanum.test(data);
  }

  static integer(data) {
    return Number.isInteger(Number(data));
  }

  static boolean(data) {
    return typeof Boolean(data) === 'boolean';
  }

  static date(data) {
    return !Number.isNaN(Date.parse(data));
  }

  static required(data) {
    return data !== undefined && data !== null && data.length > 0;
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
        const isRequired = validators.find(rule => rule === 'required');
        validators.forEach((f) => { // validators = [ 'required', 'word' ]
          if (isRequired || field in req[part]) {
            if (!Validator[f](req[part][field] || '')) {
              if (Array.isArray(error.details[field])) {
                error.details[field].push(`The field ${field} should be a valid ${f}`);
              } else {
                error.details[field] = [`The field ${field} should be a valid ${f}`];
              }
            }
          }
        });
      }
    }

    if (Object.keys(error.details).length !== 0) {
      next(error);
    } else {
      next();
    }
  }
}

module.exports = Validator;
