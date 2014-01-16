install:
	npm install

start:
	npm start 

test:
	npm test

clean:
	rm -rf node_modules coverage

.PHONY: clean install start test
