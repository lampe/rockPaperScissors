/*eslint-disable*/
/*
  more info why not to use es6 right now with gagarin
  https://github.com/anticoders/gagarin/issues/163
*/

describe('Rock Paper Scissors Rest Api - Client', function () {
  var server = meteor({
    flavor: 'fiber'
  });
  var client = browser(server, {
    flavor: 'promise'
  });
  it('RoPaSc object should not be present on Client', function () {
    return client.execute(function () {
      var RoPaSc = RoPaSc || undefined;
      expect(RoPaSc).to.be.undefined;
    });
  });
  describe('- RoPaSc Api Routes', function () {
    it('GET /api/move/rock should return a Object with a result', function () {
      return client.promise(function (resolve) {
        HTTP.get(Meteor.absoluteUrl() + 'api/move/rock', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.data).to.be.an('object');
      });
    });
    it('GET /api/move/rock should return a statusCode', function () {
      return client.promise(function (resolve) {
        HTTP.get(Meteor.absoluteUrl() + 'api/move/rock', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.statusCode).to.be.an('number');
      });
    });
    it('GET /api/move/rock should return a Object with a player move', function () {
      return client.promise(function (resolve) {
        HTTP.get(Meteor.absoluteUrl() + 'api/move/rock', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.data.move.player).to.be.an('String');
      });
    });
    it('GET /api/move/rock should return a Object with a computer move', function () {
      return client.promise(function (resolve) {
        HTTP.get(Meteor.absoluteUrl() + 'api/move/rock', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.data.move.computer).to.be.an('String');
      });
    });
    it('GET /api/move/rock should return a Object with a winner propertie', function () {
      return client.promise(function (resolve) {
        HTTP.get(Meteor.absoluteUrl() + 'api/move/rock', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.data.winner).to.be.an('String');
      });
    });
    it('GET /api/move/stein should return a 400 statusCode', function () {
      return client.promise(function (resolve) {
        HTTP.get(Meteor.absoluteUrl() + 'api/move/stein', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.statusCode).to.equal(400);
      });
    });
    it('GET /api/move/ should return a 400 statusCode', function () {
      return client.promise(function (resolve) {
        HTTP.get(Meteor.absoluteUrl() + 'api/move/', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.statusCode).to.equal(400);
      });
    });
    it('GET /api/move should return a 400 statusCode', function () {
      return client.promise(function (resolve) {
        HTTP.get(Meteor.absoluteUrl() + 'api/move', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.statusCode).to.equal(400);
      });
    });
    it('GET /api/mov should return a 400 statusCode', function () {
      return client.promise(function (resolve) {
        HTTP.get(Meteor.absoluteUrl() + 'api/mov', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.statusCode).to.equal(400);
      });
    });
    it('GET /api should return a 400 statusCode', function () {
      return client.promise(function (resolve) {
        HTTP.get(Meteor.absoluteUrl() + 'api', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.statusCode).to.equal(400);
      });
    });
    it('GET /ap should return HTML', function () {
      return client.promise(function (resolve) {
        HTTP.get(Meteor.absoluteUrl() + 'ap', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.headers['content-type']).to.equal('text/html; charset=utf-8');
      });
    });
    it('GET /apimove should return HTML', function () {
      return client.promise(function (resolve) {
        HTTP.get(Meteor.absoluteUrl() + 'apimove', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.headers['content-type']).to.equal('text/html; charset=utf-8');
      });
    });
    it('POST /api/ should return 405 HTTP Status', function () {
      return client.promise(function (resolve) {
        HTTP.post(Meteor.absoluteUrl() + 'api', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.statusCode).to.equal(405);
      });
    });
    it('PUT /api/ should return 405 HTTP Status', function () {
      return client.promise(function (resolve) {
        HTTP.put(Meteor.absoluteUrl() + 'api', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.statusCode).to.equal(405);
      });
    });
    it('DEL /api/ should return 405 HTTP Status', function () {
      return client.promise(function (resolve) {
        HTTP.del(Meteor.absoluteUrl() + 'api', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.statusCode).to.equal(405);
      });
    });
  });
});
