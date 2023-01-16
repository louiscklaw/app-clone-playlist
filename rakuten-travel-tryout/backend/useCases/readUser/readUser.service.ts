import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

export const readUserService = async token => {
  const prisma = new PrismaClient();

  try {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      let { email } = decodedToken;
      console.log({ email });

      const user = await prisma.user.findFirst({
        where: { email: email, valid: true },
      });

      return user;
    });

    return { msg: 'user not found' };
  } catch (err) {
    throw new Error(err);
  }
};
