.PHONY: all clean js server dev-server

export PATH := node_modules/.bin:$(PATH)
export SHELL := /usr/bin/env bash

YARN := $(shell command -v yarn 2> /dev/null)

ifndef YARN
  $(error "You need Yarn! https://yarnpkg.com/lang/en/docs/install/")
endif

all: yarn.lock js

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
	rm -rf dist node_modules yarn.lock
