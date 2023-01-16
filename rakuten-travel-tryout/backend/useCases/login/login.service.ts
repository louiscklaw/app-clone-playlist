import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import { prisma } from '../../prisma/client.js';
import { PrismaClient } from '@prisma/client';

export const loginService = async ({ email, password }) => {
  try {
    const prisma = new PrismaClient();
    const hashedPassword = await prisma.user.findUnique({
      where: { email: email },
      select: { password: true },
    });
    if (hashedPassword && bcrypt.compareSync(password, hashedPassword.password)) {
      return jwt.sign({ email: email }, process.env.TOKEN_SECRET);
    } else {
      throw { status: 401, message: 'Email ou senha inválidos' };
    }
  } catch (err) {
    throw new Error(err);
  }
};
