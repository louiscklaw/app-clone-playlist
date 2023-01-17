import { Router } from 'express';
const authController = require('../controllers/authController');

const router = Router();

router.get('/user', (req, res) => {
  const token = req.cookies.jwt;

  console.log({ token });
  res.send('hello user');
});

// router.get('/signup', authController.signup_get);
// router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);

export default router;
