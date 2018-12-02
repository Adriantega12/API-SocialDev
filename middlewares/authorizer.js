class Authorizer {
  static isUser(req) {
    return req.session.user.id === Number(req.params.userId);
  }

  static owns(req) {
    const { user } = req.session;
    const resource = req.baseUrl.split('/').slice(-1)[0]; // Gets resource's name
    const resourceId = req.params[resource.replace(/.$/, 'Id')];

    console.log(resource, resourceId);

    return user[resource].length > 0
      && Authorizer.userOwnsResource(user[resource], Number(resourceId));
  }

  static ownsParent(req) {
    const { user } = req.session;
    const splitIndex = Object.keys(req.params).length > 1 ? -4 : -3;
    const resource = req.originalUrl.split('/').slice(splitIndex)[0]; // Gets parent resource's name
    const resourceId = req.params[resource.replace(/.$/, 'Id')];

    return user[resource].length > 0
      && Authorizer.userOwnsResource(user[resource], Number(resourceId));
  }

  static ownsChild(req) {
    const { user } = req.session;
    const resource = req.originalUrl.split('/').slice(-2)[0]; // Gets child resource's name
    const resourceId = req.params[resource.replace(/.$/, 'Id')];

    return user[resource].length > 0
      && Authorizer.userOwnsResource(user[resource], Number(resourceId));
  }

  static userOwnsResource(resourceArray, resourceId) {
    return resourceArray.find(element => element.id === resourceId);
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
