
build: components index.js
	@component build

components:
	@Component install

clean:
	rm -fr build components template.js

test:
	open test/index.html

.PHONY: clean test