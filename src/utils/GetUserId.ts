import { GetTokenPayload } from './GetTokenPayload';

export const GetUserId = (req: { headers: { authorization: string } }, authToken?: string) => {
  if (req) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        throw new Error('No token found');
      }
      const { userId } = GetTokenPayload(token) as { userId: string };
      return userId;
    }
  } else if (authToken) {
    const { userId } = GetTokenPayload(authToken) as { userId: string };
    return userId;
  }

  throw new Error('Not authenticated');
}