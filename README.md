# Mocha Test Skeleton

This repo demonstrates how to run mocha + expect.js unit tests in the browser,
with tests written in BDD (Behavior Driven Development) style.

It uses:

* [mocha](http://visionmedia.github.io/mocha/) -- a JavaScript test framework
  for running tests on Node.js and the browser
* [expect.js](https://github.com/LearnBoost/expect.js/) -- a small BDD-style
  assertion library
* [yeti](http://yeti.cx/) -- A test automation tool that can execute tests in 
  multiple browsers in parallel

It includes the files:

* `js/my-component/my-component.js` -- the code under test (a trivial global 
  function that does some DOM manipulation)
* `test/js/my-component/index.html` -- an HTML page that sets up the test
  infrastructure and enables you to run thet tests.
* `test/js/my-component/tests.js` -- the mocha test suite. The functions
  "describe()" and "it()" and "afterEach()" are part of mocha; the
  "expect()" functions are assertion functions that come from expect.js.

## Installing

1. Install Node.js and npm. You can do this using a package manager, or by
   downloading the install file from [NodeJS.org](http://nodejs.org/). 
2. Use git to clone this repo on your local machine.
3. Enter the repo directory and type `npm install`. This installs
   dependencies (mocha, expect.js, and yeti).

## Running the tests manually in a single browser

1. Open the `test/js/my-component/index.html` file in a browser.
   This displays a test page that shows two tests passing.

To run the test suite again, refresh the page.

## Running the tests in multiple browsers in parallel

1. In another terminal window (or the background), run `npm start`.
   This starts a yeti server hub on localhost:9000.
2. Connect as many browsers as you like to localhost:9000.
3. Run `npm test` and observe the results on the command line.

To run the test suite again, leave the yeti server running and let all browers
remain connected, and run `npm test` again.
