import { merge } from "lodash";
import { LinkResolver } from './resolvers/LinkResolver';
import { UserResolver } from './resolvers/UserResolver';
import { VoteResolver } from "./resolvers/VoteResolver";
import { LinkSubscriptions } from './subscriptions'

const resolvers = merge(
  LinkResolver,
  UserResolver,
  VoteResolver,
  LinkSubscriptions
);

export default resolvers;