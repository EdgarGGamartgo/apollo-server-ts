import { Resolvers } from "../generated/graphql";

export const UserResolver: Resolvers = {
  Query: {
    userInfo: () => 'INFO FROM USER RESOLVER',
  }
}