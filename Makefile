dev:
	cd ./gridsome && NODE_OPTIONS=--openssl-legacy-provider gridsome develop

build:
	cd ./gridsome && NODE_OPTIONS=--openssl-legacy-provider gridsome build