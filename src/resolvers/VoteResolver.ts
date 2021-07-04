import { Resolvers } from "../generated/graphql";

export const VoteResolver: Resolvers = {
  Query: {
    voteInfo: () => 'INFO FROM VOTE RESOLVER',
  }
}