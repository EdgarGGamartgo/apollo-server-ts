import fs from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import resolvers from '../src/resolvers/ResolverMap';
import { GetUserId } from './../src/utils';

const prisma = new PrismaClient();

export const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, './schema.graphql'),
    'utf8'
  ),
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      userId:
        req && req.headers.authorization
          ? GetUserId(req as { headers: { authorization: string } })
          : null
    }
  }
})