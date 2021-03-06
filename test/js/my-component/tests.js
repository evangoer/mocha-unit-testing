/*global describe, it, beforeEach, afterEach, expect, appendDiv */

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
        expect(container.lastChild).to.not.be.ok();
        appendDiv('#test');
        expect(container.lastChild.tagName).to.be.eql('DIV');
    });

    it('returns the div it just appended', function () {
        var div = appendDiv('#test');
        expect(container.lastChild).to.be.eql(div);
    });
});
