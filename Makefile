BIN = node_modules/.bin

install:
	npm install

start:
	$(BIN)/yeti --server

test:
	$(BIN)/mocha-phantomjs test/js/my-component/index.html

test-hub:
	$(BIN)/yeti test/js/my-component/index.html


.PHONY: start test test-headless
