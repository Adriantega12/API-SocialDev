class Validator 
{
  static get regex() 
  {
    return 
    {
      email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    };
}

static email(data) 
 {
    return (Validator.regex.email.test(data));
  }

static validate(req, res, next, rules) 
{
    const error = {
      message: 'Validation Error',
      status: 409,
      details: {},
};

module.exports = Validator;