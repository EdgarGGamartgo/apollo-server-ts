// Install lodash dependency as a tool to merge our resolvers --> npm i lodash
import { merge } from "lodash";
import { LinkResolver } from './LinkResolver';
import { UserResolver } from './UserResolver';
import { VoteResolver } from "./VoteResolver";

const resolvers = merge(
  LinkResolver,
  UserResolver,
  VoteResolver
);

export default resolvers;