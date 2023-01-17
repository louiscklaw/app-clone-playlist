import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const routes_user = (app: Express) => {
  app.get('/users', async (req: Request, res: Response) => {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany({
      where: {},
      include: {
        //
        _count: true,
        // Profile: true,
        // posts: true,
      },
    });

    prisma.$disconnect();
    res.json(users);
  });

  console.log('user route initialized');
};

export default routes_user;
