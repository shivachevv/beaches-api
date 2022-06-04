module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('UserBeach', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      userId: {
        allowNull: false,
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'User',
          },
        },
      },
      beachId: {
        allowNull: false,
        type: Sequelize.DataTypes.UUID,
        references: {
          model: {
            tableName: 'Beach',
          },
        },
      },
      sets: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0,
      },
      seatPrice: {
        allowNull: false,
        type: Sequelize.DataTypes.FLOAT,
        defaultValue: 0,
      },
      umbrellaPrice: {
        allowNull: false,
        type: Sequelize.DataTypes.FLOAT,
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

  down: async (queryInterface) => queryInterface.dropTable('UserBeach'),
};
