# GraphQL Playground offline
An offline playground cdn for running GraphQL Playground in an offline environment.

## Getting Started
### Install
```
npm install  
```
### Running the project
```
npm start
```

## How to use?
First of all run and deploy this CDN with a configured port (default: 5678).
Then, open your project and reconfigure the playground config of the Apollo Server to:
```
const server: ApolloServer = new ApolloServer({
  schema,
  playground: {
    cdnUrl: `http://localhost:${PORT}`,
    version: "1.0.0"
  },
});
```

## Tech/framework used
* NodeJS
* Express
* Playground