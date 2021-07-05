import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Resolvers } from "../generated/graphql";

export const UserResolver: Resolvers = {
  Query: {
    userInfo: () => 'INFO FROM USER RESOLVER',
  },
  User: {
    links: (parent, args, context) => {
      return context.prisma.user.findUnique({ where: { id: parent.id } }).links();
    }
  },
  Mutation: {
    signup: async (parent, args, context) => {
      const password = await bcrypt.hash(args.password, 10);
      const user = await context.prisma.user.create({ data: { ...args, password } });
      const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET!);
      return {
        token,
        user
      }
    },
    login: async (parent, args, context) => {
      const user = await context.prisma.user.findUnique({ where: { email: args.email } });
      if (!user) {
        throw new Error('No such user found');
      }
      const valid = await bcrypt.compare(args.password, user.password);
      if (!valid) {
        throw new Error('Invalid password');
      }
      const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET!);
      return {
        token,
        user
      }
    },
  }
}