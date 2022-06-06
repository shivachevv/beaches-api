const fks = [
  {
    field: 'beachAdminId',
    name: 'beach_beachAdminId_fk',
    refTable: 'User',
    refField: 'id',
  },
  {
    field: 'flagId',
    name: 'beach_flagId_fk',
    refTable: 'Flag',
    refField: 'id',
  },
];
module.exports = {
  up: (queryInterface) => {
    return Promise.all(
      fks.map((fk) =>
        queryInterface.addConstraint('Beach', {
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
    fks.map((fk) => queryInterface.removeConstraint('Beach', fk.name));
  },
};
