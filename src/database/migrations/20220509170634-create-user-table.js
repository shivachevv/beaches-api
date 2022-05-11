module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('User', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.STRING(100),
      },
      email: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(100),
        unique: true,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(100),
      },
      lastName: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(100),
      },
      deposit: {
        allowNull: false,
        type: Sequelize.DataTypes.FLOAT,
        defaultValue: 0,
      },
      role: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(100),
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

  down: async (queryInterface) => queryInterface.dropTable('User'),
};
