const jwt = require('jsonwebtoken');
import { NextFunction, Response, Request } from 'express';
import { PrismaClient } from '@prisma/client';

let { TOKEN_SECRET } = process.env;

interface i_decodedToken {
  id: number;
}

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, TOKEN_SECRET, (err: Error, decodedToken: i_decodedToken) => {
      if (err) {
        console.log(decodedToken);

        console.log(err.message);
        res.redirect('/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/login');
  }
};

const checkUser = (req: Request, res: Response, next: NextFunction) => {
  let prisma: PrismaClient;

  try {
    prisma = new PrismaClient();
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, TOKEN_SECRET, async (err: Error, decodedToken: i_decodedToken) => {
        console.log(decodedToken);
        let { id } = decodedToken;

        if (err) {
          res.locals.user = null;
          next();
        } else {
          // let user = await User.findById(decodedToken.id);
          let user = await prisma.user.findFirst({ where: { id: id } });
          delete user.password;
          console.log({ user });

          res.locals.user = user;
          next();
        }
      });
    } else {
      console.log('cannot find a valid jwt, redirect to login page');

      res.locals.user = null;
      res.redirect('/login');
      // next();
    }
  } catch (error) {
  } finally {
    prisma.$disconnect();
  }
};

export { requireAuth, checkUser };
