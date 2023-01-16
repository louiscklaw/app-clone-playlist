import { Router } from 'express';
import { validateToken } from '../utils/validateToken';
import { loginSchema, validateLogin } from '../useCases/login/validateLogin';
import { loginController } from '../useCases/login/login.controller';
import { readUserController } from '../useCases/readUser/readUser.controller';

export const routes = Router();

routes.get('/user', validateToken, readUserController);
routes.post('/login', validateLogin(loginSchema), loginController);

routes.get('/helloworld', validateToken, (req, res) => {
  res.send('helloworld');
});
