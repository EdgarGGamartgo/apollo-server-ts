import { Link, Resolvers } from "../generated/graphql";
import { NEW_LINK } from './../Constants'

export const LinkSubscriptions: Resolvers = {
  Subscription: {
    newLink: {
      subscribe: (parent, args, context, info) => {
        return context.pubsub.asyncIterator(NEW_LINK)
      },
      resolve: (payload: Link) => {
        return payload
      }
    }
  }
}