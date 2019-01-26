.PHONY: all clean js server dev-server

export PATH := node_modules/.bin:$(PATH)
export SHELL := /usr/bin/env bash

all: package-lock.json js

js:
	NODE_ENV=production webpack -p --progress

server:
	python -m SimpleHTTPServer 8888

dev-server:
	webpack-dev-server -d --progress --inline --port 8888

package-lock.json: node_modules package.json
	$(MAKE clean)
	npm install

node_modules:
	mkdir -p $@

clean:
	rm -rf dist node_modules package-lock.json
