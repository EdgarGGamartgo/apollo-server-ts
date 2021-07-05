import jwt from 'jsonwebtoken';

export const GetTokenPayload = (token: string) => {
  return jwt.verify(token, process.env.APP_SECRET!);
}
