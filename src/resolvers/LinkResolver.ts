import { Resolvers } from "../generated/graphql";
import { NEW_LINK } from './../Constants';

export const LinkResolver: Resolvers = {
  Query: {
    info: () => 'This is the API of our training session for GraphQL Fullstack',
    feed: async (parent, args, context) => {
      return await context.prisma.link.findMany();
    }
  },
  Link: {
    postedBy: (parent, args, context) => {
      return context.prisma.link.findUnique({ where: { id: parent.id } }).postedBy();
    }
  },
  Mutation: {
    post: async (parent, args, context, info) => {
      const { userId } = context;
      const newLink = await context.prisma.link.create({
        data: {
          url: args.url,
          description: args.description,
          postedBy: { connect: { id: userId } }
        }
      });
      context.pubsub.publish(NEW_LINK, newLink);

      return newLink;
    },
  }
}
