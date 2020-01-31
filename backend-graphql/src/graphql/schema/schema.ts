import { GraphQLSchema } from 'graphql'
import 'graphql-import-node'
import { makeExecutableSchema } from 'graphql-tools'

import { resolverMap } from './../resolvers'
import * as typeDefs from './schema.graphql'

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers: resolverMap,
})