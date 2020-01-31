import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { createServer } from 'http'

dotenv.config()

import { ApolloServer } from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'
import { schema } from './graphql/schema'

const port: number = Number(process.env.BE_PORT) || 4000

const app = express()
const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
})

app.use('*', cors())
app.use(compression())

server.applyMiddleware({ app, path: '/graphql' })

const httpServer = createServer(app)

httpServer.listen(
    { port },
    (): void => console.log(`\n🚀      GraphQL is now running on http://localhost:${port}/graphql`))