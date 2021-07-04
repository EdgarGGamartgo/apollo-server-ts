import { Resolvers } from "../generated/graphql";

export const LinkResolver: Resolvers = {
  Query: {
    info: () => 'This is the API of our training session for GraphQL Fullstack',
    feed: async (parent, args, context) => {
      return await context.prisma.link.findMany();
    }
  },
  Mutation: {
    post: async (parent, args, context, info) => {
      const newLink = await context.prisma.link.create({
        data: {
          url: args.url,
          description: args.description
        }
      })
      return newLink;
    },
  }
}