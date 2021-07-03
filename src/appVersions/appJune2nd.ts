import fs from 'fs';
import path from 'path';
import { ApolloServer } from 'apollo-server';

// Tasks
// 1. Create an update Mutation for updating an existing Link in out Link List

// 2. Create a delete Mutation for deleting an existing Link in out Link List

// Tomorrow

// 1. Add database.
// 2. Add ORM

type LinkType = {
  id: string,
  description: string,
  url: string
}

type PostLinkType = {
  description: string,
  url: string
}

let links: LinkType[] = [{
  id: 'link-0',
  description: 'Fullstack training for GraphQL',
  url: 'www.test.com'
}]

let idCount = links.length;
const resolvers = {
  Query: {
    info: () => 'This is the API of our training session for GraphQL Fullstack',
    feed: () => links
  },
  Mutation: {
    post: (parent: LinkType, args: PostLinkType) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      };
      links.push(link);
      return link;
    },
    // update: (parent: LinkType, args: PostLinkType) => {
    //   // updates ...
    // },
    // delete: (parent: LinkType, args: PostLinkType) => {
    //   // deletes ...
    // }
  }
}

export const server = new ApolloServer({
  typeDefs: fs.readFileSync(
    path.join(__dirname, './../schema.graphql'),
    'utf8'
  ),
  resolvers
})