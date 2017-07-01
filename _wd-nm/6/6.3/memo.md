t9:6.3 tetsuya$ mocha 05-sinon-stub-throw.js


  Test Suite
    1) stubs the object


  0 passing (39ms)
  1 failing

  1) Test Suite stubs the object:

      AssertionError: expected [Function] to throw { message: 'Custom message' } but { message: 'Custom message' } was thrown
      + expected - actual


      at Object.should.Throw (/Users/tetsuya/.nvm/versions/node/v6.10.2/lib/node_modules/chai/lib/chai/interface/should.js:111:33)
      at Context.<anonymous> (05-sinon-stub-throw.js:21:16)