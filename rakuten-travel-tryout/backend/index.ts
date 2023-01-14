import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const prisma = new PrismaClient();
const app: Express = express();
const port = process.env.PORT;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/hotel_info', (req: Request, res: Response) => {
  res.send([
    {
      name: '地址',
      value: '日本, 906-0203, 935-8 Ueno Miyaguni, Miyakojima-shi, Okinawa',
    },
    { name: '入住時間', value: '14:00 - 19:00 ' },
    { name: '退房時間', value: '10:00 ' },
    { name: '客房總數', value: '12 ' },
    { name: '電話號碼', value: '+81 980 74 7500 ' },
    { name: '傳真號碼', value: '+81 980 74 7501' },
  ]);
});

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

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
