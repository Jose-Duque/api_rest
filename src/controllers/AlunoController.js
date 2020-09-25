import Aluno from '../models/Aluno';
import Photo from '../models/Photo';

class AlunoComtroller {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
      include: {
        model: Photo,
        attributes: ['url', 'filename'],
      },
    });
    res.json({ alunos });
  }

  // store
  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      return res.json(novoAluno);
    } catch (e) {
      return res.status(401).json({ error: e.errors.map((err) => err.message) });
    }
  }

  // update
  async update(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);

      if (!aluno) {
        return res.status(401).json(['Aluno não existe']);
      }

      const atualizar = await aluno.update(req.body);

      const {
        id, nome, sobrenome, email, idade, peso, altura,
      } = atualizar;
      return res.json({
        id, nome, sobrenome, email, idade, peso, altura,
      });
    } catch (error) {
      return res.json(error);
    }
  }

  // Show
  async show(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['url', 'filename'],
        },
      });
      if (!aluno) {
        return res.status(401).json(['Aluno não existe']);
      }
      return res.json(aluno);
    } catch (error) {
      return res.json(null);
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) {
        return res.status(401).json({ erros: 'Usuario is null' });
      }
      await aluno.destroy();
      return res.json({ delete: 'Deletado' });
    } catch (error) {
      return res.json(null);
    }
  }
}

export default new AlunoComtroller();
