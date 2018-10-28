class Authorizer {
  static owns(req) {
    const { user } = req.session;
    const resource = req.baseUrl.split('/').slice(-1)[0];
    const resourceId = req.params[resource.replace(/.$/, 'Id')];

    if (user[resource].find(element => element.id === Number(resourceId))) {
      return true;
    }

    return false;
  }

  static ownsParent(req) {
    const { user } = req.session;
    const resource = req.baseUrl.split('/').slice(-3)[0];
    const resourceId = req.params[resource.replace(/.$/, 'Id')];

    if (user[resource].find(element => element.id === Number(resourceId))) {
      return true;
    }

    return false;
  }

  static authorize(req, res, next, rule) {
    const { role } = req.session.user;
    if (role === 'admin' || (role === 'user' && Authorizer[(rule.user)](req))) { // Unauthorized
      return next();
    }

    return next({ // Not authorized
      status: 403,
      message: 'You don\'t have permission to do this action.',
    });
  }
}

module.exports = Authorizer;
