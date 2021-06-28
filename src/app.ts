import { ApolloServer } from 'apollo-server';

// 1
const typeDefs = `
  type Query {
    info: String!
  }
`

// 2
const resolvers = {
  Query: {
    info: () => null
  }
}

// 3
export const server = new ApolloServer({
  typeDefs,
  resolvers,
})
