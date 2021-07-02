import { ApolloServer } from 'apollo-server';

// 1 typeDefs defines our Schema operations
const typeDefs = `
  type Query {
    operationOne: Int!
    users: [User!]!  
    user(id: ID!): User
  }
  type Mutation {
    createUser(name: String!): User!
  }
  type User {
    id: ID!
    name: String!
  }
`

// 2 resolvers defines the execution of our typeDefs
const resolvers = {
  Query: {
    operationOne: () => 14
  }
}

// 3 server is the actual GRAPHQL SERVER we're building. It needs to be passed an options object where we declare our Schema definitions (typeDefs)
// and our Schema operations (resolvers).
export const server = new ApolloServer({
  typeDefs,
  resolvers,
})
