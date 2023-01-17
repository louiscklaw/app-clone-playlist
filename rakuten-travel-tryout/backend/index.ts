import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// import { routes } from './routes/user.routes';
import authRoutes from './routes/authRoutes';
import { checkUser } from './middleware/authMiddleware';

import HelloworldCron from './scheduledFunctions';
// import mailer from './nodemailer';

// routes
import helloworld from './routes/index';
import hotel_info from './routes/hotel_info';

dotenv.config();

const prisma = new PrismaClient();
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(cookieParser());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/dashboard*', checkUser);

app.use(authRoutes);

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
