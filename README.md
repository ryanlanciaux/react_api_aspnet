# React App + ASP.NET Core

This application is a combination of [create-react-app](https://github.com/facebookincubator/create-react-app) and a super basic [ASP.NET Core](https://www.asp.net/core) API. It is very much based on [this excellent guide from Fullstack React on running create-react-app with a node api](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/).

## Install and run ##

```
npm install
npm start
```

## Basic structure ##

Our app structure is as follows. We install an instance of a [create-react-app](https://github.com/facebookincubator/create-react-app) under `/client`. This is basically just an application made with [create-react-app](https://github.com/facebookincubator/create-react-app).

We have a [dotnet core](https://www.asp.net/core) app running under `/api`. This is pretty generic and just has a couple of classes for the sake of example.

## How it works ##

1) In the root directory of the application, there are a series of node modules that interact with the commands of the sub applications.

```
const cp = require('child_process');

const opts = { stdio: 'inherit', cwd: 'api', shell: true };
cp.spawn('dotnet', ['run'], opts);
```

2) The root package.json contains a series of node scripts for running these modules concurrently (so we can run dotnet core and the dev-server for create-react-app at the same time).

```
"scripts": {
    "start": "concurrently \"npm run server\" \"npm run client\"",
    "server": "./node_modules/.bin/babel-node startServer.js",
    "client": "./node_modules/.bin/babel-node startClient.js",
    ...
}
```

3) `client/package.json` sets up a proxy to the server.

```
"proxy": "http://localhost:5000/",
```
