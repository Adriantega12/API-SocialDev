class Authorizer {
  static owns(req) {
    const { user } = req.session;
    const resource = req.baseUrl.split('/').slice(-1)[0];
    const resourceId = req.params[resource.replace(/.$/, 'Id')];

    if (user[resource].find(element => element.id === Number(resourceId))) {
      console.log('User owns resource');
    }
  }

  static ownsParent(req) {
    const { user } = req.session;
    const resource = req.baseUrl.split('/').slice(-3)[0];
    const resourceId = req.params[resource.replace(/.$/, 'Id')];

    if (user[resource].find(element => element.id === Number(resourceId))) {
      console.log('User owns parent resource');
    }
  }

  static authorize(req, res, next) {
    Authorizer.ownsParent(req);
  }
}

module.exports = Authorizer;
