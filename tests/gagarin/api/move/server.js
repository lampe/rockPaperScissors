/*eslint-disable*/
/*
  more info why not to use es6 right now with gagarin
  https://github.com/anticoders/gagarin/issues/163
*/

describe('Rock Paper Scissors Rest Api - Server', function () {
  var server = meteor({
    flavor: 'fiber'
  });
  var client = browser(server, {
    flavor: 'promise'
  });
  describe('- Initalize -', function () {
    it('should be present on Server', function () {
      return server.execute(function () {
        expect(RoPaSc).to.be.an('object');
      });
    });
    it('should not be a empty object on the Server', function () {
      return server.execute(function () {
        expect(RoPaSc).not.to.be.empty;
      });
    });
  });
});
