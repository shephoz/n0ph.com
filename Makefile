dev:
	cd ./nextjs && npx next dev

build:
	cd ./nextjs && npx next build

export: 
	cd ./nextjs && npx next export

fbdeploy:
	firebase deploy

deploy:
	build export deploy