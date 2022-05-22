module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Flag', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
      },
      flag: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(100),
        unique: true,
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
      },
      deletedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
    }),

  down: async (queryInterface) => queryInterface.dropTable('Flag'),
};
