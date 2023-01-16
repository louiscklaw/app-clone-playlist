import { readUserService } from './readUser.service';

export const readUserController = async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const user = await readUserService(token);
    // console.log({ file: 'readUser.controller', user });

    return res.status(200).json(user);
  } catch (err) {
    return res.status(err.status || 500).json({ message: err.message } || err);
  }
};
