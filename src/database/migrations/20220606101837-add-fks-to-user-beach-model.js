const fks = [
  {
    field: 'beachId',
    name: 'user-beach_beachId_fk',
    refTable: 'Beach',
    refField: 'id',
  },
  {
    field: 'userId',
    name: 'user-beach_userId_fk',
    refTable: 'User',
    refField: 'id',
  },
];
module.exports = {
  up: (queryInterface) => {
    return Promise.all(
      fks.map((fk) =>
        queryInterface.addConstraint('UserBeach', {
          fields: [fk.field],
          type: 'foreign key',
          name: fk.name,
          references: {
            table: fk.refTable,
            field: fk.refField,
          },
        })
      )
    );
  },

  down: async (queryInterface) => {
    fks.map((fk) => queryInterface.removeConstraint('UserBeach', fk.name));
  },
};
