# Mocha Test Skeleton

This repo demonstrates how to run mocha + expect.js unit tests in the browser
or headlessly, with tests written in BDD (Behavior Driven Development) style.

It uses:

* [mocha](http://visionmedia.github.io/mocha/) -- a JavaScript test framework
  for running tests on Node.js and the browser
* [expect.js](https://github.com/LearnBoost/expect.js/) -- a small BDD-style
  assertion library
* [karma](http://karma-runner.github.io/) -- A test automation tool that can execute tests in 
  multiple browsers in parallel

It includes the files:

* `js/my-component/my-component.js` -- the code under test (a trivial global 
  function that does some DOM manipulation)
* `test/js/my-component/tests.js` -- the mocha test suite. The functions
  "describe()" and "it()" and "afterEach()" are part of mocha; the
  "expect()" functions are assertion functions that come from expect.js.

## Installing

1. Install Node.js and npm. You can do this using a package manager, or by
   downloading the install file from [NodeJS.org](http://nodejs.org/). 
2. Use git to clone this repo on your local machine.
3. Enter the repo directory and type `make install`. This installs
   dependencies (mocha, expect.js, and Karma).

## Running the tests in multiple real browsers in parallel

1. In another terminal window (or the background), run `make start`.
   This starts a Karma server hub on localhost:9876.
2. Run `make test` and observe the results on the command line.

By default, this runs tests in Chrome and Firefox.
You can modify Karma's behavior by killing the server process,
editing the Karma config file, and restarting the server.
