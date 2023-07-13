# conexa-challenge

This app was built entirely in TypeScript: with Next.js for its frontend components and Express (server) to serve requests pointed to `http https://swapi.dev/api`.

For now, correct functionalities are ensured only in local environment (development).

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
Server will run in [http://localhost:8080](http://localhost:8080), you can make requests with Postman.

## Tests

Tests remain very basic, I could not work around handling asynchronisity in Jest / RTL. I will be working on this eventually.


## Deployment

Front end deploy ->  [link to site](https://conexa-challenge-omega.vercel.app/)

Back end deploy -> Pending

_Custom servers for Next.js apps have their specific caveats which, unfortunately, I have not been able to sort out for the time being. (I had to create a [new repo](https://github.com/mmiglioranza22/conexa-challenge-server) with the ./api directory exclusively to be able to deploy it separately. Once I get enought insight and fix this, the url will be placed here (and linked in the front end app). Any suggestions are welcome and much appreciated_

