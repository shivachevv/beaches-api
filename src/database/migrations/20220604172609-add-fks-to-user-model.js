module.exports = {
  up: (queryInterface) =>
    queryInterface.addConstraint('User', {
      fields: ['roleId'],
      type: 'foreign key',
      name: 'user_roleId_fk',
      references: {
        table: 'Role',
        field: 'id',
      },
    }),

  down: async (queryInterface) => {
    queryInterface.removeConstraint('User', 'user_roleId_fk');
  },
};
