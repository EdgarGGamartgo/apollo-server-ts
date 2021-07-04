import fs from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import resolvers from '../resolvers/ResolverMap';

// Install @prisma/client --> For accessing a database to our server
// Install prisma

// Install graphql-codegen

const prisma = new PrismaClient();

export const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, './../schema.graphql'),
    'utf8'
  ),
  resolvers,
  context: {
    prisma
  }
})