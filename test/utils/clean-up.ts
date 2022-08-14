import { Model } from 'sequelize';

const cleanUp = async (models: Array<any>): Promise<void> => {
  await Promise.all(
    models.map((model) => model.destroy({ where: {}, force: true }))
  );
};

export default cleanUp;
