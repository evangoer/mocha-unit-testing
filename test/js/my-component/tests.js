/*global describe, it, beforeEach, afterEach, chai, appendDiv */

var assert = chai.assert;

describe('The appendDiv() function', function () {
    var container = document.createElement('div');
    container.id = 'test';
    document.body.appendChild(container);

    /*
     * Teardown function so that the two tests don't interfere
     */
    afterEach(function () {
        container.removeChild(container.lastChild);
    });

    it('can append a div into a container element', function () {
        assert.equal(container.lastChild, undefined);
        appendDiv('#test');
        assert.equal(container.lastChild.tagName, 'DIVX');
    });

    it('returns the div it just appended', function () {
        var div = appendDiv('#test');
        assert.equal(container.lastChild, div);
    });
});
