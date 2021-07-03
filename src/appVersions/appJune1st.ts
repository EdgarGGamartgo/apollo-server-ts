import { ApolloServer } from 'apollo-server';

// Customized data type

// 1 typeDefs defines our Schema operations
// type Query read data
// type Mutation creates/deletes/updates data
// type User is an object type that we use in this example to define the type of data (structure) of our response
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
