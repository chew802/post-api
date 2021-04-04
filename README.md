# marvel-character-api

## Installation and commands
### Install

    git clone git@github.com:chew802/marvel-character-api.git
    cd marvel-character-api
    npm install

### Configure app
Go to https://developer.marvel.com/account# and register a new account if you dont have, after register should see a pair of private and public keys. 
Create a new file name with `.env`, then insert below lines and replace xxxx withe api keys you get from https://developer.marvel.com/account#

    MARVEL_API_PUBLIC_KEY=xxxx
    MARVEL_API_PRIVATE_KEY=xxxx

### Running the project

    npm run start
	
### Testing the project

    npm run test
	
### Prettier and lint the project

    npm run format #prettier
	npm run lint

### Simple build for production

    npm run build

## Snapshots
Question 1
![alt text](https://github.com/chew802/post-api/blob/master/README/question1.PNG?raw=true)
![alt text](https://github.com/chew802/post-api/blob/master/README/question2.PNG?raw=true)