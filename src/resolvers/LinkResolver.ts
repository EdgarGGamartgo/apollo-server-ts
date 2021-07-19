import { NEW_LINK } from "../Constants";
import { Resolvers } from "../generated/graphql";

export const LinkResolver: Resolvers = {
  Query: {
    info: () => 'This is the API of our training session for GraphQL Fullstack',
    feed: async (parent, args, context) => {
      const where = args.filter
        ? {
          OR: [
            { description: { contains: args.filter } },
            { url: { contains: args.filter } },
          ],
        }
        : {}

      const links = await context.prisma.link.findMany({
        where,
        skip: args.skip,
        take: args.take,
        orderBy: args.orderBy
      })

      const count = await context.prisma.link.count({ where })

      return {
        links,
        count,
      }
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
      })
      context.pubsub.publish(NEW_LINK, newLink);
      return newLink;
    },
  }
}