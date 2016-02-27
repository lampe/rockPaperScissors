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
  describe('- Initalize -', function () {
    it('should not be present on Client', function () {
      return client.execute(function () {
        var RoPaSc = RoPaSc || undefined;
        expect(RoPaSc).to.be.undefined;
      });
    });
  });
});
