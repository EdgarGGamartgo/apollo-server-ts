// Install lodash dependency as a tool to merge our resolvers --> npm i lodash
import { merge } from "lodash";
import {
  LinkResolver,
  UserResolver,
  VoteResolver
} from './resolvers';
import { LinkSubscriptions } from "./subscriptions";

const resolvers = merge(
  LinkResolver,
  UserResolver,
  VoteResolver,
  LinkSubscriptions
);

export default resolvers;