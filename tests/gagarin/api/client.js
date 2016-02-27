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
    it('/move/rock should return a Object with a result', function () {
      return client.promise(function (resolve) {
        HTTP.get(Meteor.absoluteUrl() + 'api/move/rock', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.data).to.be.an('object');
      });
    });
    it('/move/rock should return a statusCode', function () {
      return client.promise(function (resolve) {
        HTTP.get(Meteor.absoluteUrl() + 'api/move/rock', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.statusCode).to.be.an('number');
      });
    });
    it('/move/rock should return a Object with a player move', function () {
      return client.promise(function (resolve) {
        HTTP.get(Meteor.absoluteUrl() + 'api/move/rock', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.data.move.player).to.be.an('String');
      });
    });
    it('/move/rock should return a Object with a computer move', function () {
      return client.promise(function (resolve) {
        HTTP.get(Meteor.absoluteUrl() + 'api/move/rock', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.data.move.computer).to.be.an('String');
      });
    });
    it('/move/stein should return a 400 statusCode', function () {
      return client.promise(function (resolve) {
        HTTP.get(Meteor.absoluteUrl() + 'api/move/stein', function (err, result) {
          resolve(result);
        });
      }).then(function (result) {
        expect(result.statusCode).to.equal(400);
      });
    });
  });
});
