import express, { Express, Request, Response } from 'express';

const helloworld = (app: Express) => {
  app.get('/helloworld', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server helloworld');
  });

  console.log('root route initialized');
};

export default helloworld;
