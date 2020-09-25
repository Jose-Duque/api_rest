import User from '../models/User';

class UserController {
  // Create ou Store
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.send(users);
    } catch (error) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.params;

      const show = await User.findByPk(id);

      const { nome, email } = show;
      return res.send({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.json(['User not null']);
      }

      const atualiza = await user.update(req.body);
      const { id, nome, email } = atualiza;

      return res.json({ id, nome, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({ errors: ['User not null'] });
      }

      await user.destroy();

      return res.json('Deletado');
    } catch (error) {
      return res.json(error);
    }
  }
}

export default new UserController();
