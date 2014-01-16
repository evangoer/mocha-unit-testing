/*
 * A trivial snippet of code to put under test.
 */
function appendDiv(selector) {
    var container = document.querySelector(selector),
        div = document.createElement('div');

    return container.appendChild(div);
}
