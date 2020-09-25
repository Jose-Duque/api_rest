import Aluno from '../models/Aluno';

class HomeComtroller {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Laryssa p. d',
      sobrenome: 'Pereira',
      email: 'laryssa@gmail.com',
      peso: 40,
      idade: 10,
      altura: 1.45,
    });
    res.json({ novoAluno });
  }
}

export default new HomeComtroller();
