const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [{
      nome: 'John Doe',
      email: 'john@gmail.com',
      password_hash: await bcrypt.hash('1234567', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Cilene',
      email: 'cilene@gmail.com',
      password_hash: await bcrypt.hash('1234567', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Lary',
      email: 'lary@gmail.com',
      password_hash: await bcrypt.hash('1234567', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    ], {});
  },

  down: () => {},
};
