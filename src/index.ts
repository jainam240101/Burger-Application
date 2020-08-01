import "reflect-metadata"
import express, { Application } from "express"
import { ApolloServer } from "apollo-server-express"
import { buildSchema } from "type-graphql"
import {HelloWorld } from "./resolvers/HelloWorld"
import { MovieResolver } from "./resolvers/MovieResolvers"


(async () => {
    const app: Application = express()
    
    const apolloserver = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloWorld,MovieResolver]
        }),
        context: ({ req, res }) => ({ req, res })
    })
    apolloserver.applyMiddleware({ app, cors: false })
    
    app.listen(4000, () => {
        console.log("Server Up on Port 4000")
    })
})();
