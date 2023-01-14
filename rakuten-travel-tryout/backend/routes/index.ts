import express, { Express, Request, Response } from 'express';

const helloworld = (app: Express, prisma: PrismaClient) => {
  app.get('/helloworld', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server helloworld');
  });

  console.log('root route initialized');

  app.get('/feed', async (req, res) => {
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: { author: true },
    });

    res.json(posts);
  });

  app.post('/post', async (req, res) => {
    const { title, content, authorEmail } = req.body;

    const post = await prisma.post.create({
      data: {
        title,

        content,

        published: false,

        author: { connect: { email: authorEmail } },
      },
    });

    res.json(post);
  });

  app.put('/publish/:id', async (req, res) => {
    const { id } = req.params;

    const post = await prisma.post.update({
      where: { id },

      data: { published: true },
    });

    res.json(post);
  });

  app.delete('/user/:id', async (req, res) => {
    const { id } = req.params;

    const user = await prisma.user.delete({
      where: {
        id,
      },
    });

    res.json(user);
  });
};

export default helloworld;
