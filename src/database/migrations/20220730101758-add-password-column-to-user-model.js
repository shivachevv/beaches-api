'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.addColumn('User', 'password', {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('User', 'password');
  },
};
