import express, { Express, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const helloworld = (app: Express, prisma: PrismaClient) => {
  app.get('/hotel_infos', async (req: Request, res: Response) => {
    const hotel_infos = await prisma.hotelInfo.findMany({
      where: { enabled: true },
      include: { awards: true },
    });

    res.json(hotel_infos);
  });

  app.get('/hotel_info?:hotel_id', async (req: Request, res: Response) => {
    let _id = 1;
    const hotels = await prisma.hotelInfo.findMany({
      where: { id: _id },
      include: {
        awards: true,
        covin_practice: true,
        hotel_type: true,
        facilities: true,
        language_accept: true,
        payment_accept: true,
        comments: true,
        //
      },
    });

    // include: { author: true },
    res.json(hotels);
  });

  console.log('hotel_info route initialized');
};

export default helloworld;
