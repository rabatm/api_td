require('dotenv').config()
import { ApolloServer } from "apollo-server-express";
import Schema from "./Schema";
import Resolvers from "./Resolvers";
import express from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import mongoose from 'mongoose'


const DB_URL= process.env.DB_URL
const DB_USER =  process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_PASS

//configuraiton de la connexion à la db
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_URL}/${DB_NAME}`)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


async function startApolloServer(schema: any, resolvers: any) {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    //tell Express to attach GraphQL functionality to the server
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }) as any;
  await server.start(); //start the GraphQL server.
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve) //run the server on port 4000
  );
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
}
//in the end, run the server and pass in our Schema and Resolver.
startApolloServer(Schema, Resolvers);