import { loginService } from './login.service';

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginService({ email, password });
    return res.status(200).json({ token: token });
  } catch (err) {
    return res.status(err.status || 500).json({ message: err.message } || err);
  }
};
