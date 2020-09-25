import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenComtroller {
  // create ou store para criar
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        return res.status(400).json({ errors: ['Email e password não pode ser vazio'] });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(400).json({ errors: ['Usuário não existe'] });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.status(400).json({ errors: ['Password invalid'] });
      }

      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ token });
    } catch (error) {
      res.json({ error });
    }
  }
}

export default new TokenComtroller();
