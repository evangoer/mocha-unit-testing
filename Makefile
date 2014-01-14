BIN = node_modules/.bin

install:
	npm install

start:
	$(BIN)/karma start

test:
	$(BIN)/karma run

.PHONY: install start test
