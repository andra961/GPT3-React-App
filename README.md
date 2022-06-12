# GPT3-React-App

A React.js (typescript) SPA to try out and have fun with GPT3 and your API key. Uses text-curie-001 by default as a good balance between speed, cost and accuracy.

## Install

First, be sure to have Node.js installed. In the root of the project run:

```
npm install
```

to install the npm packages.

## Create .env

Create in the root folder a file called `.env`, with a variable called REACT_APP_GPT3_KEY containing your key (the free trial is enough). Get it at https://beta.openai.com/signup.

## Launch the project

Launch the project through the following command:

```
npm start
```

This should launch the web app on http://localhost:3000.

## Launch the project with Docker

Be sure to have Docker and Docker Compose installed and running (and having created the .env file)

Start the docker-compose with:

```
npm run docker-start
```

Stop the docker-compose with:

```
npm run docker-stop
```

You should find the web app running on http://localhost:3000.
