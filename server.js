'use strict'

const { GraphQLServer } = require("graphql-yoga")
const greetingbot = require('@neville.dabreo/greetingbot')

const typeDefs = `
  type Query {
    Greeting(name: String): String!
  }
`

const resolvers = {
  Query: {
    Greeting: (_, { name }) => greetingbot(name),
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))