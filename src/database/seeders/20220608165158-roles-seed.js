const uuid = require('uuid');

const roles = [
  {
    id: uuid.v4(),
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: uuid.v4(),
    role: 'beach_admin',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: uuid.v4(),
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
];

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Role', roles);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Role', null, {});
  },
};
