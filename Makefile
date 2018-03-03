.PHONY: all clean js server js-server

export PATH := node_modules/.bin:$(PATH)
export SHELL := /bin/bash # required for OSX for some reason

# check if you have yarn in your path
YARN := $(shell command -v yarn 2> /dev/null)

all: yarn.lock js
ifndef YARN
  $(error "You need Yarn! https://yarnpkg.com/lang/en/docs/install/")
endif

js:
	NODE_ENV=production webpack -p --progress

server:
	python -m SimpleHTTPServer 8080

dev-server:
	webpack-dev-server -d --progress --inline --port 8080
	
yarn.lock: node_modules package.json
	$(MAKE clean)
	yarn install --production=false

node_modules:
	mkdir -p $@

clean:
	rm -rf node_modules yarn.lock
	rm -rf dist
