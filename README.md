# [conexa-challenge](https://conexatech.notion.site/Full-Stack-Node-React-5eae96ec04eb43b88d57710545042071)

This app was built entirely in TypeScript: with Next.js for its frontend components and Express (server) to serve requests pointed to `https://swapi.dev/api`.

App can be try out in the link above or locally (dev environment).

## Instructions to run this app locally:

_Prerequisites: Node.js should be installed and configured in your machine._

- Open a terminal and clone the repository (HTTP or SSH):
```bash
  	git clone https://github.com/mmiglioranza22/conexa-challenge.git
	git clone git@github.com:mmiglioranza22/conexa-challenge.git
```

- Install dependencies in root and ./api directories
```bash
	npm i
	cd api/
	npm i
```

- Spin the front end app in the root directory 
```bash
  	npm run dev
```

- In a new terminal, spin the server in ./app 
```bash
  	npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the front end app.
Server will run in [http://localhost:8080](http://localhost:8080) (you can make requests with Postman if you wish, with the same format used by SWApi).

## Tests

Tests in remain very basic, I could not work around handling asynchronisity in Jest / RTL. I will be working on this eventually.

## Deployment

Front end deploy ->  [link to site](https://conexa-challenge-omega.vercel.app/)

Back end deploy -> [link to site](https://conexa-challenge-server-4327208ecb73.herokuapp.com/)

_Custom servers for Next.js apps have their specific caveats which require the server app to be decoupled from the frontend. Server was cloned from `./api` directory in a separate [repository](https://github.com/mmiglioranza22/conexa-challenge-server) exclusively for deployment in Heroku. Any suggestions to do this with a different workaround are welcome and much appreciated_

