import { PrismaClient } from '@prisma/client';
import * as yup from 'yup';
import * as bcrypt from 'bcrypt';

const User = require('../models/User');
const jwt = require('jsonwebtoken');

const handleErrors = err => {};

const maxAge = 3 * 24 * 60 * 60;

const createToken = ({ email }) => {
  return jwt.sign({ email }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

const loginService = async ({ email, password }) => {
  let prisma;

  try {
    prisma = new PrismaClient();
    // console.log({ email, password });

    const hashedPassword = await prisma.user.findFirst({
      where: { email: email },
    });

    // console.log({ test: bcrypt.compareSync(password, hashedPassword.password) });

    if (hashedPassword && bcrypt.compareSync(password, hashedPassword.password)) {
      return createToken({ email: email });
    } else {
      throw { status: 401, message: 'Email ou senha inválidos' };
    }
  } catch (err) {
    // throw new Error(err);
    console.log({ err });
  } finally {
    await prisma?.$disconnect();
  }
};

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const signup_get = (req, res) => {};

export const signup_post = (req, res) => {};

export const login_get = (req, res) => {};

export const login_post = async (req, res) => {
  try {
    const data = req.body;
    await loginSchema.validate(data);

    const { email, password } = req.body;
    // console.log({ email, password });
    const token = await loginService({ email, password });
    // console.log({ token });

    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ msg: 'login ok', email });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ err });
  }
};

export const logout_get = (req, res) => {};
