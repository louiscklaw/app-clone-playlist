import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const helloworld = (app: Express) => {
  app.get('/helloworld', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server helloworld');
  });

  console.log('root route initialized');

  app.get('/feed', async (req, res) => {
    const prisma = new PrismaClient();
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: { author: true },
    });

    prisma.$disconnect();
    res.json(posts);
  });

  app.post('/post', async (req, res) => {
    const { title, content, authorEmail } = req.body;
    const prisma = new PrismaClient();
    const post = await prisma.post.create({
      data: {
        title,
        content,
        published: false,
        author: { connect: { email: authorEmail } },
      },
    });
    prisma.$disconnect();
    res.json(post);
  });

  app.put('/publish/:id', async (req, res) => {
    const { id } = req.params;
    const prisma = new PrismaClient();
    const post = await prisma.post.update({
      where: { id: +id },
      data: { published: true },
    });
    prisma.$disconnect();
    res.json(post);
  });

  app.delete('/user/:id', async (req, res) => {
    const { id } = req.params;
    const prisma = new PrismaClient();
    const user = await prisma.user.delete({
      where: { id: +id },
    });

    prisma.$disconnect();
    res.json(user);
  });
};

export default helloworld;
