const uuid = require('uuid');

const flags = [
  {
    id: uuid.v4(),
    flag: 'green',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: uuid.v4(),
    flag: 'yellow',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: uuid.v4(),
    flag: 'red',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
];

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Flag', flags);
  },
  down: (queryInterface) => {
    return queryInterface.bulkDelete('Flag', null, {});
  },
};
