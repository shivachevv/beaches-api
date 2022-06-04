module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Beach', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING(100),
        unique: true,
      },
      description: {
        allowNull: true,
        type: Sequelize.DataTypes.STRING(100),
        defaultValue: '',
      },
      beachAdminId: {
        allowNull: false,
        type: Sequelize.DataTypes.UUID,
      },
      availableSets: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0,
      },
      capacitySets: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0,
      },
      flagId: {
        allowNull: false,
        type: Sequelize.DataTypes.UUID,
      },
      seatPrice: {
        allowNull: false,
        type: Sequelize.DataTypes.FLOAT,
      },
      umbrellaPrice: {
        allowNull: false,
        type: Sequelize.DataTypes.FLOAT,
      },
      coordinateLat: {
        allowNull: false,
        type: Sequelize.DataTypes.FLOAT,
      },
      coordinateLng: {
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

  down: async (queryInterface) => queryInterface.dropTable('Beach'),
};
