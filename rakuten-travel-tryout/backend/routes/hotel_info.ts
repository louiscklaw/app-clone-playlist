import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const helloworld = (app: Express, prisma: PrismaClient) => {
  app.get('/hotel_infos', async (req: Request, res: Response) => {
    const hotel_infos = await prisma.hotelInfo.findMany({
      where: { enabled: true },
      // include: { author: true },
    });

    res.json(hotel_infos);
  });

  app.get('/hotel_info?:hotel_id', async (req: Request, res: Response) => {
    const hotels = await prisma.hotelInfo.findMany({
      where: { enabled: true, id: parseInt(req.query.hotel_id) },
      // include: { author: true },
    });

    res.json(hotels);
  });

  console.log('hotel_info route initialized');
};

export default helloworld;
