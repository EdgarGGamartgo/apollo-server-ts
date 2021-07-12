import fs from 'fs';
import path from 'path';
import { ApolloServer, PubSub } from 'apollo-server';
import { PrismaClient } from '@prisma/client';
import { GetUserId } from './../src/utils';
import resolvers from './ResolverMap';

const prisma = new PrismaClient();
const pubsub = new PubSub();

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
      pubsub,
      userId:
        req && req.headers.authorization
          ? GetUserId(req as { headers: { authorization: string } })
          : null
    }
  }
})