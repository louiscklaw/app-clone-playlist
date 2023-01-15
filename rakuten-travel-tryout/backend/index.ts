import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import cors from 'cors';

import HelloworldCron from './scheduledFunctions';
import mailer from './nodemailer';

(async () => {
  await mailer.sendMail({
    from: 'from@me.com',
    to: 'to@you.com',
    subject: 'Hello',
    text: 'Hello, World!',
  });
})();

dotenv.config();

const prisma = new PrismaClient();
const app: Express = express();
const port = process.env.PORT;

// routes
import helloworld from './routes/index';
import hotel_info from './routes/hotel_info';

app.use(cors());

// init routes
helloworld(app, prisma);
hotel_info(app, prisma);

// start cron job if any
HelloworldCron.start();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
